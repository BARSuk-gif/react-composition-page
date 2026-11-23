/** Компонент виджета погоды. */
export default function WeatherWidget() {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2">Погода</h5>
      <div className="d-flex align-items-center">
        <span style={{ fontSize: "2rem", marginRight: "10px" }}>🌧️</span>
        <span className="fs-4 fw-bold me-2">+17°</span>
        <span className="text-secondary small">Утром +17,<br/>днём +20</span>
      </div>
    </div>
  );
}