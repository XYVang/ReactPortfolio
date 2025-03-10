// CSS
const styles = {
    image: {
      width: "50px",  
      height: "auto",   
      margin: "10px",
    },
  };

  function Footer() {
    return (
      <div>
        <a href="https://github.com/XYVang">
            <img src="..\Assets\github.png" alt="Footer Image" style={styles.image} />
        </a>
        <a href="https://linkedin.com/in/xavier-vang-652a32234">
            <img src="..\Assets\linkedin.png" alt="Footer Image" style={styles.image} />
        </a>
      </div>
    );
  }

export default Footer;