import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Events from './components/main-event/main-event.component';
function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route path='/events' element={<Events/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
