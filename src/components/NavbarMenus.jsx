import { Categories } from "../constant/Categories";
import Link from "next/link";
import { NavDropdown } from "react-bootstrap";

const NavbarMenus = () => {
  return (
    <div>
      {Categories.map((cat) => {
        return (
          <NavDropdown title={cat.category} id={cat.id}>
            {cat.products.map((prod) => {
              return (
                <ul class="dropdown">
                  {prod.title}
                  {prod.subMenu.map((menuItem) => {
                    return (
                      <li class="dropdown-item" key={menuItem.id}>
                        <Link>
                          <a href="#">{menuItem.desc}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </NavDropdown>
        );
      })}
    </div>
  );
};

export default NavbarMenus;
