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
        marginBottom: "25px",
        fontSize: "2rem",
        backgroundColor: "#00c3cc",
        padding: "10px",
        textAlign: "center",
    },
    paragraph: {
        fontSize: "1.4rem",  
        marginBottom: "30px", 
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "10px",
        border: "1px solid #ccc",
    },
    textarea: {
        width: "100%",
        padding: "10px",
        minHeight: "80px",
        marginBottom: "15px",
        borderRadius: "10px",
        border: "1px solid #ccc",
    },
    errorMessage: {
        fontSize: "12px",
        display: "block",
        color: "red",
    },
    button: {
        width: "100%",
        padding: "12px",
        background: "#BEBEBE",
        color: "black",
        border: "none",
        cursor: "pointer",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
};

function Contact() {
    const handleBlur = (e) => {
        const errorSpan = e.target.nextElementSibling;
        // Certain section is required
        if (!e.target.value.trim()) {
            errorSpan.textContent = `${e.target.name} is required!`;
        } 
        // Email address requires an @ and a domain
        else if (e.target.type === "email" && !/\S+@\S+\.\S+/.test(e.target.value)) {
            errorSpan.textContent = "Please enter a valid email address!";
        } 
        else {
            errorSpan.textContent = "";
        }
    };

    const handleSubmit = (e) => {
        // With valid answers print message
        e.preventDefault();
        alert("Thanks for the message, it has been sent!");
        // Clears the form after submission
        e.target.reset();
        // Clears errors
        document.querySelectorAll(".error-message").forEach((span) => (span.textContent = ""));
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Contact Me</h3>
            <p style={styles.paragraph}>Please fill in the form below to contact me!</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="Name" required onBlur={handleBlur} style={styles.input} />
                    <span className="error-message" style={styles.errorMessage}></span>
                </div>

                <div>
                    <label>Email Address:</label>
                    <input type="email" name="Email Address" required onBlur={handleBlur} style={styles.input} />
                    <span className="error-message" style={styles.errorMessage}></span>
                </div>

                <div>
                    <label>Message:</label>
                    <textarea name="Message" required onBlur={handleBlur} style={styles.textarea}></textarea>
                    <span className="error-message" style={styles.errorMessage}></span>
                </div>

                <button type="submit" style={styles.button}>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
