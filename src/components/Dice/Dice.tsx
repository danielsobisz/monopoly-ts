type DiceProps = {};

export function Dice(props: DiceProps): React.ReactElement {
  const {} = props;

  const roll = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  };

  return <button onClick={() => roll()}>Roll the Dice!</button>;
}
