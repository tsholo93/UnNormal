import Nav from "../PageNav/Nav";
import "./PageHeader.css";

export default function PageHeader() {
  return (
    <header className="UnNormal-page-header">
      <div className="brand-logo">
        <a href="#0">UnNormal Studio</a>
      </div>
      <Nav/>
    </header>
  )
}
