type AlertTitleProps = {
  children: React.ReactNode;
};

const AlertTitle = ({ children }: AlertTitleProps) => {
  return (
    <div>
      <p className="font-bold">{children}</p>
    </div>
  );
};

export default AlertTitle;
