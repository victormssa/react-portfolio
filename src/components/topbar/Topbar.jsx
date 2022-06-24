import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Victor Alves</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+55 71 99386-0508</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>victormssalves@outlook.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
