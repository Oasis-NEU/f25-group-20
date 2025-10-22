import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif"
    }}>
      {/* single text users can click to reroute */}
      <Link to="/app" style={{ textDecoration: "underline", fontSize: 20 }}>
        go to the app
      </Link>
    </div>
  );
}