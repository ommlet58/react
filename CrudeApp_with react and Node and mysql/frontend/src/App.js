import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from './Student';
import CreatStudent from './CreatStudent';
import UpdateStudent from './UpdateStudent';
import Login from './Login';
import SignUp from './SignUp';


function App()  {  
  return (
    //<div className="App">
      //<BrowserRouter>
      //<Routes>
      // </Routes>
      // </BrowserRouter>
      //</div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/student' element={<Student></Student>}></Route>
        <Route path='student/update/:id' element={<UpdateStudent></UpdateStudent>}></Route>
        <Route path='/create' element={<CreatStudent></CreatStudent>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
