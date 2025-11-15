import { memo } from "react";

const Child = memo(({ todoList }) => {
  return (
    <>
      <p>Todo List</p>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
})

export default Child






// 1) შექმენით კომპონენტი სახელად Parent მასში შექმენით ერთი input - სადაც მომხმარებელი შემოიტანს todo - ს, გამოიძახეთ Child კომპონენტი და props - ად გადაეცით addToDo ფუნქცია, todoList - კი გამოიტანეთ დაულაგებელი სიის სახით Child კომპონენტში, ოპტიმიზაციისთვის გამოიყენეთ memo, useCallback კაუჭი