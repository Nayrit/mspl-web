#!/bin/bash
# Detached supervisor loop. The host blocks crontab and user systemd units, so
# this is the only available way to auto-recover the Next.js app after a crash.
# It does NOT survive a host reboot - that needs a boot hook from the provider.

APP_DIR="/home/www/mastersimex.com"
LOCK="$APP_DIR/.watchdog.lock"

exec 9>"$LOCK"
flock -n 9 || exit 0

while true; do
  "$APP_DIR/keepalive.sh"
  sleep 120
done
