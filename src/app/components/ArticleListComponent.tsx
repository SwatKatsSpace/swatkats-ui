import React, { SFC, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

export const ArticleListComponent: SFC<{}> = () => {
  return (
    <Fragment>
      {[1, 2, 3, 4, 5, 6].map(e => (
        <Fragment>
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia
                style={styles.media}
                image="https://www.artistsnetwork.com/wp-content/uploads/importedmedia/Drawing-People-Head-proportions-300x177.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <br />
        </Fragment>
      ))}
    </Fragment>
  );
};