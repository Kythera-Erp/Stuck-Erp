import Link from "next/link";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <h2>
        {/* <img
          src="./images/stuck-logo.png"
          style={{ width: "60px" }}
          alt="Stuck Logo"
        /> */}
        STU<span>CK</span>
      </h2>
      <div className="burger-menu">
        <input type="checkbox" id="menu_checkbox" className="menu_checkbox" />
        <label htmlFor="menu_checkbox">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <div className="menu-overlay"></div>
        <nav className="side-menu">
          <Link href="/">Dashboard</Link>
          {/* <Link href="#">Dashboard > */}
          <Link href="/dashboard/orders">Siparişler</Link>
          <Link href="/dashboard/stock-management">Stok Yönetimi</Link>
          <Link href="/dashboard/bom">Master BOM</Link>
          <Link href="#">İç Üretim</Link>
          <Link href="/dashboard/import">Import / Aktarım</Link>
          <div className="role">
            <h5>Kullanıcı - <span>Ali Yıldız</span></h5>
          </div>
        </nav>
      </div>
    </div>
  );
}
