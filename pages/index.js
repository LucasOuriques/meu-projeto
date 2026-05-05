function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Seja bem-vindos 👋</h1>
      <p style={styles.text}>
        Essa é uma página inicial simples, feita apenas em JavaScript e em Next
      </p>
      <button style={styles.button} onClick={handleClick}>
        Clique aqui
      </button>
    </div>
  );
}

function handleClick() {
  alert("Bem-vindo ao projeto 🚀");
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0b33b6, #00ffc8)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 25px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#00c6ff",
    color: "#00334d",
  },
};

export default Home;
