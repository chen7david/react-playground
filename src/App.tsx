import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MainLayout } from "./layouts/MainLayout";
import { InterestCalculatorPage } from "./pages/InterestCalculatorPage";
import { JackiePage } from "./pages/JackiePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="interest-calculator"
          element={<InterestCalculatorPage />}
        />
        <Route path="jackie" element={<JackiePage />} />
      </Route>
    </Routes>
  );
};
