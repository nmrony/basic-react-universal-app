
import React from 'react';
import { Link } from 'react-router';
import  AppBar from 'material-ui/lib/app-bar';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}
