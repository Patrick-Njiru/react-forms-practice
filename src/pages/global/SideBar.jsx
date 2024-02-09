import { NavLink } from "react-router-dom"

const SideBar = () => (
  <header>
    <nav id="sidebarMenu" className="collapse d-block sidebar collapse bg-white">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          {/* <NavLink to='/' className="list-group-item list-group-item-action py-2 ripple"> Home </NavLink>
          <NavLink to='/simple_form' className="list-group-item list-group-item-action py-2 ripple"> Add User </NavLink>
          <NavLink to='/complex_form' className="list-group-item list-group-item-action py-2 ripple"> Add Detailed User </NavLink>
          <NavLink to='/all_users' className="list-group-item list-group-item-action py-2 ripple"> All Users </NavLink> */}
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Main dashboard</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple active"
          >
            <i className="fas fa-chart-area fa-fw me-3"></i>
            <span>Webiste traffic</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-lock fa-fw me-3"></i>
            <span>Password</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-line fa-fw me-3"></i>
            <span>Analytics</span>
          </a>
        </div>
      </div>
    </nav>
  </header>
)

export default SideBar