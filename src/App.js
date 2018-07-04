import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import FormContainer from "./containers/FormContainer";

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <Content />
                <FormContainer />
            </div>
        );
    }
}

export default App;