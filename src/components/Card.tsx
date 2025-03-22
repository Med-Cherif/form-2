import { HTMLAttributes } from "react";

const Card = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className="card">{children}</div>;
};

export default Card;
