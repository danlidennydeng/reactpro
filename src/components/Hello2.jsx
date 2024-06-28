// const name = "Bob";

// function displayMessage() {
//   return "WOW!";
// }

function Hello({ who, message, emoji }) {
  return (
    <div>
      {/* <h1>
        Hello from component! {displayMessage()}, {name}, {2 + 4},
        {props.firstname}
      </h1> */}

      <h1>
        {who}, {message} {emoji}
        {/*the comma inbetween would appear twice*/}
      </h1>
    </div>
  );
}

export default Hello;
