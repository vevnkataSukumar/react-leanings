import React from 'react'

function Login() {
    const [formData, setFormData] = React.useState({
        userName: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {};
    return (
        <div style={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder='Username'
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        placeholder='Password'
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.submitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;

const styles = {
    container: {
      maxWidth: "400px",
      margin: "0px auto",
      padding: "30px",
      border: "1px solid #ccc",
      borderRadius: "16px",
      backgroundColor: "#ffffff",
      textAlign: "center",
      boxShadow: "0px 0px 8px 0px #cdcdccd9",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "20px",
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    submitButton: {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "15px",
    },
    submitButtonHover: {
        backgroundColor: "#0056b3",
    },
};