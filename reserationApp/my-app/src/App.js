import './App.css';
import SideBar from './components/SideBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar></SideBar>,
  }])

function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
