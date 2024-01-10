type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <div className="2xl:max-w-4xl xl:max-w-3xl lg:max-w-xl md:max-w-md md:mx-auto my-32 sm:mx-10 mx-2 max-w-screen">
      {children}
    </div>
  );
};

export default PageContent;
