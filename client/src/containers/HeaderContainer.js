import {Header,Segment, Menu, Icon} from 'semantic-ui-react';
import {Link} from "react-router-dom";


const HeaderContainer = () => {
  

  return (

    <Menu icon='labeled'>
        <Link to="/">
          <Menu.Item name='home'>
          <Icon name='home' />
            Home
          </Menu.Item>
        </Link>
        <Link to="/user">
          <Menu.Item name='user'>
            <Icon name='user' />
            User
          </Menu.Item>
        </Link>
          <div id="custom-header-contain">
            <Header as='h1' textAlign='center'>Insert Board Game Recommender App Name Here</Header>
          </div>
    </Menu>
  )
}

export default HeaderContainer;