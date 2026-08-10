import "./Navbar.css";

function Navbar({ scrollToSection, isAttending, setShowNavbar }) {
  const navItems = [
    { label: "Home", section: "home" },
    { label: "Invitation", section: "invitation" },
    { label: "Attire Guide", section: "attire" },
    { label: "Gallery", section: "gallery" },
    { label: "Gift Registry", section: "gift" },

    ...(isAttending ? [{ label: "Venue Details", section: "details" }] : []),

    { label: "RSVP", section: "rsvp" },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.section}>
            <a
              href={`#${item.section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.section);

                if (item.section === "home") {
                  setShowNavbar(false);
                }
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
