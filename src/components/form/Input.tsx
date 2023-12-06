type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  dataTest?: string;
};

const Input: React.FC<InputProps> = ({ dataTest, ...props }) => {
  return (
    <input
      data-test={dataTest}
      {...props}
      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-visible:outline-none focus:ring-yellow-500 sm:text-sm sm:leading-6"
    />
  );
};

export default Input;
