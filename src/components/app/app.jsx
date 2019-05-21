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
                       contentWidth={700}
                       wrapperBg={'blue'}
                       contentBg={'red'}
                       title={'MODAL'}
                       animate={'slide-b'}
                       animateDuration={.3}
                       active={modalActive}/>
                }
                <button onClick={this.toggleModal}>vds</button>
            </div>
        );
    }
}

export default App;
