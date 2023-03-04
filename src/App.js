import Create from './components/create/Create';
import Read from './components/read/Read';
import Update from './components/update/Update';
import Delete from './components/delete/Delete';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="main">
      
      <div>
      <h2>React Crud App1</h2>
      <Create/>
      <Read/>
      </div>
      <BrowserRouter>
      
        <Routes>
          <Route  path="/read" element={<Read />} />
          <Route  path="/create" element={<Create />} />
          <Route  path="/update" element={<Update />} />
          <Route  path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
