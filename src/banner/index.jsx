import React, { Component } from 'react';
import Profile from '../profile'
import {storage, database, firestore} from '../firebase'
export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            banner:'./2071706.jpg',
            fileBanner:null,
            perfil:'./41434878_2400884366649046_1342424704475987968_n.jpg',
            filePerfil:null
        }
        this.profileRef = React.createRef();
        this.fileInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePhotoProfile = this.changePhotoProfile.bind(this);
    }
    changePhotoProfile(e,filePerfil) {
        debugger
        e.stopPropagation()
        this.setState({filePerfil})
        
        const uploadImage = storage.ref(`profile/${filePerfil.name}`).put(filePerfil);
        uploadImage.on('state_changed', 
        (snapshot) => {
            
        }, 
        (error) => {
            // error function ....
            console.log(error);
        }, 
        () => {
            // complete function ....
            storage.ref('profile').child(filePerfil.name).getDownloadURL().then(img => {
                debugger;
                console.log(img)
                this.setState({perfil:img});
                this.profileRef.current.closeInput();
            })
        });
        debugger;
    }
    handleSubmit(e) {
        e.preventDefault();
        const fileBanner = e.target.files[0];
        this.setState({fileBanner});
        const uploadImage = storage.ref(`banner/${fileBanner.name}`).put(fileBanner);
        uploadImage.on('state_changed', 
        (snapshot) => {
            
        }, 
        (error) => {
            // error function ....
            console.log(error);
        }, 
        () => {
            // complete function ....
            debugger;
         storage.ref('banner').child(fileBanner.name).getDownloadURL().then(img => {
             debugger;
            console.log(img)
            this.profileRef.current.closeInput();
            this.setState({banner:img});
         })
     });
      }

    render() { 
       const {banner, perfil} = this.state;
        return (
            <header>
        <div onClick={() => this.profileRef.current.closeInput()} className="banner" >
            <div className="changeBanner">
            <input type="file" id="inputBanner" 
                    ref={this.fileInput} 
                onChange={this.handleSubmit} accept="image/png, image/jpeg"/>
                <span className="material-icons">camera_alt</span> 
            <label for="inputBanner">Change cover photo</label>
            </div>
            <div className="imgBanner" style={{background:`url("${banner}") center center  no-repeat`}}></div>
        </div>
         <Profile ref={this.profileRef} change={this.changePhotoProfile} profile={perfil}/> 
    </header>
    )
}
}