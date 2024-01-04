type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  dataTest?: string;
  errorMsg?: string;
};

const Input: React.FC<InputProps> = ({ dataTest, errorMsg, ...props }) => {
  return (
    <>
      <input
        data-test={dataTest}
        {...props}
        className="peer block w-full rounded-md border-0 py-1.5 px-3 bg-dark-moderate-blue
       shadow-sm 
       ring-1
       ring-inset ring-gray-300 placeholder:text-gray-400
       focus:ring-2 
       focus:ring-inset 
       focus-visible:outline-none focus:ring-yellow-500 sm:text-sm sm:leading-6
       invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-500"
      />
      <span
        data-test={`errorSpan-${dataTest}`}
        className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
      >
        {errorMsg}
      </span>
    </>
  );
};

export default Input;
