import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./Header/Header";
import Search from "./Search";
import Cards from "./Follower_repo_number_card/Cards/Cards";
import User from "./User_details/User";
import Display_FOllowers_And_Repo from "./User_details/Display_Followers_and_repo/Display_FOllowers_And_Repo";
import Chart from "./Charts/Chart";
import {useStateValue} from './StateProvider/StateProvider'
import {CircularProgress} from '@material-ui/core'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import Login from "./Login/Login";
import auth from './Firebase/firebase'
import Error_page from "./Error_page/Error_page";
function App() {
  const [loginUser,setLoginUser] = useState(null)
  const [{seraching}]=useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authuser => {
     
         if(authuser){
          setLoginUser(authuser);
         }else{
           setLoginUser(null)
         }
    });
   
  return unsubscribe;
  }, [])
  return (
    <div className="app">
      <Router>

     <Switch>
       <Route path = '/login'>
   <Login/>
       </Route>
       <Route path = '/' exact>
        {
          loginUser ? (
            <>
            <Header loginUser={loginUser}></Header>
            <div className="app_body">
            <Search></Search>
           { seraching &&  seraching===true ? 
           (
           <div className = "app_circularProgressbar">
             <CircularProgress  
             className="circularProgressbar"
             
             />
           </div>
           ) 
           :(
             <>
            <Cards />
            <div className="git_hub_user_profile_data">
              <User />
              <Display_FOllowers_And_Repo />
            </div>
            <Chart />
            </>
            )}
          </div>
          </>
          )
          :(
            <>
          <Login/>
          </>
          )
        }
       </Route>
       <Route path="*">
<Error_page/>
       </Route>
       </Switch>
      </Router>
      </div>
  );
}

export default App;
