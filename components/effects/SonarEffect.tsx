import SonarCircle from './SonarCircle';

export default function SonarEffect() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Circle 1 */}
      <SonarCircle
        className="
          h-[350px] w-[350px]
          sm:h-[500px] sm:w-[500px]
          md:h-[650px] md:w-[650px]
          lg:h-[800px] lg:w-[800px]
          xl:h-[950px] xl:w-[950px]
        "
        borderClass="border border-blue-300/20"
        delay="0s"
      />

      {/* Circle 2 */}
      <SonarCircle
        className="
          h-[260px] w-[260px]
          sm:h-[380px] sm:w-[380px]
          md:h-[500px] md:w-[500px]
          lg:h-[620px] lg:w-[620px]
          xl:h-[750px] xl:w-[750px]
        "
        borderClass="border border-blue-300/25"
        delay="0.4s"
      />

      {/* Circle 3 */}
      <SonarCircle
        className="
          h-[180px] w-[180px]
          sm:h-[280px] sm:w-[280px]
          md:h-[380px] md:w-[380px]
          lg:h-[480px] lg:w-[480px]
          xl:h-[580px] xl:w-[580px]
        "
        borderClass="border border-blue-300/30"
        delay="0.8s"
      />

      {/* Circle 4 */}
      <SonarCircle
        className="
          h-[110px] w-[110px]
          sm:h-[180px] sm:w-[180px]
          md:h-[250px] md:w-[250px]
          lg:h-[320px] lg:w-[320px]
          xl:h-[400px] xl:w-[400px]
        "
        borderClass="border border-blue-300/35"
        delay="1.2s"
      />
    </div>
  );
}
