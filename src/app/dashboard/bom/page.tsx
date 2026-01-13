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
      </div>
    </div>
  );
}
