import './statuscard.css'
export default function StatusCard() {
  return(
    <div className="cards">
      <div className="card">
        <div className="card-title">
          <span className="kpi-dot dot-blue"></span>
          <p>Yeni</p>
        </div>
        <div className="card-value">0</div>
      </div>
      <div className="card">
        <div className="card-title">
          <span className="kpi-dot dot-teal"></span>
          <p>Düzenlemede</p>
        </div>
        <div className="card-value">0</div>
      </div>
      <div className="card">
        <div className="card-title">
          <span className="kpi-dot dot-amber"></span>
          <p>Devam Eden</p>
        </div>
        <div className="card-value">0</div>
      </div>
      <div className="card">
        <div className="card-title">
          <span className="kpi-dot dot-red"></span>
          <p>Duran</p>
        </div>
        <div className="card-value">0</div>
      </div>
      <div className="card">
        <div className="card-title">
          <span className="kpi-dot dot-green"></span>
          <p>Tamamlanan</p>
        </div>
        <div className="card-value">0</div>
      </div>
      <div className="card">
        <div className="card-title">
          <span className="kpi-dot dot-gray"></span>
          <p>İptal</p>
        </div>
        <div className="card-value">0</div>
      </div>
    </div>
  )
}