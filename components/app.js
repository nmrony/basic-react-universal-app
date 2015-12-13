
import React from 'react';
import { Link } from 'react-router';
const  AppBar = require('material-ui/lib/app-bar');
const FlatButton = require('material-ui/lib/flat-button');

export default class AppComponent extends React.Component {
  render() {
    const linkStyle = {
      border: 0,
      textDecoration: 'none',
      color: '#fff'
    };

    return (
      <div>
        <AppBar
          showMenuIconButton = {false}
          title={<Link to='/' style={linkStyle}>React Universal App</Link>}
          iconElementRight={<FlatButton label="About" containerElement={<Link to="/about" />} linkButton={true} />} />
        { this.props.children }
      </div>
    );
  }
}
