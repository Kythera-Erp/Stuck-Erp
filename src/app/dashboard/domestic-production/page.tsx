import "./production.css";
export default function Production() {
  return (
    <div className="production-page">
      <div className="production-create">
        <h3>İç Üretim İş Emri Oluştur</h3>
        <form>
          <label>
            Ürün Kodu
            <input type="text" placeholder="HRT-12" />
          </label>
          <label>
            Üretim Adı
            <input type="text" placeholder="Otomatik gelir" />
          </label>
          <div className="label-grid">
            <label>
              Miktar
              <input type="number" placeholder="1" />
            </label>
            <label>
              Proses / Hat
              <input type="text" placeholder="Ekstrüzyon" />
            </label>
          </div>
          <label htmlFor="">
            Notlar
            <textarea name="" placeholder="İç üretim notu..."></textarea>
          </label>
          <button type="button">Oluştur</button>
        </form>
      </div>
      <div className="production-list">
        <h3>İç Üretim İş Emirleri</h3>
        <div className="production-list-filter">
          <input type="text" placeholder="Ara..." />
        </div>
        <div className="production-cards">
          <div className="production-card">
            <div className="production-header">
              <span>#RT3080(ürün kodu)</span>
              <h6>Kurşun Kalem</h6>
            </div>
            <div className="production-body">
              <div>
                <span>19 Ağu 2021</span>
                <p>121 (miktar)</p>
              </div>
              <div className="production-status">
                <span></span>
                <h5>Devam</h5>
              </div>
            </div>
          </div>
          <div className="production-card">
            <div className="production-header">
              <span>#RT3080(ürün kodu)</span>
              <h6>Kurşun Kalem</h6>
            </div>
            <div className="production-body">
              <div>
                <span>19 Ağu 2021</span>
                <p>150 (miktar)</p>
              </div>
              <div className="production-status">
                <span></span>
                <h5>Devam</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
