"use client";
import { useRef } from "react";
import "./stock.css";
export default function StockManagement() {
  const editStockRef = useRef(null);
  return (
    <>
      <div className="stock">
        <div className="new-stock">
          <h3>Stok Girişi (Depo & Patron)</h3>
          <form>
            <label>
              Malzeme Kodu (Zorunlu)
              <input type="text" placeholder="ABS-01" />
            </label>

            <label>
              Malzeme Adı (Opsiyonel - Otomatik)
              <input type="text" placeholder="ABS Granül" />
            </label>

            <div className="stock-grid">
              <label>
                Birim
                <select>
                  <option>Adet</option>
                  <option>Metre</option>
                  <option>Litre</option>
                  <option>Inch</option>
                  <option>Kilogram</option>
                </select>
              </label>

              <label>
                Tedarik Tipi
                <select>
                  <option>Dışarıdan (buy)</option>
                  <option>İç Üretim (make)</option>
                </select>
              </label>

              <label>
                Marka
                <input type="text" placeholder="SKF / BASF" />
              </label>

              <label>
                Birim Fiyat
                <input type="number" placeholder="0" />
              </label>

              <label>
                Yeni Gelen Miktar
                <input type="number" placeholder="0" />
              </label>

              <label>
                Minimum Stok
                <input type="number" placeholder="0" />
              </label>
            </div>

            <button>Stok Kaydet</button>
          </form>
        </div>
        <div className="current-stock">
          <h3>Mevcut Stoklar</h3>
          <div className="stock-filter">
            <input type="text" placeholder="Ara" />
          </div>
          <div className="stock-list">
            <div className="stock-card">
              <div className="stock-head">
                <strong>ABS-01</strong>
                <span className="badge buy">BUY</span>
              </div>

              <div className="stock-row">
                <span>Ad</span>
                <span>ABS Granül</span>
              </div>

              <div className="stock-row">
                <span>Stok</span>
                <span>120 KG</span>
              </div>

              <div className="stock-row warning">
                <span>Min</span>
                <span>150 KG</span>
              </div>

              <div className="stock-row">
                <span>Marka</span>
                <span>BASF</span>
              </div>

              <div className="stock-row">
                <span>Birim Fiyat</span>
                <span>₺32,50</span>
              </div>

              <button
                type="button"
                onClick={() => editStockRef.current.showModal()}
              >
                Düzenle
              </button>
            </div>
            <div className="stock-card">
              <div className="stock-head">
                <strong>ABS-01</strong>
                <span className="badge buy">MAKE</span>
              </div>

              <div className="stock-row">
                <span>Ad</span>
                <span>ABS Granül</span>
              </div>

              <div className="stock-row">
                <span>Stok</span>
                <span>120 KG</span>
              </div>

              <div className="stock-row warning">
                <span>Min</span>
                <span>150 KG</span>
              </div>

              <div className="stock-row">
                <span>Marka</span>
                <span>BASF</span>
              </div>

              <div className="stock-row">
                <span>Birim Fiyat</span>
                <span>₺32,50</span>
              </div>

              <button>Düzenle</button>
            </div>
          </div>
        </div>
      </div>
      <dialog ref={editStockRef} className="stock-dialog">
        <h3>Stok Düzelt</h3>
        <div className="label-group">
          <label>
            Yeni Stok
            <input type="number" placeholder="0" />
          </label>
          <label>
            Yeni Minimum
            <input type="number" placeholder="0" />
          </label>
          <label>
            Marka
            <input type="text" placeholder="BASF / SKF / ..." />
          </label>
          <label>
            Birim Fiyat
            <input type="number" placeholder="0.00" />
          </label>
        </div>
        <div className="dialog-actions">
          <button
            type="button"
            className="secondary"
            onClick={() => editStockRef.current.close()}
          >
            İptal
          </button>
          <button type="button" className="primary">
            Kaydet
          </button>
        </div>
      </dialog>
    </>
  );
}
