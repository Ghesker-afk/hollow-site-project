import { Routes, Route } from 'react-router';
import { HomePage } from "./pages/home/HomePage";
import { HornetPage } from './pages/HornetPage';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="/hornet" element={<HornetPage />}></Route>
    </Routes>
    </>
  )
}

export default App
