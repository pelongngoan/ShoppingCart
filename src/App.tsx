import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "./redux/configureStore";
import { Container } from "./components/ui-common/Container";
function App() {
  const { loading } = useSelector((state: RootState) => state.loading);
  return (
    <>
      <Navbar />
      {loading && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center"
          style={{ backgroundColor: "rgba(130, 127, 120, 0.2)" }}
        >
          <CircularProgress size={70} />
        </div>
      )}
      <Container className="min-w-3sm">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
