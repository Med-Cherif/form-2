import { HTMLAttributes } from "react";

const Label = ({ children, ...props }: HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className="form-label" {...props}>
      {children}
    </label>
  );
};

export default Label;
