import "./workdorders.css";
export default function WorkOrders() {
  return (
    <div className="orders-panel">
      <h2>Tüm İş Emirleri</h2>
      <div className="order-cards">
        <div className="order-card">
          <div className="order-header">
            <span>#RT3080(ürün kodu)</span>
            <h6>Kurşun Kalem</h6>
          </div>
          <div className="order-body">
            <div>
              <span>19 Ağu 2021</span>
              <p>ABC firması</p>
            </div>
            <div className="order-status">
              <span></span>
              <h5>Devam</h5>
            </div>
          </div>
        </div>
        <div className="order-card">
          <div className="order-header">
            <span>#RT3080</span>
            <h6>Kurşun Kalem</h6>
          </div>
          <div className="order-body">
            <div>
              <span>19 Ağu 2021</span>
              <p>X42Q</p>
            </div>
            <div className="order-status">
              <span></span>
              <h5>Devam</h5>
            </div>
          </div>
        </div>
        <div className="order-card">
          <div className="order-header">
            <span>#RT3080</span>
            <h6>Kurşun Kalem</h6>
          </div>
          <div className="order-body">
            <div>
              <span>19 Ağu 2021</span>
              <p>X42Q</p>
            </div>
            <div className="order-status">
              <span></span>
              <h5>Tamamlandı</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
