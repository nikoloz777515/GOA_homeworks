import { useState } from "react";

function GoodCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevValue => prevValue +1);
    setCount(prevValue => prevValue +1);

    // ფუნქციურ setCount-ს გადავცემთ callback-ს, რომელიც იღებს ბოლო მნიშვნელობას და ამიტომ მაგაზე დააჭერისას 2 მოემატება უკვე
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
}


export default GoodCounter;