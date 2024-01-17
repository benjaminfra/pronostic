type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <div className="lg:ml-[30.00%] lg:mr-[13.33%] my-32 sm:mx-10 mx-2 max-w-screen">
      {children}
    </div>
  );
};

export default PageContent;
