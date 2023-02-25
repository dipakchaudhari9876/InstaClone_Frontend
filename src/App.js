import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageLayout from './Components/PageLayout';
import Upload from './Components/upload/Upload';
import Home from './Page/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/instaclone' element={<PageLayout/>}/>
      <Route path='/upload' element={<Upload/>}/>
    </Routes>
        
    </BrowserRouter>
    
    
  );
}

export default App;
