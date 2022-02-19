import React from 'react'


function Navbar() {
    return (
      <div class='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="http://localhost:3000/">Main</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
            

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="http://localhost:3000/">ToDo</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Library</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Other</a>
                  </li>
                </ul>

                </div>
            </div>  
        </nav>
      </div>
    )
}

export default Navbar