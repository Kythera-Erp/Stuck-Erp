import './stuck.css'
export default function Stuck() {
  return(
    <div className="stuck-panel">
      <h2>Kontrolden Çıkan İşler (STUCK)</h2>
      <div className="stuck-list">
        <div className="stuck-card">
          <div className="stuck-header">
            <span>#1245</span>
            <span className="badge danger">5 gün</span>
          </div>

          <div className="stuck-body">
            <p><b>Ürün:</b> Motor Parçası</p>
            <p><b>Müşteri:</b> ABC A.Ş.</p>
            <p><b>Durum:</b> Üretimde</p>
            <p className="reason">Hammadde yok</p>
          </div>
        </div>
        <div className="stuck-card">
          <div className="stuck-header">
            <span>#1245</span>
            <span className="badge danger">5 gün</span>
          </div>

          <div className="stuck-body">
            <p><b>Ürün:</b> Motor Parçası</p>
            <p><b>Müşteri:</b> ABC A.Ş.</p>
            <p><b>Durum:</b> Üretimde</p>
            <p className="reason">Hammadde yok</p>
          </div>
        </div>
        <div className="stuck-card">
          <div className="stuck-header">
            <span>#1245</span>
            <span className="badge danger">5 gün</span>
          </div>

          <div className="stuck-body">
            <p><b>Ürün:</b> Motor Parçası</p>
            <p><b>Müşteri:</b> ABC A.Ş.</p>
            <p><b>Durum:</b> Üretimde</p>
            <p className="reason">Hammadde yok</p>
          </div>
        </div>
      </div>
    </div>
  )
}