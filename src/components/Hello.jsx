// const name = "Bob";

// function displayMessage() {
//   return "WOW!";
// }

function Hello(props) {
  console.log(props);
  return (
    <div>
      {/* <h1>
        Hello from component! {displayMessage()}, {name}, {2 + 4},
        {props.firstname}
      </h1> */}

      <h1>
        {props.who}, {props.message}{" "}
        {/*the comma inbetween would appear twice*/}
      </h1>
    </div>
  );
}

export default Hello;
