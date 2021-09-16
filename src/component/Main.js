import React from 'react';
import Main from "./component/Main";
import Footer from "./component/Footer";
import App from '../App';
// import data from '../assets/data.json'


class Main extends React.Component {

    
    render() {
        return (
           
            <div>
              <Header />
              <App />
              <Footer />
            </div>
            
        )
}
}
export default Main;