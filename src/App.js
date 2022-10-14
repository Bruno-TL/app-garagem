import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListarVeiculo from "./pages/ListarVeiculo";
import AddVeiculo from "./pages/AddVeiculo";
import DetalhesVeiculo from "./pages/DetalhesVeiculo"
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/listar" element={<ListarVeiculo/>}/>
          <Route path="/addVeiculo" element={<AddVeiculo/>}/>
          <Route path="/detalhesVeiculo" element={<DetalhesVeiculo/>}/>
          <Route path="/entrar" element={<Login/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

