import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Container from "./components/Container.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  </BrowserRouter>
);
