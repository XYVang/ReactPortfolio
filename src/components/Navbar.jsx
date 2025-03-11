// CSS
const styles = {
    navbarContainer: {
        width: '100%',
        backgroundColor: '#008c9e', 
        justifyContent: 'center',
        padding: '10px 0',
    },
    navbar: {
        display: 'flex', 
        justifyContent: 'center', 
        padding: '0',
        margin: '0',
        listStyle: 'none', 
        width: '100%', 
    },
    listItem: {
        margin: '0 15px', 
        cursor: 'pointer',
        color: 'black', 
        fontSize: '1.2rem',
    },
    activeItem: {
        textDecoration: "underline", 
        color: "white", 
    },
};

function Navbar({ activeComponent, setActiveComponent }) {
    return (
        <div style={styles.navbarContainer}>
            <ul style={styles.navbar}>
                {/* Navigation options to see content */}
                <li style={{ ...styles.listItem, ...(activeComponent === "about" ? styles.activeItem : {}) }} onClick={() => setActiveComponent("about")}>
                    About Me
                </li>
                <li style={{ ...styles.listItem, ...(activeComponent === "portfolio" ? styles.activeItem : {}) }} onClick={() => setActiveComponent("portfolio")}>
                    Projects
                </li>
                <li style={{ ...styles.listItem, ...(activeComponent === "contact" ? styles.activeItem : {}) }} onClick={() => setActiveComponent("contact")}>
                    Contact
                </li>
                <li style={{ ...styles.listItem, ...(activeComponent === "resume" ? styles.activeItem : {}) }} onClick={() => setActiveComponent("resume")}>
                    Resume
                </li>
            </ul>
        </div>
    );
}

export default Navbar;