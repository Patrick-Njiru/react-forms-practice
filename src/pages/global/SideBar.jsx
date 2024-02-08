// import { NavLinks } from '../../components'

const SideBar = () => (
  <header>
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Main dashboard</span>
          </a>
          <a h
            ref="#"
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
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-pie fa-fw me-3"></i>
            <span>SEO</span>
          </a>
        </div>
      </div>
    </nav>
  </header>
)

export default SideBar