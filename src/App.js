import './App.css';
import VideoGameList from './Components/Pages/VideoGameList';
import { GameDetail } from './Components/Pages/GameDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<VideoGameList/>}/>
          <Route path="/game/:id" element={<GameDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
