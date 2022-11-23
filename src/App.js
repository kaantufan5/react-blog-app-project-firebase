import "./App.css";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./app-router/AppRouter";



function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
