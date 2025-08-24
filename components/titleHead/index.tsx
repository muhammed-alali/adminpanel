import { TiHome } from "react-icons/ti";

export default function TitleHead({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  const styDashboard: React.CSSProperties = {
    display: "inline-block",
    width: "36px",
    height: "36px",
    borderRadius: "4px",
    textAlign: "center",
    alignContent: "center",
    boxShadow: "0px 3px 8.3px 0.7px rgba(163, 93, 255, 0.35)",
    background: "linear-gradient(to right, #da8cff, #9a55ff)",
  };
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={styDashboard}>
          <span
            style={{
              color: "white",
              fontSize: "20px",
            }}
          >
            {" "}
            {icon}
          </span>
        </div>
        <h3>{title}</h3>
      </div>
    </>
  );
}
