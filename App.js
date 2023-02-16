import axios from "axios";
import FacebookLogin from "react-facebook-login";
import React, { useState, useEffect } from "react";

const App = () => {
  const [userData, setUserData] = useState();
  //const [likesData, setLikesData] = useState();

  const componentClicked = () => {
    console.log("Facebook button clicked");
  };

  const responseFacebook = (response) => {
    setUserData(response);
    console.log("userData: ", response);
    axios
      .post("http://localhost:3000/api/facebook", {
        accessToken: response.accessToken,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  // const getLikesData = (response) => {
  //   // setLikesData(response)
  //   // 
  //   axios
  //     .post("http://localhost:3000/api/likes", {
  //       accessToken: response.accessToken
  //     })
  //     .then((res) => {
  //       console.log("likesData: ", res.data);
  //     }).catch((err) => {
  //       console.log("error", err)
  //     });
  // };

  //console.log(likesData);

  return (
    <div>
      {/* {userData ? (
        <div> 
          <button onClick={getLikesData}>Likes DAta</button>
          <button>Post details</button>
          <button>Post details</button>
          <button>Post details</button>
        </div>
      ) : null} */}
      <h1>Login With Facebook</h1>
      <FacebookLogin
        appId="510971874509018"
        autoLoad={true}
        fields={
          "name,email, picture,last_name,first_name,gender,friends,birthday,likes,posts"
        }
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

export default App;
