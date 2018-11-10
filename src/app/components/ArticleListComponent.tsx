import React, { SFC, Fragment } from "react";
import {
  Grid,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 100
  }
};

export const ArticleListComponent: SFC<{}> = () => {
  return (
    <Fragment>
      <Grid container spacing={24}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e, i) => (
          <Fragment>
            <Grid item xs={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    style={styles.media}
                    image="https://www.artistsnetwork.com/wp-content/uploads/importedmedia/Drawing-People-Head-proportions-300x177.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Article-{i + 1}
                    </Typography>
                    <Typography component="p">
                      Here we will be displaying few detail highlights for
                      article {i + 1}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Link to={`/article`}>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Fragment>
  );
};
