import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { About } from './routes/About';
import { Home } from './routes/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
      </Header>
    </BrowserRouter>
  );
}