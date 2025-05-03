import './App.css';
import { ParentComponent } from './MUI_POC/ParentComponent';
import ColorChanger from './ColorChanger';
import LayoutComponent from './sample/LayoutComponent';

function App() {
  return (
    <>
      <ColorChanger />
      <ParentComponent />
      <LayoutComponent />
    </>
  );
}

export default App;
