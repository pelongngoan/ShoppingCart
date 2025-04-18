import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { CircularProgress } from "@mui/material";
import { RootState } from "./redux/configureStore";
import { Container } from "./components/ui-common/Container";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function App() {
  const { loading } = useSelector((state: RootState) => state.loading);
  return (
    <>
      <Toaster />
      <Navbar />
      {loading && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center"
          style={{ backgroundColor: "rgba(130, 127, 120, 0.2)" }}
        >
          <CircularProgress size={70} />
        </div>
      )}
      <Container className="min-w-md ">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
