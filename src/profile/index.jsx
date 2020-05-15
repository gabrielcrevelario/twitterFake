import React, { Fragment, Component } from 'react';
export default  class Profile extends  Component {
    constructor(props) {
        super(props)
        this.state = {
           showInput:false
        }
        this.closeInput = this.closeInput.bind(this);
    }
    
     ShowOrHideInput() {
        const showInput = this.state.showInput;
        this.setState({showInput:!showInput})
    }
     closeInput() {
         debugger;
        this.setState({showInput:false})
    }
    render() {
        const { change, profile } = this.props
        const {showInput} = this.state;
    return (
        <Fragment>
            {
                showInput ?
                    <div className="boxProfile">
                        <label for="inputPerfil">Change Profile ?</label>
                        <input type="file" onChange={(e) => change(e,e.target.files[0])} name="" id="inputPerfil" />
                    </div>
                    : ""}
            <div className="perfilPhoto">
                <div className="changePerfilButton" onClick={() => this.ShowOrHideInput()}>
                    <button><span className="material-icons">camera_alt</span> </button>
                </div>
                <div className="photo" style={{ background: `url('${profile}') center center / cover no-repeat` }}></div>
            </div>
        </Fragment>)
    }

}