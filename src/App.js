import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/gallery" element={<GalleryPage/>}/>
      </Routes>
    </div>    
  );
}

export default App;
