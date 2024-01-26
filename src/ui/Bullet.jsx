const bgGenerator = (bg) => {
  switch (bg) {
    case "primary":
      return "bg-primary";
    case "success":
      return "bg-emerald-500";
    case "info":
      return "bg-blue-500";
    case "warning":
      return "bg-yellow-500";
    case "error":
      return "bg-red-500";
    case "neutral":
      return "bg-neutral-500";
    default:
      return "bg-primary";
  }
};

const Bullet = ({ bulletColor = "primary" }) => {
  return (
    <div className={`w-4 h-4 rounded-full ${bgGenerator(bulletColor)}`}></div>
  );
};

export default Bullet;
