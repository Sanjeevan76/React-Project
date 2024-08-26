import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
        < a href="/">BiteBox</a>
        </div>

       <div className="option">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Login</a>
       </div>

      <div className="cart">
      <a href="/">
        Cart
      </a>
      </div>
       
    </nav>
  )
}

export default Navbar
