import Admin from './components/admin/Admin';
import Create from './components/create/Create';
import Read from './components/read/Read';
import Update from './components/update/Update';
import Delete from './components/delete/Delete';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="main">
       <h2>React Crud App1</h2>
      
      <BrowserRouter>
      
        <Routes>

          
          <Route  path="/"       element={<Admin/>} />
          <Route  path="/read"   element={<Read />} />
          <Route  path="/Create" element={<Create />} />
          <Route  path="/update" element={<Update />} />
          <Route  path="/delete" element={<Delete />} />

        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
