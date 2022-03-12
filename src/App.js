import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Containers/home/home';
import Header from './Components/header';
import NavBar from './Components/navbar';
import Footer from './Components/footer';

function App() {
  return (
    <>
      <Header />
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
