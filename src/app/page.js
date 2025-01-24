"use client";
require("dotenv").config()
import { useState } from "react";
import ChatComponent from "./components/ChatComponent";

export default function Home() {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (popupName) => {
    setActivePopup(popupName);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  // Mapping of popup names to image paths
  const popupImages = {
    "About": "/Why.jpg",
    "Mindfulness": "/mindfulness.jpg",
    "Stress Tips": "/stress.jpg",
    "Meditation": "/meditation.jpg",
  };

  return (
    <div style={styles.page}>
      <header style={styles.navbar}>
        <h2 style={styles.navTitle}>Mindfulness Chatbot</h2>
        <nav style={styles.navLinks}>
          {["Mindfulness", "Stress Tips", "Meditation", "About"].map((item, index) => (
            <a
              key={index}
              href="#"
              style={styles.navLink}
              onClick={(e) => {
                e.preventDefault();
                openPopup(item);
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>
      <main style={styles.main}>
        <div style={styles.mentalHealthCard}>
          <div style={styles.textContainer}>
            <h3 style={styles.heading}>Mindfulness Chatbot</h3>
            <p style={styles.mentalHealthText}>
              Mental health is just as important as physical health. It affects how we think, feel, and act in our daily
              lives. Taking care of your mental health is essential for a balanced and happy life. Remember, it’s okay
              to ask for help.
            </p>
          </div>
          <div style={styles.chatComponent}>
            <ChatComponent />
          </div>
        </div>
      </main>
      <footer style={styles.footer}>
        // <p style={styles.footerText}>Designed by Yashraj Limkar, Prosenjeet Shil, Zeal Vira</p>
      </footer>

      {/* Dynamic Popup */}
      {activePopup && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupCard}>
            <button style={styles.closeButton} onClick={closePopup}>
              ×
            </button>
            <h2 style={styles.popupHeading}>{activePopup}</h2>
            <p style={styles.popupText}>
              {activePopup === "About"
                ? "We created the mental health chatbot to help people manage stress, anxiety, and other mental health issues in a simple and easy way. In today’s busy world, many people feel overwhelmed, and we wanted to build a tool that can provide support anytime."
                : activePopup === "Mindfulness"
                ? "Mindfulness is about being present and fully engaged in the moment without judgment. To practice it, start small by dedicating just 5 minutes daily to focus on your breathing and notice the sensations around you. Pay attention to simple activities, like eating or walking, by observing the sounds, smells, and textures involved. Deep breathing is a great way to calm your mind—breathe in for four seconds, hold for four, and exhale for six."
                : activePopup === "Meditation"
                ? "Meditation is a practice that helps calm the mind, reduce stress, and improve overall well-being. It involves sitting quietly, focusing on your breath, or using a mantra to clear your thoughts. Regular meditation can enhance your ability to stay present, increase self-awareness, and promote relaxation. It’s a simple way to disconnect from the daily hustle and create mental clarity. Whether for a few minutes or longer sessions, meditation helps train your mind to be less reactive and more peaceful"
                : activePopup === "Stress Tips"
                ? "To manage stress, try deep breathing exercises, like the 4-7-8 technique, to calm your mind. Regular exercise, even a short walk, can help release tension and boost your mood. Prioritize sleep and maintain a healthy routine, as rest is key to handling stress. Also, taking breaks throughout the day and practicing mindfulness can help you stay grounded. Don’t hesitate to talk to someone or seek support when needed—it’s important to share your feelings and not carry the burden alone."
                : `Content for ${activePopup} coming soon!`}
            </p>
            <img
              src={popupImages[activePopup] || "/default.jpg"} // Default image if not found
              alt={activePopup}
              style={styles.popupImage}
            />
          </div>
        </div>
      )}

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
    justifyContent: "space-between",
    minHeight: "100vh",
    backgroundImage: "url('/bg9.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: 0,
    padding: 0,
  },
  navbar: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.44)",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    position: "fixed",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(10px)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
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
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "80px", // Space from navbar
    flexGrow: 1,
  },
  mentalHealthCard: {
    backgroundColor: "rgba(0, 0, 0, 0.26)",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "800px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "20px",
    backdropFilter: "blur(25px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  textContainer: {
    maxWidth: "60%",
    textAlign: "left",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 0.83)",
    marginBottom: "30px",
  },
  mentalHealthText: {
    fontSize: "1.2rem",
    color: "white",
    lineHeight: "1.6",
  },
  chatComponent: {
    marginLeft: "20px",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  footer: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "10px 0",
  },
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popupCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: "20px",
    width: "80%",
    maxWidth: "600px",
    textAlign: "center",
    position: "relative",
  },
  popupHeading: {
    fontSize: "2rem",
    margin: "10px 0",
    color: "#333333",
  },
  popupText: {
    fontSize: "1rem",
    margin: "10px 0",
    color: "#555555",
  },
  popupImage: {
    width: "100%",
    borderRadius: "10px",
    marginTop: "15px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#888888",
  },
};
