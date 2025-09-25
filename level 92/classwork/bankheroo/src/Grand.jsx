import Parent from "./Parent";

function Grand() {
  const message = "Hello"; 

  return (
    <div>
      <Parent message={message} />
    </div>
  );
}

export default Grand;
