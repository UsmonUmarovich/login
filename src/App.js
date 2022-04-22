import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { Home } from "./Pages/Home/Home";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([])
  
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      return navigate("login");
    } else {
      return navigate("/");
    }
  }, [isLogged]);
  console.log(users);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/register" element={<Register setUsers={setUsers} users={users}/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
