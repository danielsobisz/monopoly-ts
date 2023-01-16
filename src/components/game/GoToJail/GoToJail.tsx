type GoToJailProps = {};

export function GoToJail(props: GoToJailProps): React.ReactElement {
  const {} = props;

  return (
    <div className="space corner go-to-jail">
      <div className="container">
        <div className="name">Go To</div>
        <i className="drawing fa fa-gavel"></i>
        <div className="name">Jail</div>
      </div>
    </div>
  );
}
