import React from "react";

const fbLogin = () => {
  const { FB } = window;

  FB.login((result) => {
    if (result.authResponse) {
      const fbData = {
        access_token: result.authResponse.accessToken,
      };

      fetch("http://localhost:5000/api/auth/facebook/token", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fbData),
      })
        .then((response) => {
          console.log(response.headers.get("x-auth-token"));
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, {
    scope: "email",
  });
};

const gLogin = () => {
  const { auth2 } = window;
  // const isSignedIn = auth2.isSignedIn.get();

  auth2.signIn()
    .then((result) => {
      if (result.getAuthResponse().id_token) {
        const fbData = {
          access_token: result.getAuthResponse().id_token,
        };

        fetch("http://localhost:5000/api/auth/google/token", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fbData),
        })
          .then((response) => {
            console.log(response.headers.get("x-auth-token"));
            return response.json();
          })
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    })
    .catch((err) => console.log(err));
};
const Home = () => (
  <div>
    <button type="button" onClick={fbLogin}>FB login</button>
    {/* <a href="http://localhost:5000/api/auth/google">G login</a> */}
    <button type="button" onClick={gLogin}>G login</button>
  </div>
);

export default Home;
