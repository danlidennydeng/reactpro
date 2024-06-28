function Hello12(props) {
  return (
    <div>
      <h1>
        {props.person.name}, {props.person.message} {props.person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello12;
