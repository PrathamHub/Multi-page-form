import "./App.css";
import Form from "./pages/Form";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Form />
    </>
  );
}

export default App;
