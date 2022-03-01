import React from 'react';
import axios from 'axios';
import UsersList from './components/Users.js';
import Footer from './components/Footer.js';
import Navbar from './components/Menu.js';


const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) => `${DOMAIN}${url}`

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarItems: [
                {name: 'Users', href:'users/'},
            ],
            'users': []
        }
    }

    componentDidMount() {
        // получаем юзеров
        axios.get(get_url('users/'))
        .then(response => {
            this.setState( {
                'users': response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (

            <div className="container-fluid">
                <header>
                    <Navbar navbarItems={this.state.navbarItems}/>
                </header>
                <section id="main">
                    <UsersList users = {this.state.users}/>
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>

        )
    }
}

export default App;
