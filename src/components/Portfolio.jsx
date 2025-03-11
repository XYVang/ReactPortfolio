import React, { useState } from "react";

// CSS
const styles = {
    container: {
        display: "grid",  
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: "40px", 
        alignItems: "center", 
        justifyContent: "center", 
        width: "100%",
        minHeight: "calc(100vh - 60px)",
        padding: "40px 20px 20px",
        boxSizing: "border-box",
        backgroundColor: "#00c3cc", 
    },
    heading: {
        gridColumn: "span 3", 
        marginBottom: "40px", 
        fontSize: "2rem", 
        textAlign: "center", 
    },
    imageWrapper: {
        position: "relative", 
        display: "inline-block",
        marginBottom: "40px",  
    },
    image: {
        width: "100%",  
        height: "auto",   
        borderRadius: "10px", 
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
        position: "relative", 
        zIndex: 1, 
    },
    overlayImage: {
        position: "absolute", 
        top: "0",
        left: "0",
        width: "100%", 
        height: "100%", 
        opacity: 0, 
        transition: "opacity 0.3s ease", 
        filter: "invert(100%)", 
        zIndex: 2, 
    },
    title: {
        fontSize: "1.5rem",  
        fontWeight: "bold",  
        marginBottom: "10px", 
        textAlign: "center", 
    },
};

function Portfolio() {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (image) => {
        // On hover set image
        setHoveredImage(image); 
    };

    const handleMouseLeave = () => {
        // When no hover remove image
        setHoveredImage(null); 
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Portfolio</h3>

            {/* Dream Vacation */}
            <div
                style={styles.imageWrapper}
                onMouseEnter={() => handleMouseEnter("dreamVaca")}
                onMouseLeave={handleMouseLeave}
            >
                <div style={styles.title}>Dream Vacation</div>
                <a href="https://github.com/XYVang/projectOne.git">
                    <img src="/DreamVaca.png" alt="Dream Vaca" style={styles.image} />
                    <img src="/github.png" alt="GitHub Logo" style={{...styles.overlayImage, opacity: hoveredImage === "dreamVaca" ? 0.3 : 0, }} />
                </a>
            </div>

            {/* Vehicle Maker */}
            <div
                style={styles.imageWrapper}
                onMouseEnter={() => handleMouseEnter("vehicleMaker")}
                onMouseLeave={handleMouseLeave}
            >
                <div style={styles.title}>Vehicle Maker</div>
                <a href="https://github.com/XYVang/VehicleBuilder.git">
                    <img src="/VehicleMaker.png" alt="Vehicle Maker" style={styles.image} />
                    <img src="/github.png" alt="GitHub Logo" style={{...styles.overlayImage, opacity: hoveredImage === "vehicleMaker" ? 0.3 : 0, }} />
                </a>
            </div>

            {/* Employee SQL Tracker */}
            <div
                style={styles.imageWrapper}
                onMouseEnter={() => handleMouseEnter("employeeSQLTracker")}
                onMouseLeave={handleMouseLeave}
            >
                <div style={styles.title}>Employee SQL Tracker</div>
                <a href="https://github.com/XYVang/EmployeeSQL">
                    <img src="/EmployeeSQLTrackerimage.png" alt="Employee SQL Tracker" style={styles.image} />
                    <img src="/github.png" alt="GitHub Logo" style={{...styles.overlayImage, opacity: hoveredImage === "employeeSQLTracker" ? 0.3 : 0, }} 
                    />
                </a>
            </div>

            {/* React Portfolio */}
            <div
                style={styles.imageWrapper}
                onMouseEnter={() => handleMouseEnter("reactPortfolio")}
                onMouseLeave={handleMouseLeave}
            >
                <div style={styles.title}>React Portfolio</div>
                <a href="https://github.com/XYVang/ReactPortfolio.git">
                    <img src="/ReactPortfolioImage.png" alt="React Portfolio" style={styles.image} />
                    <img src="/github.png" alt="GitHub Logo" style={{...styles.overlayImage, opacity: hoveredImage === "reactPortfolio" ? 0.3 : 0, }} />
                </a>
            </div>

            {/* README Project */}
            <div
                style={styles.imageWrapper}
                onMouseEnter={() => handleMouseEnter("readmeProject")}
                onMouseLeave={handleMouseLeave}
            >
                <div style={styles.title}>README Project</div>
                <a href="https://github.com/XYVang/README-Generator">
                    <img src="/READMEprojectimage.png" alt="README Project" style={styles.image} />
                    <img src="/github.png" alt="GitHub Logo" style={{...styles.overlayImage, opacity: hoveredImage === "readmeProject" ? 0.3 : 0, }} />
                </a>
            </div>

            {/* Weather API */}
            <div
                style={styles.imageWrapper}
                onMouseEnter={() => handleMouseEnter("weatherAPI")}
                onMouseLeave={handleMouseLeave}
            >
                <div style={styles.title}>Weather API</div>
                <a href="https://github.com/XYVang/WeatherApp.git">
                    <img src="/WeatherAPIimage.png" alt="Weather API" style={styles.image} />
                    <img src="/github.png" alt="GitHub Logo" style={{...styles.overlayImage, opacity: hoveredImage === "weatherAPI" ? 0.3 : 0, }} />
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
