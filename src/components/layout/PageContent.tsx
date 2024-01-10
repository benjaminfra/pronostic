type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <div className="2xl:max-w-4xl xl:max-w-3xl lg:max-w-xl md:max-w-md md:mx-auto my-32 mx-10">
      {children}
    </div>
  );
};

export default PageContent;
