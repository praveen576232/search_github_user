import './Display_FOllowers_And_Repo.css';
import React, { useState } from 'react'
import Display_card from './Display_card.js/Display_card.';
import { useStateValue } from '../../StateProvider/StateProvider';

function Display_FOllowers_And_Repo() {
    const[{is_followers_or_following_or_repo,follow}] = useStateValue();
    return (
        <div className="display_followers_and_repo">
             <div className="display_cards_hedding">
                 {
                     is_followers_or_following_or_repo &&
                     is_followers_or_following_or_repo === 'IS_FOLLOWERS' ?(<p>Followers</p>)
                     :is_followers_or_following_or_repo === 'IS_FOLLOWING'?(<p>Following</p>)
                     :is_followers_or_following_or_repo === 'IS_REPO'?(<p>Repo</p>)
                     :(<p>Gists</p>)
                    
                 }
  
      </div>
      <div className="display_cards_list">

     <div className="cards_lists">
     {
         follow &&  is_followers_or_following_or_repo && 
         is_followers_or_following_or_repo === 'IS_FOLLOWERS' || is_followers_or_following_or_repo === 'IS_FOLLOWING'
         ? follow?.map( follouser =>(
            <Display_card key={follouser?.id} name={follouser?.login}  avatarSrc={follouser?.avatar_url} githublink={follouser?.html_url}  />

         ))

        : is_followers_or_following_or_repo === 'IS_REPO'?
        follow?.map(repo =>(

            <Display_card key={repo?.id} name={repo?.full_name} avatarSrc={repo?.owner?.avatar_url} githublink={repo?.owner?.repos_url}  />
    ))
       :  follow?.map( gists =>(
        <Display_card key={gists?.id} name={gists?.files?.full_name} avatarSrc={gists?.owner?.avatar_url} githublink={gists?.html_url}  /> 
       ))
     }
     </div>

      </div>
        </div>
    )
}

export default Display_FOllowers_And_Repo
