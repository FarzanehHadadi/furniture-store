import { Navbar } from "react-bootstrap";
import NavbarHeader from "./NavbarHeader";
import NavbarMainContent from "./NavbarMainContent";
import NavbarMenus from "./NavbarMenus";

const NavbarComponent = () => {
  return (
    <Navbar className="Navbar">
      <NavbarHeader />
      <NavbarMainContent />
      <NavbarMenus />
    </Navbar>
  );
};

export default NavbarComponent;
