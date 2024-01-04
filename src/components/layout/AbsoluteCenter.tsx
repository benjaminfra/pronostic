type AbsoluteCenterProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const AbsoluteCenter: React.FC<AbsoluteCenterProps> = ({
  children,
  ...props
}) => {
  const classes = `
    ${props.className ? props.className : ""}
    absolute left-1/2 top-1/2 ps-6 pe-6
    -translate-y-2/4 -translate-x-2/4 bg-inherit
  `;

  return (
    <div className={classes} data-test="absolute-center">
      {children}
    </div>
  );
};

export default AbsoluteCenter;
