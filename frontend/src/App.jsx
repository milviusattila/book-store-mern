import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateBookPage from "./pages/CreateBookPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateBookPage />} />
        <Route path="/edit/:id" element={<EditBookPage />} />
      </Routes>
    </>
  );
}

export default App;
