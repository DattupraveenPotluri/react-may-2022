import React, { Component } from 'react'
import ContactList from './ContactList'
import Axios from 'axios'
class ContactApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: []
        }
    }
    componentDidMount() {
        let url = 'https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist'
        Axios.get(url).then((response) => {
            this.setState({ contacts: response.data })
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return <div className="container">
            <h1>ContactApp</h1>
            {/* <pre>{JSON.stringify(this.state)}</pre> */}

            <div className="row">
                <div className="col-md-8">
                    {/* ContactList Component  */}
                    
                    <ContactList contacts={this.state.contacts} />
                </div>
                <div className="col-md-4">
                    {/*   Contact Details Component  */}
                </div>
            </div>
        </div>
    }
}

export default ContactApp
