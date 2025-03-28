import { Link } from "react-router-dom";

type ButtonProps = {
  innerText: string;
  reaction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  link?: string;
  className?: string;
};

/** Button with uniform styles,
  @props Takes
  InnerText: String of inner text
  Reaction: OnClick reaction todo when the event happens.
*/
const Button: React.FC<ButtonProps> = (props) => {
  return ( 
    <button onClick={props.reaction}>
      {props.link ? <Link to={props.link}>{props.innerText}</Link> : props.innerText}
    </button>
  );
};

export default Button;
