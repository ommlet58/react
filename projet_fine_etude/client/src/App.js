
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
import Houses from './components/Houses';
import Restaurant from './components/Restaurant';
import Grocery from './components/Grocery';
import Streetfood from './components/Streetfood';
import Gym from './components/Gym';
import Trasnportation from './components/Trasnportation';
import Tradespersons from './components/Tradespersons';
import HousePage from './components/HousePage';
import RestauPage from './components/RestauPage';
import GroceryShop from './components/GroceryShop';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import SideBar from './components/DashBoard/SideBar';
import DashBoard from './components/DashBoard/index.jsx';
import Booking from './components/DashBoard/Booking/index.jsx';


import { AuthContext } from "./context/authContext.js";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useContext } from 'react';
import HouseInfo from './components/DashBoard/HouseInfo/index.jsx';
import Setting from './components/DashBoard/Setting';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,  
    children:[
      {
        path:"/houses",
        element:<Houses></Houses>
      },
      {
        path:"/restaurant",
        element:<Restaurant></Restaurant>
      },
      {
        path:"/grocery",
        element:<Grocery></Grocery>
      },
      {
        path:"/streetfood",
        element:<Streetfood></Streetfood>
      },
      {
        path:"/gym",
        element:<Gym></Gym>
      },
      {
        path:"/trasnportation",
        element:<Trasnportation></Trasnportation>
      },
      {
        path:"/tradespersons",
        element:<Tradespersons></Tradespersons>
      },
      {
        path:"/housepage",
        element:<HousePage></HousePage>,
      },
      {
        path:"/restauPage",
        element:<RestauPage></RestauPage>
      },
      {
        path:"/groceryShop",
        element:<GroceryShop></GroceryShop>
      },
    ]  
  },{
    path:"/login",
    element:<LoginPage></LoginPage>,
  },
  {
    path:"/signup",
    element:<SignUpPage></SignUpPage>,
  },
  {
    
    element:<SideBar></SideBar>,
    children:[
      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>,
      },
      {
        path:'/booking',
        element:<Booking></Booking>,
      },
      {
        path:'/houseinfo',
        element:<HouseInfo></HouseInfo>,
      },
      {
        path:'/houseSetting',
        element:<Setting></Setting>,
      },
    ]
  },
])



const queryClient = new QueryClient()
function App() {
  const {currentUser} = useContext(AuthContext);

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      
      <RouterProvider router={router} />
      
    </div>
    </QueryClientProvider>
    
  );
}

export default App;
