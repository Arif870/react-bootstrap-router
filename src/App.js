import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Menu from "./components/Menu/Menu";
import Newspaper from "./components/newspaper/Newspaper";
import Notfound from "./components/notfound/Notfound";
import SingleUser from "./components/singleUser/SingleUser";
import Users from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<Newspaper />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<SingleUser />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
