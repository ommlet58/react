import './App.css';
import Aloha from './components/Aloha';
import NavBar from './components/NavBar';
import Location from './components/Location';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rental from './components/Booking/Rental';
import LastStep from './components/Booking/LastStep';

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
        element:      
        <Location/>
        
      },
      
    ]
  },{
    path:"/rental",
    element:<Rental></Rental>,
  },
  {
    path:"/lastStep",
    element:<LastStep></LastStep>
  }
]);

function App() {
  return (

    <div className='app'>
     
     
        <RouterProvider router={router} />
      

    </div>

  );
}

export default App;
