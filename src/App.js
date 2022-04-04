import { Route, Routes } from "react-router-dom";
import CommentCard from "./components/CommentCard/CommentCard";
import Form from "./components/Form/Form";
import AboutUs from "./pages/AboutUs/AboutUs";
import { Navbar } from "./components/Navbar/Navbar";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<CommentCard />} />
        {/*<Route path="/add-comment" element={<CommentCard />} />*/}
        <Route path="/add-post" element={<Form />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
