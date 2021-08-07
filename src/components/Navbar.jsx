import { Navbar } from "react-bootstrap";
import NavbarHeader from "./NavbarHeader";
import NavbarMainContent from "./NavbarMainContent";
import NavbarMenus from "./NavbarMenus";

const NavbarComponent = () => {
  return (
    <nav className="Navbar">
      <NavbarHeader />
      <NavbarMainContent />
      <NavbarMenus />
    </nav>
  );
};

export default NavbarComponent;
