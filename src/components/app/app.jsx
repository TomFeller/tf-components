import React from 'react';
import './app.css';
import Modal from "../modal";
import Button from "../button";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalActive: false
        }
    }

    toggleModal = () => {
        this.setState({
            modalActive: !this.state.modalActive
        })
    };

    render() {
        const {modalActive} = this.state;
        return (
            <div className="app">
                {modalActive &&
                <Modal toggle={this.toggleModal}
                       center
                       active={modalActive}
                       animate={'slide-l'}
                       title={'Modal title'}
                       subtitle={'Modal subtitle'}
                       description={'Modal description'}/>
                }
                <Button onClick={this.toggleModal} size={'sm'} block color={'red'}/>
            </div>
        );
    }
}

export default App;
