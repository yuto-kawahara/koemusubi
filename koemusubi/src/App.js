import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { Question } from "./components/pages/Question";
import { Service } from "./components/pages/Service";
import { DefaultLayout } from "./components/templates/DefaultLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/question" element={<Question />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
