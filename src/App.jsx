import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { PiSealCheckFill } from "react-icons/pi";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/student" elemen={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster
        containerStyle={{ direction: "rtl" }}
        toastOptions={{
          duration: 3000,
          success: {
            style: { color: "red !important" },
            icon: <PiSealCheckFill className="text-green-500 text-2xl" />,
          },
        }}
      />
    </>
  );
};

export default App;
