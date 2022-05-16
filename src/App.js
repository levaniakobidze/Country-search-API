import "./App.css";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/details' element={<Details />} />
    </Routes>
  );
}

export default App;
