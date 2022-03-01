import React from 'react'


function NavbarItem({name, href}) {
    return (
        <li className="nav-item active">
            <a className="nav-link" href={href}>{name}</a>
        </li>
    )
}


function Navbar({navbarItems}) {
    return (
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">TodoAPP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href} />)}
                    </ul>
                </div>
            </div>  
        </nav>
      </div>
    )
}

export default Navbar
