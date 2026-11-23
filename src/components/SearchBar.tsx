import logo from "../assets/logo.png"

interface NavLink {
  text: string;
  href: string;
}

interface SearchBarProps {
  links: NavLink[];
}

/** Компонент поисковой строки с логотипом и верхним меню. */
export default function SearchBar({ links }: SearchBarProps) {
  return (
    <div className="mb-4">
      {/* Меню над поиском */}
      <div className="d-flex mb-2" style={{ marginLeft: "150px" }}>
        {links.map((link, index) => (
          <a key={index} href={link.href} className="me-3 link-primary text-decoration-none">
            {link.text}
          </a>
        ))}
      </div>

      {/* Логотип и строка поиска */}
      <div className="d-flex align-items-center">
        <img src={logo} alt="Яндекс" style={{ width: "120px" }} className="me-3" />
        <form className="d-flex flex-grow-1" style={{ maxWidth: "600px" }}>
          <input type="text" className="form-control me-2 rounded-0 border-warning" />
          <button type="submit" className="btn btn-warning rounded-0 fw-bold px-4">Найти</button>
        </form>
      </div>
    </div>
  );
}