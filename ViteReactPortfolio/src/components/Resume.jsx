// CSS
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        width: "100%",
        minHeight: "calc(100vh - 60px)",
        padding: "40px 20px 20px",
        boxSizing: "border-box",
        backgroundColor: "#00c3cc",
    },
    heading: {
        marginBottom: "20px",  
        fontSize: "2rem",  
        backgroundColor: "#00c3cc",
        padding: "10px",
        textAlign: "center",
    },
    subHeading: {
        fontSize: "1.5rem",  
        marginBottom: "10px",  
        marginTop: "0", 
    },
    paragraph: {
        fontSize: "1.2rem",
        marginBottom: "20px", 
    },
    link: {
        color: "#007bff",
        textDecoration: "underline",
        cursor: "pointer",
    },
    outlineBox: {
        width: "24%", 
        padding: "10px 20px", 
        borderRadius: "10px",
        border: "2px solid #ccc",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
        marginTop: "20px", 
        marginBottom: "20px", 
    },
    list: {
        textAlign: "center", 
        fontSize: "1rem",
        marginLeft: "0", 
        listStyleType: "none", 
        paddingLeft: "0", 
    },
    listItem: {
        marginBottom: "10px", 
    }
};

function Resume() {
    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Resume</h3>
            <p style={styles.paragraph}>
                Here is my <a href="/Xavier_Vang_OfficialResume.pdf" download style={styles.link}>resume</a>
            </p>

            {/* Front-End Section */}
            <div style={styles.outlineBox}>
                <h4 style={styles.subHeading}>Front-End</h4>
                <ul style={styles.list}>
                    <li style={styles.listItem}>HTML</li>
                    <li style={styles.listItem}>CSS</li>
                    <li style={styles.listItem}>JavaScript</li>
                    <li style={styles.listItem}>React</li>
                    <li style={styles.listItem}>Bootstrap</li>
                </ul>
            </div>

            {/* Back-End Section */}
            <div style={styles.outlineBox}>
                <h4 style={styles.subHeading}>Back-End</h4>
                <ul style={styles.list}>
                    <li style={styles.listItem}>APIs</li>
                    <li style={styles.listItem}>Node</li>
                    <li style={styles.listItem}>MySQL</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;
