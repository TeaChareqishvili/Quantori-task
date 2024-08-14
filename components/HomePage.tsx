import backGroundImage from "../public/assets/bg.jpg";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    ></div>
  );
}
