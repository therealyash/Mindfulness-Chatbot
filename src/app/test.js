"use client";
// import ChatComponent from "./components/ChatComponent";

export default function Home() {
  return (
    <div style={styles.page}>
      <header style={styles.navbar}>
        <h2 style={styles.navTitle}>Mental Health App</h2>
        <nav style={styles.navLinks}>
          <a
            href="/about"
            style={styles.navLink}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            About
          </a>
          <a
            href="/mental-wellbeing"
            style={styles.navLink}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Mental Wellbeing
          </a>
        </nav>
      </header>
      <main style={styles.main}>
        {/* <ChatComponent /> */}
      </main>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundImage: "url('/mtn.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 0,
    padding: 0,
  },
  navbar: {
    width: "100%",
    backgroundColor: "rgba(34, 42, 52, 0.7)", // Semi-transparent for blur effect
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 20px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backdropFilter: "blur(10px)", // Restored background blur
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Material-style subtle shadow
  },
  navTitle: {
    fontSize: "1.2rem",
    fontWeight: "800",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "400",
    padding: "5px 10px",
    borderRadius: "4px",
    transition: "background-color 0.2s ease, color 0.2s ease",
    backgroundColor: "transparent",
  },
  main: {
    position: "fixed",
    bottom: "50px",
    right: "50px",
    width: "100%",
    maxWidth: "295px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    padding: "10px 10px",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
  },
};
