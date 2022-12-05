
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from  "@mui/material";
import  TopBar  from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/Dashboard";
 import Prof from "./scenes/Prof";
// import Invoices from "./scenes/invoices";
 import Etudiant from "./scenes/Etudiant";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Calendar from "./scenes/calendar";
import { Route, Routes } from "react-router-dom";


function App() {
  const[ theme , colorMode ]= useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
  <div className="app"> 
    <SideBar />
  <main className="content">
    <TopBar />
      <Routes>
        <Route path="/" element={ <Dashboard />}/>
         <Route path="/Prof" element={ <Prof />}/>
         <Route path="/Etudiant" element={ <Etudiant />}/>
        {/*<Route path="/invoices" element={ <Invoices />}/>
        <Route path="/bar" element={ <Bar />}/>
        <Route path="/form" element={ <Form />}/>
        <Route path="/line" element={ <Line />}/>
        <Route path="/Pie" element={ <Pie />}/>
        <Route path="/faq" element={ <FAQ />}/>
        <Route path="/calendar" element={ <Calendar />}/> */}
        

        
      </Routes>

     
  </main>
  </div>
  </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
