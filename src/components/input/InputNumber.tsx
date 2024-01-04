const InputNumber: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  const classes = `
    ${props.className}
    border 
    focus:border-yellow-500 
    hover:border-yellow-500
    shadow-sm
    p-2.5
    rounded-md
    text-xl
    bg-dark-moderate-blue
  `;

  return <input type="number" {...props} className={classes} />;
};

export default InputNumber;
