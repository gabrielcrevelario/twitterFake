import React, { useState } from 'react';
export default (props) => {
    const { insert } = props;
    const [description, setDescription] = useState("")
    
    function insertTweet() {
        insert(description)
        setDescription("")
    }
    function handlerChange(e) {
        debugger;
        setDescription(e.target.value)
    }
    function cleanDescription() {
        setDescription("");
    }

    return (<div className="createTwett">
        <div className="twetInputWithSend">
            <div className="sendTweet">
                <div className="containerImg">
                    <div className="imgPerfil" style={{background: "url('./41434878_2400884366649046_1342424704475987968_n.jpg') center center  no-repeat",
                    backgroundSize: "cover"}}>
                    </div>
                </div>
                <div className="containerInput">
                    <input onChange={e => handlerChange(e)} value={description} placeholder="what is going on" type="text" name="description" id=""/>
                </div>
            </div>
            <div className="buttonSend">
                <div className="btnIcons">
                    <div className="bntImage">
                        <button>
                            <span className="material-icons">
                                insert_photo
                                </span>
                        </button>
                    </div>
                    <div className="bntEmoticon">
                        <button><span className="material-icons">
                            insert_emoticon
                            </span></button>
                    </div>
                    <div className="bntFile">
                        <button><span className="material-icons">
                            insert_drive_file
                            </span></button>
                    </div>
                </div>
                <div className="send">
                    <button onClick={() => insertTweet()}> 
                        <span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dove" className="svg-inline--fa fa-dove fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M288 167.2v-28.1c-28.2-36.3-47.1-79.3-54.1-125.2-2.1-13.5-19-18.8-27.8-8.3-21.1 24.9-37.7 54.1-48.9 86.5 34.2 38.3 80 64.6 130.8 75.1zM400 64c-44.2 0-80 35.9-80 80.1v59.4C215.6 197.3 127 133 87 41.8c-5.5-12.5-23.2-13.2-29-.9C41.4 76 32 115.2 32 156.6c0 70.8 34.1 136.9 85.1 185.9 13.2 12.7 26.1 23.2 38.9 32.8l-143.9 36C1.4 414-3.4 426.4 2.6 435.7 20 462.6 63 508.2 155.8 512c8 .3 16-2.6 22.1-7.9l65.2-56.1H320c88.4 0 160-71.5 160-159.9V128l32-64H400zm0 96.1c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"></path></svg>
                        </span>
                        Tweet</button>
                </div>
            </div>
            
        </div>
    </div>)
}