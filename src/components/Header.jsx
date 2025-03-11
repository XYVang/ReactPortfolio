// CSS
const styles = {
    header: {
        width: '100%',
        backgroundColor: '#008c9e', 
        textAlign: 'center',
        padding: '20px 0',
        color: 'black',
        fontSize: '2rem',
        fontWeight: "bold",
    },
};

function Header() {
    return <div style={styles.header}>Xavier's Portfolio</div>;
}

export default Header;