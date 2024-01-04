import LeftArrow from "../icons/LeftArrow";
import RoundButton, { RoundButtonProps } from "./RoundButton";

type LeftArrowButtonProps = Omit<RoundButtonProps, "children">;

const LeftArrowButton: React.FC<LeftArrowButtonProps> = (props) => {
  return (
    <RoundButton
      className="ease-in-out hover:-translate-y-1 hover:scale-110 transition-all bg-dark-moderate-blue"
      colorScheme="transparent"
      {...props}
    >
      <LeftArrow />
    </RoundButton>
  );
};

export default LeftArrowButton;
