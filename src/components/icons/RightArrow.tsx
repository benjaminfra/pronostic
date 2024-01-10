import { IconProps } from "./IconProps";

const RightArrow: React.FC<IconProps> = ({ width = 10, height = 10 }) => {
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
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );
};

export default RightArrow;
