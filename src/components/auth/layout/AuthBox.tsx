const AuthBox: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <div className="max-w-xl mx-auto mt-[10vh] border-gray-400 border rounded-md pb-10 bg-dark-moderate-blue">
      <div className="py-6 text-center border-b border-gray-400">
        <p className="font-bold text-lg" data-test="auth-title">
          {title}
        </p>
      </div>
      <div className="px-5" data-test="auth-content">
        {children}
      </div>
    </div>
  );
};

export default AuthBox;
