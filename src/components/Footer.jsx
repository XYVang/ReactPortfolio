// CSS
const styles = {
  footerContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px 0",
  },
  image: {
      width: "50px",  
      height: "auto",   
      margin: "10px",
  },
};

function Footer() {
  return (
      <div style={styles.footerContainer}>
          <a href="https://github.com/XYVang">
              <img src="/github.png" alt="GitHub Logo" style={styles.image} />
          </a>
          <a href="https://linkedin.com/in/xavier-vang-652a32234">
              <img src="/linkedin.png" alt="LinkedIn Logo" style={styles.image} />
          </a>
      </div>
  );
}

export default Footer;