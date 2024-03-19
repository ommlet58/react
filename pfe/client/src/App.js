import './App.css';
import Aloha from './components/Aloha';
import NavBar from './components/NavBar';
import Location from './components/Location';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar></NavBar>,
    children:[
      {
        path:"/",
        element:<Aloha/>
      },
      {
        path:"location",
        element:<Location/>
      },
      
    ]
  },
]);

function App() {
  return (
    <div className='app'>
     
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
