import { useEffect, useState } from "react";
import  './home.component.css'
import ChatApp from "./Chatapp";
import Contacts from "./Contacts";
const Home = () =>  {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("authenticated");
    if (isLoggedIn) {
     setauthenticated(isLoggedIn);
    }
  }, []);


  if (authenticated){
    return(
    <div className="home-page">
    <div className="chat-cont">
      <div className="side"><Contacts></Contacts></div>
      <div className="chat"><ChatApp></ChatApp></div>
    </div>
    </div> 
      )
  }
}
export default Home