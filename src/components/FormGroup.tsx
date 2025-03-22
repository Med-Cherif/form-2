import { HTMLAttributes } from "react";

const FormGroup = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className="form-group">{children}</div>;
};

export default FormGroup;
