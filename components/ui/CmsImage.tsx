import Image, { type ImageProps } from "next/image";
import { isCmsUploadPath, toImageSrc } from "@/lib/cms/image-path";

type CmsImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/**
 * next/image for CMS paths. Uploads under /uploads/ are served dynamically and
 * must stay unoptimized so production does not 400 on post-start files.
 */
export default function CmsImage({ src, alt, ...props }: CmsImageProps) {
  const resolved = toImageSrc(src);
  return (
    <Image
      src={resolved}
      alt={alt}
      unoptimized={isCmsUploadPath(resolved)}
      {...props}
    />
  );
}
