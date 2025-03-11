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
        marginBottom: "40px", 
        fontSize: "2rem", 
    },
    image: {
        width: "250px",
        height: "auto",
        marginBottom: "40px", 
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    text: {
        maxWidth: "800px",
        fontSize: "1.2rem",
        lineHeight: "1.6",
        color: "black",
        marginBottom: "20px", 
    },
};

function Aboutme() {
    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>About Me</h3>
            <img src="src\assets\Xavier.jpg" alt="Xavier Image" style={styles.image} />
            <p style={styles.text}>
                I'm Xavier Vang, I graduated from Mankato State University in December 2023 with
                a Bachelor's in Computer Information Technology.
            </p>
        </div>
    );
}

export default Aboutme;