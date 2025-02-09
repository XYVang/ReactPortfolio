// CSS
const styles = {
    image: {
      width: "400px",  
      height: "auto",   
      margin: "10px",
    },
  };

function Portfolio() {
    return (
        <div>
            <h3>Portfolio</h3>
            <a href="https://github.com/XYVang">
                <img src="..\Assets\DreamVaca.png" alt="Footer Image" style={styles.image} />
            </a>
            <a href="https://linkedin.com/in/xavier-vang-652a32234">
                <img src="..\Assets\VehicleMaker.png" alt="Footer Image" style={styles.image} />
            </a>
        </div>
    );
}

export default Portfolio;