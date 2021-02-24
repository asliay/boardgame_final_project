import {Header,Segment, Menu, Icon} from 'semantic-ui-react';
import {Link, Redirect} from "react-router-dom";
import logo from "../logo.PNG";


const HeaderContainer = ({loggedIn, user, setUser, setLoggedIn}) => {

  const logOut = () => {
      setLoggedIn(false)
      setUser(null)
  }
  
  let link;
    if(!loggedIn){
      link = 
      <>
        <Link to="/login">
          <Menu.Item name='sign in'>
            <Icon name='sign in' />
            Log In <br /> Sign Up!
          </Menu.Item>
        </Link>
      </>

  
    } else {
      link =
      <>
      <Link to="/user">
        <Menu.Item name='user'>
          <Icon name='user' />
          {user && user.firstName}
        </Menu.Item>
      </Link>
      <Link to="/" onClick={logOut}>
      <Menu.Item name="logout">
        <Icon name='log out' />
        Log out
      </Menu.Item>
      </Link>
    </>
  }

  return (

    <Menu stackable icon='labeled'>
        <Link to="/">
          <Menu.Item name='home'>
          <Icon name='home' />
            Home
          </Menu.Item>
        </Link>
        {link}
        {/* <Link to="/user">
          <Menu.Item name='user'>
            <Icon name='user' />
            User
          </Menu.Item>
        </Link> */}
          <div id="custom-header-contain">
            <img id="logo-img" src={logo} height="100%" alt="I'm Board logo"/>
          </div>
    </Menu>
  )
}

export default HeaderContainer;