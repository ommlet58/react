import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from './Student';
import CreatStudent from './CreatStudent';
import UpdateStudent from './UpdateStudent';
import Login from './Login';
import SignUp from './SignUp';


function App() {  
  return (
    //<div className="App">
      //<BrowserRouter>
      //<Routes>
       // <Route path='/' element={<Student></Student>}></Route>
       // <Route path='/create' element={<CreatStudent></CreatStudent>}></Route>
       // <Route path='/update/:id' element={<UpdateStudent></UpdateStudent>}></Route>
     // </Routes>
     // </BrowserRouter>
    //</div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
