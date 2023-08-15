import React from "react";

interface BlockProps {
  value?: string | null;
  onClick?: () => void;
}
const Square: React.FC<BlockProps> = (props) => {
  return (
    <div onClick={props.onClick} className="square" data-value={props.value}>
      {props.value}
    </div>
  );
};

export default Square;
