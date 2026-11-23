/** Компонент списка прямых эфиров. */
export default function BroadcastList() {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-2">Эфир</h5>
      <div className="mb-1">
        <a href="#" className="text-decoration-none text-dark">▶️ Управление как искусство</a>
        <span className="text-secondary small ms-2">Успех</span>
      </div>
      <div className="mb-1">
        <a href="#" className="text-decoration-none text-dark">▶️ Ночь. Мир в это время</a>
        <span className="text-secondary small ms-2">earthTV</span>
      </div>
      <div className="mb-1">
        <a href="#" className="text-decoration-none text-dark">▶️ Андрей Возн...</a>
        <span className="text-secondary small ms-2">Совершенно секретно</span>
      </div>
    </div>
  );
}