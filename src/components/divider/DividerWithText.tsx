import AbsoluteCenter from "../layout/AbsoluteCenter";

const DividerWithText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="relative my-2">
      <hr
        aria-orientation="horizontal"
        className="border-solid opacity-60 w-100 border-b-1"
        data-test="divider"
      />
      <AbsoluteCenter>
        <div className="bg-dark-night-blue p-5">{text}</div>
      </AbsoluteCenter>
    </div>
  );
};

export default DividerWithText;
