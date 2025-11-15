import { useState, useCallback } from "react"
import Child from "./Child"

const Parent = () => {
  const [todoList, setTododlist] = useState([])
  const [text, setText] = useState("")

  const addTodo = useCallback(() => {
    setTododlist(prev => [...prev, text])
  }, [text]);

  return (
    <div>
      <input
        type="text" placeholder="todo" onChange={(e) => setText(e.target.value)}required/>

      <button onClick={addTodo}>Add Todo</button>

      <Child todoList={todoList} />
    </div>
  );
};

export default Parent;

// 1) შექმენით კომპონენტი სახელად Parent მასში შექმენით ერთი input - სადაც მომხმარებელი შემოიტანს todo - ს, გამოიძახეთ Child კომპონენტი და props - ად გადაეცით addToDo ფუნქცია, todoList - კი გამოიტანეთ დაულაგებელი სიის სახით Child კომპონენტში, ოპტიმიზაციისთვის გამოიყენეთ memo, useCallback კაუჭი