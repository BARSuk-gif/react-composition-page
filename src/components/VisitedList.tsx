/** Компонент списка посещаемых ресурсов. */
export default function VisitedList() {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2">Посещаемое</h5>
      <div className="mb-1">
        <a href="#" className="text-decoration-none fw-bold text-dark">Недвижимость</a>
        <span className="text-secondary small"> — о сталинках</span>
      </div>
      <div className="mb-1">
        <a href="#" className="text-decoration-none fw-bold text-dark">Маркет</a>
        <span className="text-secondary small"> — люстры и светильники</span>
      </div>
      <div className="mb-1">
        <a href="#" className="text-decoration-none fw-bold text-dark">Авто.ру</a>
        <span className="text-secondary small"> — привод 4х4 до 500 000</span>
      </div>
    </div>
  );
}