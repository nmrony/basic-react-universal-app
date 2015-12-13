
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';

export default class IndexComponent extends React.Component {
  render() {
    return (
      <Card className="card">
        <CardTitle title="Welcome to App" subtitle="Come and embrace the awesomeness with React" />
        <CardText>
          <CardMedia>
            <img src="/images/react.svg" height="300" width="300"/>
          </CardMedia>
        </CardText>
      </Card>
    );
  }
}
