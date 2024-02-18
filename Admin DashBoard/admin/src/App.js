import Topbar from "./scenes/global/Topbar";
import { ColorModeContext , useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import DashBoard  from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
/*import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";*/

function App() {
  const [theme, colorMode]= useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <main className="content">
              <Topbar/>
              <Routes>
                   <Route path="/" element={<DashBoard></DashBoard>}></Route>
                   {/*<Route path="/team" element={<Team></Team>}></Route>
                   <Route path="/contacts" element={<Contacts></Contacts>}></Route>
                   <Route path="/invoices" element={<Invoices></Invoices>}></Route>
                   <Route path="/form" element={<Form></Form>}></Route>
                   <Route path="/bar" element={<Bar></Bar>}></Route>
                   <Route path="/pie" element={<Pie></Pie>}></Route>
                   <Route path="/line" element={<Line></Line>}></Route>
                   <Route path="/geography" element={<Geography></Geography>}></Route>
                   <Route path="/calendar" element={<Calendar></Calendar>}></Route>
  */}
                   </Routes>
            </main>
          </div>
          </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;
