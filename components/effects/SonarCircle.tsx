type Props = {
  className: string;
  delay: string;
  borderClass: string;
};

export default function SonarCircle({ className, delay, borderClass }: Props) {
  return (
    <div
      className={`
        absolute rounded-full 
        ${className} 
        ${borderClass} 
        animate-sonar
      `}
      style={{ animationDelay: delay }}
    />
  );
}
