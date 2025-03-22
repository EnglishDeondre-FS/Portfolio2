type ButtonProps = {
  innerText: string;
  reaction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

/** Button with uniform styles,
  @props Takes
  InnerText: String of inner text
  Reaction: OnClick reaction todo when the event happens.
*/
const Button: React.FC<ButtonProps> = (props) => {
  return <button onClick={props.reaction}>{props.innerText}</button>;
};

export default Button;
