import FormLabel from "@/components/form/FormLabel";
import Input from "@/components/form/Input";

type InputValidation = {
  minLength: number;
};

type InputLabelProps = {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg: string;
  validation?: InputValidation;
  autoComplete?: string;
};

const InputWithLabel: React.FC<InputLabelProps> = ({
  label,
  id,
  type,
  value,
  onChange,
  errorMsg,
  validation,
  autoComplete,
}) => {
  return (
    <div>
      <FormLabel dataTest={`${id}-label`}>{label}</FormLabel>
      <div className="mt-2">
        <Input
          dataTest={`${id}-input`}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          errorMsg={errorMsg}
          minLength={validation?.minLength}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
