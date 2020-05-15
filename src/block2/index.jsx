import React, { Component } from 'react';
import CreateTweet from '../createTweet'
import Tweet from '../tweet'
import {database, storage, firestore} from '../firebase'
class Block2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:{}
        }
        this.insertTweet = this.insertTweet.bind(this)
        this.getTweet = this.getTweet.bind(this);
    }
    insertTweet(tweet) {
        debugger;
        const db =  firestore;
        const userUnique = this.state.user;
        const email = userUnique.email;
        const tweets = userUnique.tweets.push({emailReference:email , description:tweet})
        this.setState({user:userUnique })
        const newTweet = {description: tweet ,emailReference: email }
        db.collection("tweet").doc().set(newTweet)
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
     
    }
    componentDidMount() {
       this.getTweet();
    }
    async getTweet() {
        debugger
        let tweets = [];
        const db =  firestore;
        await db.collection("twitter").get().then(async querySnapshot => {
            querySnapshot.forEach(async (doc) => {
                debugger;
                let data = doc.data() 
                  data.tweets = [];
                  this.setState({ user: data});
                  await db.collection("tweet").get().then(async queryTw => {
                      queryTw.forEach(async query => {
                          debugger;
                            const tw = await query.data();
                            const user = this.state.user;
                            tweets.push(tw);
                            user.tweets = tweets;
                            this.setState({user});
                    })
                })
    
              });
           })
      }

    render() {
        debugger;
        const {user} = this.state
        return (
            <div className="block2">
                <div className="feed">
                    <CreateTweet
                     insert={this.insertTweet} />
                    <div className="listFeed">
                        {user && user.tweets && user.tweets.map( (tweet,index) =>
                        <Tweet key={index} description={tweet.description} nameUser={user.nameUser} namePerfil={user.nameProfile} />
                        )} 

                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Block2;