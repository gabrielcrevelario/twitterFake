import React from 'react';
import TwitterInformation from '../twitterInformation'
import PostNotification from '../postNotification'
import MaybeYouLike from '../maybeYouLike'

export default (props) => (
    <div className="block1">
        <TwitterInformation />
        <PostNotification />
        <MaybeYouLike />
    </div>
)