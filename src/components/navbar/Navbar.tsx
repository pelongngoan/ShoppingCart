import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../ui-common/Container";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";

const links = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Reviews",
    path: "/reviews",
  },
];

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { cart } = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    if (isSmallScreen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }, [isSmallScreen]);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container
      container="full"
      className={` sticky top-0 z-10 shadow-md min-w-md bg-white  `}
    >
      <div className="flex justify-between items-center px-10 py-4 gap-4 w-full min-w-md bg-white">
        {isSmallScreen && (
          <div className="flex gap-6 text-center font-semibold w-1/3 ">
            <i
              className="fa-solid fa-bars text-2xl cursor-pointer text-blue-500 active:scale-95 hover:text-blue-600"
              onClick={handleMenuClick}
            ></i>
          </div>
        )}
        <div
          className={`flex gap-6 text-center font-semibold w-1/3
            ${
              isSmallScreen &&
              "absolute flex-col top-[67px] left-0 h-screen bg-gray-100 rounded-r-lg shadow-md z-10 pt-4 transform transition-transform duration-300 ease-in-out w-full"
            }
            ${
              isSmallScreen && !isMenuOpen
                ? "-translate-x-full"
                : "translate-x-0"
            }
            ${!isSmallScreen ? "relative" : ""}`}
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-center flex flex-col items-center justify-center align-middle hover:cursor-pointer
                hover:text-black text-lg ${
                  activeLink === link.path
                    ? "text-black font-bold"
                    : "text-gray-500"
                }
                ${
                  isSmallScreen &&
                  "w-full bg-gray-100 rounded-lg hover:bg-gray-200 p-4 "
                }`}
              onClick={() => {
                setActiveLink(link.path);
                handleMenuClick();
              }}
            >
              <div
                className={`flex items-center justify-center rounded-full ${
                  activeLink === link.path && "bg-blue-500"
                } w-2 h-2`}
              ></div>

              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-end text-2xl font-bold text-[#3B82F6] w-1/3">
          Beauty.bd
        </div>
        <div className=" font-bold text-[#3B82F6] hover:text-blue-600 active:scale-95 text-right w-1/3">
          <Link
            to="/checkout"
            onClick={() => {
              setActiveLink("/checkout");
            }}
          >
            <div className="relative">
              {/* <ShoppingCartIcon fontSize="large" /> */}
              <i className="fa-solid fa-cart-shopping text-2xl"></i>
              {cart.length > 0 && (
                <div className="absolute top-[-10px] right-[-10px] bg-[#EF4444] text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};
