export default function Fruits13() {
  const fruits = ["Apple", "Banana", "Peach", "Bearry"];
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
