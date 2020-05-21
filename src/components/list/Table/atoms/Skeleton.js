import React from "react";
import Grid from "../../Grid";
import Container from "../../Container";

const height = "30px";
const rowHeight = "41px";

const styles = {
  filter: {
    width: "118px",
    height
  },
  columns: {
    width: "52px",
    height
  },
  head: {
    height: rowHeight
  },
  limit: {
    width: "59px",
    height
  },
  pagination: {
    width: "200px",
    height
  },
  margin5: {
    marginTop: "2px"
  }
};

const Skeleton = () => (
  <div className="uk-skeleton">
    <Grid>
      <Container width="1-2">
        <div className="uk-element" style={styles.filter} />
      </Container>
      <Container width="1-2 uk-flex uk-flex-right">
        <div className="uk-element" style={styles.columns} />
      </Container>
      <Container width="1-1" marginSmallTop>
        <div className="uk-element" style={styles.head} />
      </Container>
      <div className="uk-width-1-1" style={styles.margin5}>
        <div className="uk-element" style={styles.head} />
      </div>
      <div className="uk-width-1-1" style={styles.margin5}>
        <div className="uk-element" style={styles.head} />
      </div>
      <div className="uk-width-1-1" style={styles.margin5}>
        <div className="uk-element" style={styles.head} />
      </div>
      <div className="uk-width-1-1" style={styles.margin5}>
        <div className="uk-element" style={styles.head} />
      </div>
      <div className="uk-width-1-1" style={styles.margin5}>
        <div className="uk-element" style={styles.head} />
      </div>
      <div className="uk-width-1-1" style={styles.margin5}>
        <div className="uk-element" style={styles.head} />
      </div>
      <div className="uk-width-1-1" style={styles.margin5}>
        <div className="uk-element" style={styles.head} />
      </div>
      <div className="uk-width-1-1" style={styles.margin5}>
        <div className="uk-element" style={styles.head} />
      </div>
      <div className="uk-width-1-1" style={styles.margin5}>
        <div className="uk-element" style={styles.head} />
      </div>
      <Container width="1-2" marginSmallTop>
        <div className="uk-element" style={styles.limit} />
      </Container>
      <Container width="1-2 uk-flex uk-flex-right" marginSmallTop>
        <div className="uk-element" style={styles.pagination} />
      </Container>
    </Grid>
  </div>
);

export default Skeleton;
