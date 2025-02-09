// CSS
const styles = {
    headerContainer: {
        width: "100%",
        background: "#00ddff",
        textAlign: "center",
    },
    heading: {
        background: '#00ddff',
    },
};

function Header() {
    return (
        <div style={styles.headerContainer}>
            <h1 style={styles.heading}>Xavier's Portfolio</h1>
        </div>
    );
}

export default Header;