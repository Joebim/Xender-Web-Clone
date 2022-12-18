import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Apps from './components/Apps';
import Documents from './components/Documents';
import Images from './components/Images';
import Music from './components/Music';
import Files from './components/Files';
import Videos from './components/Videos';

function App() {
  return (
    <>
    <div className='flex h-full'>
    <Sidebar />
    <div className='w-full'>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/images" element={<Images />} />
      <Route path="/music" element={<Music />} />
      <Route path="/files" element={<Files />} />
      <Route path="/videos" element={<Videos />} />
    </Routes>
     </div> 
     </div>
    </>
    
  );
}

export default App;
