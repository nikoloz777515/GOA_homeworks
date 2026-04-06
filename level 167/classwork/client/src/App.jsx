import { useEffect, useState } from "react";
import { socket } from "./config/socket";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat");
    };
  }, []);

 const sendMessage = () => {
  if (!message.trim()) return;

  socket.emit("chat", message);
  setMessage("");
};
  return (
    <>
      <h2>Chat</h2>

      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />

      <button onClick={sendMessage}>Send</button>
    </>
  );
}

export default App;