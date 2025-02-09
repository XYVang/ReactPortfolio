// CSS
const styles = {
    container: {
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
    },
    heading: {
        background: "#00ddff",
        padding: "10px",
        textAlign: "center",
    },
    input: {
        width: "100%",
        padding: "8px",
        marginBottom: "5px",
    },
    textarea: {
        width: "100%",
        padding: "8px",
        minHeight: "80px",
        marginBottom: "5px",
    },
    errorMessage: {
        fontSize: "12px",
        display: "block",
        color: "red",
    },
    button: {
        width: "100%",
        padding: "10px",
        background: "#00ddff",
        color: "#fff",
        border: "none",
        cursor: "pointer",
    },
};

function Contact() {
    const handleBlur = (e) => {
        const errorSpan = e.target.nextElementSibling;
         // Selects the error message span
        if (!e.target.value.trim()) {
            errorSpan.textContent = `${e.target.name} is required!`;
        } 
        // Email validation: must contain "@" and a domain
        else if (e.target.type === "email" && !/\S+@\S+\.\S+/.test(e.target.value)) {
            errorSpan.textContent = "Please enter a valid email address!";
        } 
        // Clears the error message when valid
        else {
            errorSpan.textContent = ""; 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for the message, it has been sent!");
        // Clears the form after submission
        e.target.reset(); 
        // Clears errors on submit
        document.querySelectorAll(".error-message").forEach((span) => (span.textContent = "")); 
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Contact</h3>
            <p>Please fill in the form below to contact me!</p>

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