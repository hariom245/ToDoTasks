import {BrowserRouter as Router,Routes,Route} from "react-router-dom" 
import Navbar from "./component/Navbar";
import NoteState from "./context/note/NoteState";
import About from "./component/About";
import "./App.css"
import Home from "./component/Home";
import AddNote from "./component/AddNote";
import Login1 from "./component/Login1";
import SignUp from "./component/Signup";

function App() {
  return (
    <NoteState>
      
      <div className="container">
      <Router>
     <Navbar/>

   <Routes>
    <Route exact path="/" element={<Home/>}/>
   <Route exact path="/about" element={<About/>} />
   <Route exact path="/addnote" element={<AddNote/>} />
   <Route exact path="/login" element={<Login1/>}/>
   <Route exact path="/signup" element={<SignUp/>}/>
   

   </Routes>
   </Router>
   </div>
   </NoteState>
  );
}

export default App;
