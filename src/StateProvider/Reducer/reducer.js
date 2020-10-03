
export const intialState ={
   user:null,
   is_followers_or_following_or_repo:'IS_FOLLOWERS',
   follow:null,
   followers:null,
   following:null,
   repo:null,
   gist:null,
   seraching:false
};

function reducer(state,action){
    
    switch (action.type) {
      case 'SET_SERACHING':
         return {
            ...state,
            seraching:action.seraching
         }
        case 'SET_GITUSER':
           return {
              ...state,
              user:action.gituser
           }
           case 'SET_GITUSER_FOOLLOWERS':
            state.follow=action.followers;
            state.followers=action.followers;
            return {
               ...state,
            }
            case 'SET_GITUSER_REPO':
              
               return {
                  ...state,
                  repo :action.repos
               }
            case 'SET_GITUSER_FOOLLOWING':
               state.follow=action.following;
               state.following=action.following;
               state.is_followers_or_following_or_repo=action.card_type;
               return {
                  ...state,
               }
               case 'SET_GITUSER_GISTS':
                  state.follow = action.gists;
                  state.gist = action.gists;
                  state.is_followers_or_following_or_repo=action.card_type;
                  return {
                     ...state
                  }
        case 'SET_TYPE_OF_CARD':
             if(action.card_type === 'IS_FOLLOWERS'){
                state.follow =state.followers
             }else if(action.card_type === 'IS_REPO'){

                state.follow=state.repo;
             }
           
                
           

             state.is_followers_or_following_or_repo=action.card_type;
            return {
                ...state
            }
        default:
         return {
            ...state
         }
    }
}
export default reducer;