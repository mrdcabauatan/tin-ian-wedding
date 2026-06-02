import "./Navbar.css";

function Navbar({ setCurrentPage }) {
  const navItems = [
    { label: "Home", page: "home" },
    { label: "Invitation", page: "invitation" },
    { label: "Venue", page: "venue" },
    { label: "Dress Code", page: "dress" },
    { label: "RSVP", page: "rsvp" },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.page}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(item.page);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
