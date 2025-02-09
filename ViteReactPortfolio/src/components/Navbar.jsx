// CSS
const styles = {
    background: '#02b5d1',
    justifyContent: 'flex-end',
    navbar: {
        background: '#02b5d1',
        display: 'flex', // Makes list horizontal
        justifyContent: 'center', // Center
        padding: '10px',
        listStyle: 'none', // Removes bullet points
    },
    listItem: {
        margin: '0 15px', // Adds space between items
        cursor: 'pointer',
    },
    activeItem: {
        textDecoration: "underline", // Underline when active
        color: "white", // Optional: Change text color
    },
}

function Navbar({ activeComponent, setActiveComponent }) {
    return (
        <div>
            <ul style={styles.navbar}>
                <li
                    style={{ ...styles.listItem, ...(activeComponent === "about" ? styles.activeItem : {}) }}
                    onClick={() => setActiveComponent("about")}
                >
                    About Me
                </li>
                <li
                    style={{ ...styles.listItem, ...(activeComponent === "portfolio" ? styles.activeItem : {}) }}
                    onClick={() => setActiveComponent("portfolio")}
                >
                    Projects
                </li>
                <li
                    style={{ ...styles.listItem, ...(activeComponent === "contact" ? styles.activeItem : {}) }}
                    onClick={() => setActiveComponent("contact")}
                >
                    Contact
                </li>
                <li
                    style={{ ...styles.listItem, ...(activeComponent === "resume" ? styles.activeItem : {}) }}
                    onClick={() => setActiveComponent("resume")}
                >
                    Resume
                </li>
            </ul>
        </div>
    );
}

export default Navbar;