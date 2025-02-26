import React from "react";
import { Routes, Route } from "react-router";
import useScrollRestore from "../hooks/useScrollRestore";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs"
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import BuyMedicines from "../pages/Medicines";
import MedicineDetails from "../pages/MedicineDetails";
import Cart from "../pages/Cart";
import AllMedicines from "../pages/AllMedicines";
import MeetPage from "../pages/MeetPage";
import ContactUs from "../pages/ContactUs";
import Success from "../pages/Success";
import Failed from "../pages/Failed";
import DiseasePrediction from "../pages/DiseasePrediction";
import ErrorPage from "../pages/ErrorPage";
import Checkout from "../pages/Checkout";
import DisPred from "../pages/DisPred";
import MyOrders from "../pages/MyOrders";
import MyWallet from "../pages/MyWallet";
import RecentTransactions from "../pages/RecentTransactions";
import Feedback from "../pages/Feedback";
import ResetPassword from "../components/resetPassword/ResetPassword";
import PrivacyPolicy from "../pages/Privacy";
import DeleteAccount from "../pages/DeleteAccount";
const RouterRoutes = () => {
  useScrollRestore();

  return (
    <> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/buy-medicines" element={<BuyMedicines />} />
        <Route path="/all-medicines" element={<AllMedicines />} />
        <Route
          path="/all-medicines/medicine-details/:productId"
          element={<MedicineDetails />}
        />
        <Route path="/my-cart" element={<Cart />} />
        <Route path="/dispred" element={<DisPred />} />
        <Route path="/instant-meet" element={<MeetPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/disease-prediction" element={<DiseasePrediction />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/my-wallet" element={<MyWallet />} />
        <Route path="/recent-transactions" element={<RecentTransactions />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Add About Us route */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/reset-password/:token" element={<ResetPassword/>} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/privacy" element= {<PrivacyPolicy/>} />
        <Route path="/delete-account" element= {<DeleteAccount/>} />
      </Routes>
    </>
  );
};

export default RouterRoutes;
