import { AuthProvider } from "./context/auth.context";
import AuthForm from "./Inputs";
// თუ Inputs components-შია: import Inputs from "./components/Inputs";

function App() {
  return (
    <AuthProvider>
      <AuthForm/>
    </AuthProvider>
  );
}

export default App;
