// src/components/AuthForm.jsx
import { useState } from "react";
import { useAuth } from "./context/auth.context.jsx";
import useForm from "./hooks/useForm";

function AuthForm() {
  const { register, login } = useAuth();
  const { formData, handlechange, setFormData } = useForm({
    fullname: "",
    email: "",
    password: ""
  });

  const [isLogin, setIsLogin] = useState(true); // true = შესვლა, false = რეგისტრაცია

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(formData);
    } else {
      register(formData);
    }
    setFormData({ fullname: "", email: "", password: "" }); // ფორმის გასუფთავება
  };

  return (
    <div>
      <h2>{isLogin ? "შესვლა" : "რეგისტრაცია"}</h2>
      <form onSubmit={handleSubmit}>
        {/* მხოლოდ რეგისტრაციის დროს გვჭირდება fullname */}
        {!isLogin && (
          <input
            type="text"
            name="fullname"
            placeholder="სახელი"
            value={formData.fullname}
            onChange={handlechange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="იმეილი"
          value={formData.email}
          onChange={handlechange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="პაროლი"
          value={formData.password}
          onChange={handlechange}
          required
        />
        <button type="submit">{isLogin ? "შესვლა" : "რეგისტრაცია"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "რეგისტრაციაზე გადასვლა" : "შესვლაზე გადასვლა"}
      </button>
    </div>
  );
}

export default AuthForm;
