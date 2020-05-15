import React from 'react';

export default (props) => {
  const {description, nameUser, namePerfil} = props;
   return ( <article>
    <div className="itemContainer">
        <div className="containerImg">
            <div className="imgPerfil" style={{background: "url('./41434878_2400884366649046_1342424704475987968_n.jpg') center center  no-repeat",
             backgroundSize: "cover"}}>
            </div>
        </div>
      <div className="item">

          <div className="titlePost">
              <h3>{nameUser} <span>{namePerfil} . 57 min</span></h3>
            </div>
        <div className="tweet"><p>{description}</p></div>
            <div className="btnTweet">
                <div className="commentAndLike">
                    <span className="material-icons">
                        rate_review
                    </span>
                    <span>500</span>
                </div>
                <div className="commentAndLike">
                    <span className="material-icons">
                        favorite
                    </span>
                    <span>33</span>
                </div>
            </div>
        </div>
    </div>
</article>)
}