import './App.css';
import SideBar from './components/SideBar';
import Restaurant from './components/Restaurant';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Shop } from './components/Shop';
const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar></SideBar>,
    children:[
      {
        path:"/restaurant",
        element:<Restaurant></Restaurant>
      },
      {
        path:"/restaurant/shop",
        element:<Shop></Shop>
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
