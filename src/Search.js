import "./Search.css";
import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import axios from "./axios/axios";
import { useStateValue } from "./StateProvider/StateProvider";
function Search() {
  const [, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [rateLimit, setratelimit] = useState(0);
  const [error, seterror] = useState(null);
  const searchGithubUser = (e) => {
    e.preventDefault();
    if (input) {
     
      serachUser(input);
      setInput('')
    }
  };

  const serachUser = (gitusername) => {
    dispatch({
      type: "SET_SERACHING",
      seraching: true,
    });
    axios
      .get(`/users/${gitusername}`)
      .then((data) => {
        dispatch({
          type: "SET_GITUSER",
          gituser: data.data,
        });
        axios
          .get(`/users/${gitusername}/repos`)
          .then((repos) => {
            dispatch({
              type: "SET_GITUSER_REPO",
              repos: repos?.data,
            });
          })
          .catch((err) => console.log(err));

        axios
          .get(`/users/${gitusername}/followers`)
          .then((followers) => {
            dispatch({
              type: "SET_GITUSER_FOOLLOWERS",
              followers: followers?.data,
            });
          })
          .catch((err) => console.log(err));
        dispatch({
          type: "SET_SERACHING",
          seraching: false,
        });

        UpdateRequest();
      })
      .catch((err) => {
        console.log(err.message);

        seterror("user not found please check userid");
        dispatch({
          type: "SET_SERACHING",
          seraching: false,
        });
      });
    
  };
  const UpdateRequest = () =>
    axios
      .get("/rate_limit")
      .then((limit) => {
        setratelimit(limit.data?.rate?.remaining);
      })
      .catch((err) => {
        console.log(err);
      });
  useEffect(() => {
    serachUser('wesbos');
    UpdateRequest();
  }, []);

  return (
      <>
    {error && <p style={{ color: "red" }}>{error}</p>}
    <div className="search">
     
      <form className="serach_input">
        <SearchIcon></SearchIcon>
        <input
          spellCheck={false}
          vlaue={input}
          placeholder="Enter Github User"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <Button type="submit" onClick={searchGithubUser}>
          Search
        </Button>
      </form>
      <h2>Request: {rateLimit} / 60</h2>
    </div>
    </>
  );
}

export default Search;
