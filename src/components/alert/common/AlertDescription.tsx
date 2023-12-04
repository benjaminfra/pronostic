const AlertDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <p data-test="alert-description">{children}</p>
    </div>
  );
};

export default AlertDescription;
