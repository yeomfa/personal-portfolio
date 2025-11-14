import Image from 'next/image';

const YeomLogo = ({ width, height }: { width: number; height: number }) => {
  return (
    <Image
      src={'/yeom-logo.svg'}
      style={{ height, width }}
      width="0"
      height="0"
      sizes="100vw"
      alt="Yeom's logo"
    />
  );
};

export default YeomLogo;
