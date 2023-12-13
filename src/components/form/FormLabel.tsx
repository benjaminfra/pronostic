type FormLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  dataTest?: string;
};

const FormLabel: React.FC<FormLabelProps> = ({ dataTest, ...props }) => {
  return (
    <label
      data-test={dataTest}
      className="block text-sm font-medium leading-6 text-gray-900"
      {...props}
    ></label>
  );
};

export default FormLabel;
