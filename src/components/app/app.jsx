import React from 'react';
import './app.css';
import Modal from "../modal/modal";

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
                <button onClick={this.toggleModal}>vds</button>
            </div>
        );
    }
}

export default App;
