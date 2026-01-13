import "./orders.css";
export default function Orders() {
  return (
    <div className="orders">
      <div className="new-order">
        <h3>Yeni Sipariş</h3>
        <form>
          <label htmlFor="">
            Müşteri
            <input type="text" name="" id="" placeholder="ABC Ltd." />
          </label>
          <label htmlFor="">
            Ürün Kodu (Zorunlu)
            <input type="text" name="" id="" placeholder="HRT-12" />
          </label>
          <label htmlFor="">
            Ürün Adı(Opsiyonel)
            <input type="text" name="" id="" placeholder="1/2 Hortum" />
          </label>
          <label htmlFor="">
            Miktar
            <input type="number" name="" id="" placeholder="1" />
          </label>
          <label htmlFor="">
            Teslim Tarihi
            <input type="date" name="" />
          </label>
          <label htmlFor="">
            BOM Tipi
            <select name="" id="">
              <option value="BOM'lu">BOM'lu</option>
              <option value="BOM'lu">BOM'suz</option>
            </select>
          </label>
          <button>Sipariş Oluştur</button>
        </form>
      </div>
      <div className="order-list">
        <h3>Sipariş Listesi</h3>
        <div className="mobile-orders">
          <div className="order-card">
            <div>
              <h6>
                <strong>ID:</strong> 1
              </h6>
            </div>
            <div>
              <h6>
                <strong>Müşteri:</strong> ABC Ltd.
              </h6>
            </div>
            <div>
              <h6>
                <strong>Ürün Kodu:</strong> HRT-12
              </h6>
            </div>
            <div>
              <h6>
                <strong>Ürün Adı:</strong> 1/2 Hortum
              </h6>
            </div>
            <div>
              <h6>
                <strong>Miktar:</strong> 1
              </h6>
            </div>
            <div>
              <h6>
                <strong>Teslim:</strong> 12/01/2026
              </h6>
            </div>
            <div>
              <h6>
                <strong>BOM Tip:</strong> BOM'lu
              </h6>
            </div>
          </div>
          <div className="order-card">
            <div>
              <h6>
                <strong>ID:</strong> 1
              </h6>
            </div>
            <div>
              <h6>
                <strong>Müşteri:</strong> ABC Ltd.
              </h6>
            </div>
            <div>
              <h6>
                <strong>Ürün Kodu:</strong> HRT-12
              </h6>
            </div>
            <div>
              <h6>
                <strong>Ürün Adı:</strong> 1/2 Hortum
              </h6>
            </div>
            <div>
              <h6>
                <strong>Miktar:</strong> 1
              </h6>
            </div>
            <div>
              <h6>
                <strong>Teslim:</strong> 12/01/2026
              </h6>
            </div>
            <div>
              <h6>
                <strong>BOM Tip:</strong> BOM'lu
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
