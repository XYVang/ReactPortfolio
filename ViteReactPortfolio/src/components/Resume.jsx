const styles = {
    link: {
        color: "#007bff",
        textDecoration: "underline",
        cursor: "pointer",
    },
};

function Resume() {
    return (
        <div>
            <h3>Resume</h3>
            <p>
                Here is my <a href="/Xavier_Vang_OfficialResume.pdf" download style={styles.link}>resume</a>.
            </p>
            <h4>
                Developer proficiencies
                <h4>Front-End</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                <h4>Backend-End</h4>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>MySQL</li>
                    </ul>
            </h4>
            
        </div>
    );
}

export default Resume;