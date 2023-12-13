import { Link } from "react-router-dom";
import Button, { ButtonProps } from "./Button";

type ButtonLinkProps = ButtonProps & {
  to: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<ButtonLinkProps> = ({ to, children, ...props }) => {
  return (
    <Link to={to} data-test="link">
      <Button {...props}>{children}</Button>
    </Link>
  );
};

export default LinkButton;
