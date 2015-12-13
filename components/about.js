import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import Avatar from 'material-ui/lib/avatar';

export default class AboutComponent extends React.Component {
  render() {
    return (
      <Card className='card about'>
        <h3>That's Me !!!</h3>
        <CardText>
        <Avatar src="/images/me.png" size={300} />
        <br />
        Can you see me in Steve's iPad?
        </CardText>
      </Card>
    );
  }
}
