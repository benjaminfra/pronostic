import FormLabel from "@/components/form/FormLabel";
import Input from "@/components/form/Input";

type InputLabelProps = {
  label: string;
  errorMsg: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputWithLabel: React.FC<InputLabelProps> = ({
  label,
  errorMsg,
  ...props
}) => {
  return (
    <div>
      <FormLabel dataTest={`${props.id}-label`}>{label}</FormLabel>
      <div className="mt-2">
        <Input
          dataTest={`${props.id}-input`}
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          errorMsg={errorMsg}
          minLength={props.minLength}
          autoComplete={props.autoComplete}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
