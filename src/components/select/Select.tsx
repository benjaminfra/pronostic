export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <select
      className="h-full border bg-dark-moderate-blue focus:border-yellow-500 hover:border-yellow-500 shadow-sm rounded-md py-2.5 px-4 text-sm w-full block text-center"
      {...props}
    ></select>
  );
};

export default Select;
