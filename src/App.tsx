import './App.css';
import { ParentComponent } from './MUI_POC/ParentComponent';
import ColorChanger from './pages/ColorChanger';
import { Route, Routes } from 'react-router';
import ReactExample from './pages/ReactExample';
import NavBar from './components/NavBar';
import UseMemoExample from './sample/UseMemoExample';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/color-changer" element={<ColorChanger />} />
        <Route path="/example" element={<ReactExample />} />
        <Route path="/mui-poc" element={<ParentComponent />} />
        <Route path="/optimization" element={<UseMemoExample />} />
      </Routes>
    </>
  );
}

export default App;
