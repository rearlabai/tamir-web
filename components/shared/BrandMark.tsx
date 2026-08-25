import Image from 'next/image';

interface BrandMarkProps {
  className?: string;
  size?: number;
}

export default function BrandMark({ className = '', size = 36 }: BrandMarkProps) {
  return (
    <Image
      src="/autolog-app-icon.png"
      alt=""
      aria-hidden="true"
      className={`rounded-xl ${className}`}
      height={size}
      priority
      width={size}
    />
  );
}
