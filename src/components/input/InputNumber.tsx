type InputNumberProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputNumber: React.FC<InputNumberProps> = ({ ...props }) => {
  return (
    <input
      type="number"
      {...props}
      className="h-full w-20 border focus:border-yellow-500 hover:border-yellow-500 shadow-sm p-2.5 rounded-md text-xl"
    />
  );
};

export default InputNumber;
