import "./bom.css";
export default function Bom() {
  return (
    <div className="bom-page">
      <div className="bom-list">
        <h3>Kayıtlı Ürünler</h3>
        <div className="bom-search">
          <label>
            Arama
            <input type="text" name="" id="" placeholder="HRT-12" />
          </label>
        </div>
        <div className="table-head">
          <h6>Ürün Kodu</h6>
          <h6>Ürün Adı</h6>
        </div>
        <div className="bom-rows">
          <button className="bom-row" type="button">
            <span className="bom-code">HRT-12</span>
            <span className="bom-name">1/2 hortum</span>
          </button>

          <button className="bom-row" type="button">
            <span className="bom-code">HRT-14</span>
            <span className="bom-name">1/2 hortum</span>
          </button>
        </div>
      </div>
      <div className="bom-editor">
        <h3>Master BOM Düzenleyici</h3>
        <form>
          <div className="bom-fields">
            <label className="field">
              <span>Ürün Kodu</span>
              <input type="text" placeholder="HRT-12" />
            </label>
            <label className="field">
              <span>Ürün Adı</span>
              <input type="text" placeholder="1/2 Hortum" />
            </label>
          </div>
          <ul className="bom-items">
            <li className="bom-card">
              <label>
                <span>Malzeme Kodu</span>
                <input type="text" placeholder="ABS-01" />
              </label>
              <label>
                <span>Malzeme Adı</span>
                <input type="text" value="ABS Granül" disabled />
              </label>
              <label>
                <span>Birim</span>
                <input type="text" value="kg" disabled />
              </label>
              <label>
                <span>Adet</span>
                <input type="number" placeholder="1" />
              </label>
              <button type="button">SİL</button>
            </li>

            <li className="bom-card">
              <label>
                <span>Malzeme Kodu</span>
                <input type="text" placeholder="ABS-01" />
              </label>
              <label>
                <span>Malzeme Adı</span>
                <input type="text" value="ABS Granül" disabled />
              </label>
              <label>
                <span>Birim</span>
                <input type="text" value="kg" disabled />
              </label>
              <label>
                <span>Adet</span>
                <input type="number" placeholder="1" />
              </label>
              <button type="button">SİL</button>
            </li>
          </ul>
          <div className="bom-btn-group">
            <button type="button">Satır Ekle</button>
            <button type="button">BOM Kaydet</button>
            <button type="button">BOM Sil</button>
          </div>
        </form>
      </div>
    </div>
  );
}
