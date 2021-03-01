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
        .then((response) => response.json())
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
const Home = () => (
  <div>
    <button type="button" onClick={fbLogin}>FB login</button>
    <a href="http://localhost:5000/api/auth/google">G login</a>
  </div>
);

export default Home;
