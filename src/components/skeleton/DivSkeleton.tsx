const DivSkeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const classes = `${props.className} bg-gray-200 rounded-full mx-4`;
  return <div className={classes} />;
};

export default DivSkeleton;
