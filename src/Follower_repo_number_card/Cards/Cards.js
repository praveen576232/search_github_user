import './Cards.css'
import React, { useState } from 'react'

import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone';
import CardRepo from '../CardRepo';
import  {useStateValue} from '../../StateProvider/StateProvider'
import axios from '../../axios/axios'
function Cards() {
    
    const [{user},dispatch] = useStateValue();
   const changetorepo =() =>{
  dispatch({
      type:'SET_TYPE_OF_CARD',
      card_type:'IS_REPO'
  })
   }
   const changetoFollower =() =>{
    dispatch({
        type:'SET_TYPE_OF_CARD',
        card_type:'IS_FOLLOWERS'
    })
     }
     const changetoFollowing =() =>{
       if(user  && user?.following >0) {

           axios.get(`/users/${user?.login}/following`).then(following =>{
               dispatch({
                   type:'SET_GITUSER_FOOLLOWING',
                   card_type:'IS_FOLLOWING',
                   following:following?.data
                });
              }).catch(err => {
                console.log(err);
                dispatch({
                    type:'SET_GITUSER_FOOLLOWING',
                    card_type:'IS_FOLLOWING',
                    following:null
                 });
              });
       } else{
        dispatch({
            type:'SET_GITUSER_FOOLLOWING',
            card_type:'IS_FOLLOWING',
            following:null
         });
       }

           
           
    }
    const changetoGists =() =>{
        if(user  && user?.public_gists >0) {
            axios.get(`/users/${user?.login}/gists`).then(gists =>{
             dispatch({
                 type:'SET_GITUSER_GISTS',
                 type:'SET_TYPE_OF_CARD',
                 gists:gists?.data
              });
            }).catch(err => {
                console.log(err);
                dispatch({
                    type:'SET_GITUSER_GISTS',
                    card_type:'SET_TYPE_OF_CARD',
                    gists:null
                 });
            });
        }else{
            dispatch({
                type:'SET_GITUSER_GISTS',
                card_type:'SET_TYPE_OF_CARD',
                gists:null
             });
        }
            
        }
    return (
        <div className="app_cards">
        <CardRepo onClick={changetorepo} Icon={GitHubIcon} backgroundColor='rgb(255, 185, 185)'iconcolor='red' fnumber={user?.public_repos} types='Repos' />
        <CardRepo onClick={changetoFollower} Icon={PeopleAltOutlinedIcon} backgroundColor='rgb(174, 233, 248)'iconcolor='rgb(2, 175, 175)' fnumber={user?.followers} types='Followers' />
        <CardRepo onClick={changetoFollowing} Icon={GroupAddOutlinedIcon} backgroundColor='rgb(243, 191, 243)'iconcolor='purple' fnumber={user?.following} types='Following' />
        <CardRepo onClick={changetoGists} Icon={CodeTwoToneIcon} backgroundColor=' rgb(259, 300, 196)'iconcolor='yellow' fnumber={user?.public_gists} types='Gists' />    
        </div>
    )
}

export default Cards
