import React, { Component } from 'react'

const fbLogin = () => {
  var FB = window.FB;
  FB.login(result => {
    debugger
            if (result.authResponse) {
              const data = { access_token: result.authResponse.accessToken };

        fetch('http://localhost:5000/api/auth/facebook/token', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    }, {scope: 'email'})
}
const Home = () => (
  <div>
    <a href="#" onClick={fbLogin}>FB login</a>
    <a href="http://localhost:5000/api/auth/google">G login</a>
  </div>
)

export default Home