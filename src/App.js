import NotePage from "./pages/Homepage.jsx";
import AddNotes from "./components/Addbutton/Addbutton.jsx";
import { BrowserRouter,Routes, Route } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotePage />} />
        <Route path="/addbutton" element={<AddNotes />} />
      </Routes>
    </BrowserRouter>
  )

}
export default App;
