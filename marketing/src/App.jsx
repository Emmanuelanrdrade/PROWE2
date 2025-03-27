
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./modulos/paginas/DashboardPage";
import LoginPage from "./modulos/paginas/LoginPage";
import MarketingRequestPage from "./modulos/paginas/MarketingRequestPage";
import ProductSelectionPage from "./modulos/paginas/ProductSelectionPage";
import AssignTaskPage from "./modulos/paginas/AssignTaskPage";
import { NotificationProvider } from "./modulos/organismos/NotificationContext";
import MainTemplate from "./modulos/plantillas/MainTemplate";

function App() {
  return (
    <NotificationProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<DashboardPage />} />
          <Route path="marketing-request" element={<MarketingRequestPage />} />
          <Route path="product-selection/:requestId" element={<ProductSelectionPage />} />
          <Route path="assign-task/:productId" element={<AssignTaskPage />} />
        </Route>
      </Routes>
    </NotificationProvider>
  );
}

export default App;
