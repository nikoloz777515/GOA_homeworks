
import Child from "./Child";

function Parent({ message }) {
  return (
    <div>
      <Child message={message} />
    </div>
  );
}

export default Parent;
