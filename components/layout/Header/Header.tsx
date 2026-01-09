import "./header.css"
export default function Header() {
  return(
    <div className='header'>
      <a href="#"><img src="./images/stuck-logo.png" style={{ width: "60px" }} alt="Stuck Logo" />STUCK</a>
      <div className="burger-menu">
        <input type="checkbox" id='menu_checkbox' className="menu_checkbox" />
        <label htmlFor="menu_checkbox">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <div className="menu-overlay"></div>
        <nav className="side-menu">
          <a href="#">Dashboard</a>
          <a href="#">Orders</a>
          <a href="#">Products</a>
          <a href="#">Settings</a>
        </nav>
      </div>
    </div>
  )
}