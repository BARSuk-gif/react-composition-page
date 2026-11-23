/** Компонент виджета телепрограммы. */
export default function TVSchedule() {
  return (
    <div className="mb-4">
      <div className="d-flex align-items-center mb-2">
        <h5 className="fw-bold mb-0 me-3">Телепрограмма</h5>
        <button className="btn btn-sm btn-primary py-0 px-2 text-white">Эфир</button>
      </div>
      <div className="mb-1 d-flex">
        <span className="text-secondary me-2">02:00</span>
        <a href="#" className="text-decoration-none text-dark">THT Best</a>
        <span className="text-secondary small ms-2">THT International</span>
      </div>
      <div className="mb-1 d-flex">
        <span className="text-secondary me-2">02:15</span>
        <a href="#" className="text-decoration-none text-dark">Джинглики</a>
        <span className="text-secondary small ms-2">Карусель INT</span>
      </div>
      <div className="mb-1 d-flex">
        <span className="text-secondary me-2">02:25</span>
        <a href="#" className="text-decoration-none text-dark">Наедине со всеми</a>
        <span className="text-secondary small ms-2">Первый</span>
      </div>
    </div>
  );
}