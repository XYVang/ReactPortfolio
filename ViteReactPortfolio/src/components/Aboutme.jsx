// CSS
const styles = {
    image: {
        width: "200px",  
        height: "auto",   
        margin: "10px",
      },
};

function Aboutme() {
    return (
        <div>
            <h3>About Me</h3>
            <img src="..\Assets\Xavier.jpg" alt="Xavier Image" style={styles.image} />
            <p>I'm Xavier Vang, I graduated from Mankato State Unversity in December 2023 with
                a Bachelors in computer information technology.
            </p>
        </div>
    );
}

export default Aboutme;