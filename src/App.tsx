import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import {SignIn} from "./pages/auth/signin";
import {Dashboard} from "./pages/dashboard";
import Settings from "./components/settingsData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
