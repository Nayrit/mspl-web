#!/bin/bash
# Ensures the Next.js app is listening. Run from cron every few minutes and at
# @reboot: the shared host restarts without running any PM2 boot hook, which is
# what produces Apache 503s.

APP_DIR="/home/www/mastersimex.com"
APP_NAME="mastersimex"
PORT="26398"
LOG="$APP_DIR/keepalive.log"

export NVM_DIR="/home/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" >/dev/null 2>&1
export PM2_HOME="/home/.pm2"
export PATH="$NVM_DIR/versions/node/v22.23.1/bin:$PATH"

log() { echo "$(date '+%F %T') $*" >> "$LOG"; }

cd "$APP_DIR" || exit 1

code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 15 "http://127.0.0.1:$PORT/" 2>/dev/null)
if [ "$code" = "200" ] || [ "$code" = "301" ] || [ "$code" = "302" ]; then
  exit 0
fi

log "health check failed (http=$code), recovering"

if ! pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  pm2 resurrect >> "$LOG" 2>&1
fi

if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  pm2 restart "$APP_NAME" --update-env >> "$LOG" 2>&1
else
  pm2 start npm --name "$APP_NAME" -- start -- -H 127.0.0.1 -p "$PORT" >> "$LOG" 2>&1
fi

pm2 save >> "$LOG" 2>&1
log "recovery finished (http=$(curl -s -o /dev/null -w '%{http_code}' --max-time 15 "http://127.0.0.1:$PORT/"))"
