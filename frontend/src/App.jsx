import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import TransactionChecker from "./pages/TransactionChecker";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Developer from "./pages/Developer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checker" element={<TransactionChecker />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/developer" element={<Developer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;