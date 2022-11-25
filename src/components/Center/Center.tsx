type CenterProps = {};

export function Center(props: CenterProps): React.ReactElement {
  // const {} = props;

  return (
    <div className="center">
      <div className="community-chest-deck">
        <h2 className="label">Community Chest</h2>

        <div className="deck" />
      </div>
      <h2 className="title">MONOPOLY</h2>
      <div className="chance-deck">
        <h2 className="label">Chance</h2>
        <div className="deck"></div>
      </div>
    </div>
  );
}
