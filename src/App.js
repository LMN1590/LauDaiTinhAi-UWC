import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./components/Layouts/DefaultLayout";
import DashBoard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <DashBoard></DashBoard>
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
