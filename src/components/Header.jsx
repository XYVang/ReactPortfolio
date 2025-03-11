// CSS
const styles = {
    header: {
        width: '100%',
        backgroundColor: '#008c9e', 
        textAlign: 'center',
        padding: '20px 0',
        color: 'white',
        fontSize: '2rem',
    },
};

function Header() {
    return <div style={styles.header}>Xavier's Portfolio</div>;
}

export default Header;