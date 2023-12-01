const AlertDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};

export default AlertDescription;
