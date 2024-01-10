import { IconProps } from "./IconProps";

const LeftArrow: React.FC<IconProps> = ({ width = 10, height = 10 }) => {
  const iconClass = `w-${width} h-${height}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className={iconClass}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
};

export default LeftArrow;
