import { useState } from "react";

function BadCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1)

        // აქ ორივე setCount იყენებს იმავე count-ს, რაც იყო ღილაკზე დაჭერამდე
    // და ამიტომ დაემატება მხოლოდ ერთი თითო დაჭერაზე
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </>
  );
}

export default BadCounter;






// 1) შექმენით counter ფუნქცია, რიომელიც დაკლიკებაზე ითვლის რაოდენობას, ჯერ გააკეთეთ ცუდი გზით ორჯერ გამოიძახეთ setCount ფუნქცია და გატესტეთ როგორ მუშაობს და რატომ მუშაობს ახსენით კომენტარებით, შემდეგ კი გამოიყენეთ საუკეთესო პრაქტიკა, მდგომარეობის შემცვლელ ანუ setCount გადაეცით ფუნქცია ისიც ორჯერ გამოიძახეთ ერთდროულად და ნახეთ შედეგი, ახსენით კომენტარებით რატომ და როგორ იმუშავა ესე.

