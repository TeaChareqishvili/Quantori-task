import backGroundImage from "../public/assets/bg.jpg";

export default function HomePage() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${backGroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    ></div>
  );
}
