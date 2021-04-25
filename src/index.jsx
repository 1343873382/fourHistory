import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function getToken() {
  const token = document.location.href.split("headimgurl=")[1];
  if (token && token.length) {
    localStorage.setItem("openid_token2", token);
    const openid = token.split("openid=")[1].split("&oauthstatus")[0];
    if (!openid) {
      localStorage.removeItem("openid_token2");
      window.location.href =
        "https://be-prod.redrock.team/magicloop/rushb?b=https://fe-prod.redrock.team/four-history&scope=oldphp";
    }
    localStorage.setItem("openid", openid);
  }
  if (!localStorage.getItem("openid_token2")) {
    window.location.href =
      "https://be-prod.redrock.team/magicloop/rushb?b=https://fe-prod.redrock.team/four-history&scope=oldphp";
  }
  let Openid_token2 = localStorage.getItem("openid_token2")
  let Token = decodeURIComponent(Openid_token2)
  let openid = Token.split("openid=")[1].split("&oauthstatus")[0]
  localStorage.setItem("openid", openid)
}
if(process.env.NODE_ENV === 'production'){
  getToken();
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
