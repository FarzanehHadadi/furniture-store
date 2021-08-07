import { Categories } from "../constant/Categories";
import Link from "next/link";
import { NavDropdown } from "react-bootstrap";

const NavbarMenus = () => {
  return (
    <div className="navbar-menus">
      {Categories.map((cat) => {
        return (
          <NavDropdown title={cat.category} id={cat.id}>
            <NavDropdown.Item>
              {cat.products.map((prod) => {
                return (
                  <ul className="dropdown">
                    <p className="product-title">{prod.title}</p>
                    <hr />
                    {prod.subMenu.map((menuItem) => {
                      return (
                        <li className="dropdown-item" key={menuItem.id}>
                          {
                            <Link href="">
                              {/* <a href="#" color="#604d53"> */}
                              {menuItem.desc}
                              {/* </a> */}
                            </Link>
                          }
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </NavDropdown.Item>
          </NavDropdown>
        );
      })}
    </div>
  );
};

export default NavbarMenus;
