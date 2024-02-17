import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from './Student';
import CreatStudent from './CreatStudent';
import UpdateStudent from './UpdateStudent';

function App() {  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Student></Student>}></Route>
        <Route path='/create' element={<CreatStudent></CreatStudent>}></Route>
        <Route path='/update/:id' element={<UpdateStudent></UpdateStudent>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
