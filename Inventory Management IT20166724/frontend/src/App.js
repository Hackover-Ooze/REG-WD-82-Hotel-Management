import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import StaffLogin from './components/staff/Stafflogin';
import LoginScreen from "./components/screens/LoginScreen";
import SocialMedia from "./components/staff/SocialMedia";
import RegisterScreen from "./components/screens/register";
import Header from "./components/staff/stock/Header";
import Home from "./components/staff/stock/Home";




import AddAssistant from "./components/staff/stock/AddAssistant";
import AddEnventory from "./components/staff/stock/inventory";
import DisplayAssistant from "./components/staff/stock/DisplayAssistant";
import DisplayInventory from "./components/staff/stock/DisplayInventory";
import AssistantList from "./components/staff/stock/List";
import Report from "./components/staff/stock/report";
import InventoryList from "./components/staff/stock/InventoryList";
import IReport from "./components/staff/stock/InvenReport";
import Edit from "./components/staff/stock/EditeAssistant";
import EditInventory from "./components/staff/stock/EditInventory";






function App() {
  return (
    <div className="App">
      <Router>
      <SocialMedia />
        
        <Routes>
        <Route path="/" element={<StaffLogin/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path = "/staff-stock" element={[<Header/> , <Home />]} /> 
        
        

        <Route path = "/add-stock" element={[<AddAssistant/>]}/>
        <Route path = "/addInven-stock" element={[<AddEnventory/>]}/>
        <Route path = "/display-stock" element={[<DisplayAssistant/>]}/>
        <Route path = "/displayInven-stock" element={[<DisplayInventory/>]}/>
        <Route path = "/edit-stock" element={[<AssistantList/>]}/>
        <Route path = "/report-as" element={[<Report/>]}/>
        <Route path = "/view-inventory" element={[<InventoryList/>]}/>
        <Route path = "/irepot-in" element={[<IReport/>]}/>
        <Route path = "/edit-assis/:id" element={[<Edit/>]}/>
        <Route path = "edit-i/:id" element={[<EditInventory/>]}/>
        
    
       




        
        
        


        



        

        </Routes>
      </Router>
    </div>
  );
}

export default App;
