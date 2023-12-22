type DivSkeletonProps = {
  rounded?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const DivSkeleton: React.FC<DivSkeletonProps> = ({
  rounded = "full",
  ...props
}) => {
  const classes = `${props.className} bg-gray-200 rounded-${rounded}`;
  return <div className={classes} />;
};

export default DivSkeleton;
