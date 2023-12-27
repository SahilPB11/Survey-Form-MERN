import axios from "axios";
import AdminLoginRegister from "./Admin/AdminLoginRegister";
import "./App.css";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_APP_SERVER_URL;
  axios.defaults.withCredentials = true;
  return (
    <div>
      <AdminLoginRegister />
    </div>
  );
}

export default App;
