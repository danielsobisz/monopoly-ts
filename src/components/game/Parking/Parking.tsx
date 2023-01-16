type ParkingProps = {};

export function Parking(props: ParkingProps): React.ReactElement {
  const {} = props;

  return (
    <div className="space corner free-parking">
      <div className="container">
        <div className="name">Free</div>
        <i className="drawing fa fa-car"></i>
        <div className="name">Parking</div>
      </div>
    </div>
  );
}
