import RightArrow from "../icons/RightArrow";
import RoundButton, { RoundButtonProps } from "./RoundButton";

type RightArrowButtonProps = Omit<RoundButtonProps, "children">;

const RightArrowButton: React.FC<RightArrowButtonProps> = (props) => {
  return (
    <RoundButton
      className="ease-in-out hover:-translate-y-1 hover:scale-110 transition-all bg-dark-moderate-blue"
      colorScheme="transparent"
      {...props}
    >
      <RightArrow />
    </RoundButton>
  );
};

export default RightArrowButton;
