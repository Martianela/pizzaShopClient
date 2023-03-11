import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import "./index.css";
import LoginPage from "./routes/LoginPage";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import UserProfile from "./routes/UserProfile";
import Contact from "./routes/Contact";
import AllPlans from "./routes/AllPlans";
import PlanPage from "./routes/PlanPage";
import EditProfile from "./routes/EditProfile";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/userProfile" element={<UserProfile />} />{" "}
        <Route path="/plans/plan/:id" element={<PlanPage />} />
        <Route path="/plans/allPlans" element={<AllPlans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/forgetpassword" element={<ForgotPassword />} />
        <Route path="/reviews/crud/:id" element={<EditProfile />} />
        <Route
          path="/user/resetpassword/:token"
          element={<ResetPassword />}
        />{" "}
      </Routes>
    </div>
  );
}

export default App;
