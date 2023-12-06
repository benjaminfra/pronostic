const AbsoluteCenter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className="absolute left-1/2 top-1/2 ps-6 pe-6 -translate-y-2/4 -translate-x-2/4 bg-white"
      data-test="absolute-center"
    >
      {children}
    </div>
  );
};

export default AbsoluteCenter;
