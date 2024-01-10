import Ball from "../icons/Ball";
import AbsoluteCenter from "../layout/AbsoluteCenter";

const PageLoader = () => {
  return (
    <div className="w-screen h-screen bg-neutral-800">
      <AbsoluteCenter className=" bg-neutral-800">
        <Ball animated={true} />
      </AbsoluteCenter>
    </div>
  );
};

export default PageLoader;
