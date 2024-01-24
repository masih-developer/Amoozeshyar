const Button = ({ children }) => {
  const rippleEffect = (event) => {
    const btn = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
    circle.classList.add("ripple");

    const ripple = btn.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    btn.appendChild(circle);
  };

  return (
    <button
      type="button"
      id="bt"
      className="rounded px-5 py-3 min-w-max overflow-hidden shadow relative bg-sky-500 text-white hover:grsc"
      onClick={rippleEffect}
    >
      {children}
    </button>
  );
};

export default Button;
