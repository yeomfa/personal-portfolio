import Image from 'next/image';

const YeomLogo = ({ width, height }: { width: number; height: number }) => {
  return (
    <Image
      src={'/yeom-logo.svg'}
      width={width}
      height={height}
      alt="Yeom's logo"
    />
  );
};

export default YeomLogo;
