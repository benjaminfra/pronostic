type AlertTitleProps = {
  children: React.ReactNode;
};

const AlertTitle = ({ children }: AlertTitleProps) => {
  return (
    <div>
      <p className="font-bold" data-test="alert-title">
        {children}
      </p>
    </div>
  );
};

export default AlertTitle;
