import "./styles.css";
import Hexagon from "react-hexagon";
import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import ReactWordcloud from "react-wordcloud";
import tasteWords from "./tasteWords";
import smellWords from "./smellWords";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import { Scrollbars } from "react-custom-scrollbars";
import { Text, FlatList } from "react-native";
import { Avatar, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import { PlayCircleFilledWhite } from "@material-ui/icons";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
  }
}));

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "red"
  },
  paper: {
    padding: theme.spacing(5),
    backgroundColor: "#EAEBFF",
    width: "60%",
    height: "10%",
    right: "15%"
  },
  card: {
    width: "70%",
    height: "15%",
    padding: theme.spacing(3)
  },
  wordcloud: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 300
  }
}));

export default function App() {
  const [reviews, setReviews] = useState([
    {
      title: "Luisa",
      date: "March 16 2021",
      rating: 5,
      body:
        "Sand + Jasmine scents dint complement each other and the Jasmine was really Pungent and over shadowed Sand ",
      key: "1"
    },
    {
      title: "Steven",
      date: "June 20 2021",
      rating: 3,
      body: "I really liked the jasmine scent with a medium tone of sand",
      key: "2"
    },
    {
      title: "Maleesa",
      date: "April 30 2021",
      rating: 5,
      body:
        "The Blue lagoon perfume is amazing. It smells amazing and feels like i am on a vacation. would 100% recommend this",
      key: "3"
    },
    {
      title: "Ron",
      date: "February 12 2021",
      rating: 2,
      body:
        "Sand + Jasmine scents dint complement each other and the Jasmine was really Pungent and over shadowed Sand ",
      key: "4"
    },
    {
      title: "Robert",
      date: "May 2 2021",
      rating: 4,
      body: "overall a really good product",
      key: "5"
    },
    {
      title: "Robert",
      date: "May 2 2021",
      rating: 4,
      body: "overall a really good product",
      key: "5"
    },
    {
      title: "Robert",
      date: "May 2 2021",
      rating: 4,
      body: "overall a really good product",
      key: "5"
    }
  ]);
  const classes = useStyles();
  const [value, setValue] = React.useState(4);
  const size = [300, 200];

  return (
    <div className="Root">
      <Grid container style={{ backgroundColor: "#EAEBFF" }}>
        <Grid item xs={12} style={{ textAlign: "center", color: "#303030" }}>
          <Typography variant="h4" component="h4">
            Reviews
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ backgroundColor: "#EAEBFF" }}>
          <Box
            style={{
              position: "absolute",
              left: "15%",
              right: "52%",
              top: "10%",
              bottom: "10%",
              backgroundColor: "#EAEBFF"
            }}
          >
            <Button variant="contained" className="Font-style">
              REVIEWS
            </Button>
            <Scrollbars
              style={{
                backgroundColor: "#F7F8FA",
                borderRadius: 10
              }}
            >
              <FlatList
                data={reviews}
                renderItem={({ item }) => (
                  <Container className="Section">
                    <Card style={{ borderRadius: 10 }}>
                      <CardHeader
                        avatar={
                          <Avatar
                            aria-label="review"
                            className={classes.avatar}
                          ></Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <Rating
                              name="read-only"
                              value={item.rating}
                              readOnly
                            />
                          </IconButton>
                        }
                        title={item.title}
                        subheader={item.date}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {item.body}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Container>
                )}
              />
            </Scrollbars>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              position: "absolute",
              left: "52%",
              right: "15%",
              top: "10%",
              bottom: "10%",
              backgroundColor: "#EAEBFF"
            }}
          >
            <Box className="Myboxes">
              <Button variant="contained" className="Font-style">
                PROS & CONS
              </Button>
              <div
                style={{
                  backgroundColor: "white",
                  height: 150,
                  bottom: 12,
                  borderRadius: 10,
                  left: "50%"
                }}
              >
                <Grid container>
                  <Grid item xs={6} style={{ padding: "3%" }}>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          color="inherit"
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: 20
                          }}
                          className="likeDislikeButtons"
                        >
                          LIKES
                        </Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          color="inherit"
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: 20
                          }}
                          className="likeDislikeButtons"
                        >
                          DISLIKES
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: "5%" }}>
                      <Grid item xs={12}>
                        <Text style={{ fontSize: 12 }}>
                          73% of the reviewers had positive things to say about
                          coca-cola they describe it as..
                        </Text>
                      </Grid>
                    </Grid>
                    <Grid container style={{ marginTop: "5%" }}>
                      <Grid item xs={12}>
                        <Box sx={{ flexGrow: 1 }}>
                          <BorderLinearProgress
                            variant="determinate"
                            color="secondary"
                            value={80}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} style={{ padding: "3%" }}>
                    <Grid container>
                      <Grid item xs={4}>
                        <div style={{ width: 65 }}>
                          <Hexagon
                            flatTop
                            style={{
                              stroke: "#91CA82",
                              fill: "white",
                              strokeWidth: 50
                            }}
                          >
                            <text
                              x="43%"
                              y="50%"
                              text-anchor="middle"
                              style={{ fontSize: "450%" }}
                            >
                              Tasty
                            </text>
                          </Hexagon>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ width: 65 }}>
                          <Hexagon
                            flatTop
                            style={{
                              stroke: "#91CA82",
                              fill: "white",
                              strokeWidth: 50
                            }}
                          >
                            <text
                              x="43%"
                              y="50%"
                              text-anchor="middle"
                              style={{ fontSize: "450%" }}
                            >
                              Refreshing
                            </text>
                          </Hexagon>
                        </div>
                      </Grid>
                      <Grid item xs={4}>
                        <div style={{ width: 65 }}>
                          <Hexagon
                            flatTop
                            style={{
                              stroke: "#91CA82",
                              fill: "white",
                              strokeWidth: 50
                            }}
                          >
                            <text
                              x="43%"
                              y="50%"
                              text-anchor="middle"
                              style={{ fontSize: "450%" }}
                            >
                              Light
                            </text>
                          </Hexagon>
                        </div>
                      </Grid>
                      <Grid container>
                        <Grid item xs={4}>
                          <div style={{ width: 65 }}>
                            <Hexagon
                              flatTop
                              style={{
                                stroke: "#91CA82",
                                fill: "white",
                                strokeWidth: 50
                              }}
                            >
                              <text
                                x="43%"
                                y="50%"
                                text-anchor="middle"
                                style={{ fontSize: "450%" }}
                              >
                                Tasty
                              </text>
                            </Hexagon>
                          </div>
                        </Grid>
                        <Grid item xs={4}>
                          <div style={{ width: 65 }}>
                            <Hexagon
                              flatTop
                              style={{
                                stroke: "#91CA82",
                                fill: "white",
                                strokeWidth: 50
                              }}
                            >
                              <text
                                x="43%"
                                y="50%"
                                text-anchor="middle"
                                style={{ fontSize: "450%" }}
                              >
                                Refreshing
                              </text>
                            </Hexagon>
                          </div>
                        </Grid>
                        <Grid item xs={4}>
                          <div style={{ width: 65 }}>
                            <Hexagon
                              flatTop
                              style={{
                                stroke: "#91CA82",
                                fill: "white",
                                strokeWidth: 50
                              }}
                            >
                              <text
                                x="43%"
                                y="50%"
                                text-anchor="middle"
                                style={{ fontSize: "450%" }}
                              >
                                Light
                              </text>
                            </Hexagon>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Box>

            <Box className="Myboxes">
              <Button variant="contained" className="Font-style">
                TASTE WORDS
              </Button>
              <div
                style={{
                  backgroundColor: "white",
                  height: 150,
                  bottom: 12,
                  borderRadius: 10,
                  left: "50%"
                }}
              >
                <ReactWordcloud words={tasteWords} />
              </div>
            </Box>
            <Box className="Myboxes">
              <Button variant="contained" className="Font-style">
                SMELL WORDS
              </Button>
              <div
                style={{
                  backgroundColor: "white",
                  height: 150,
                  bottom: 12,
                  borderRadius: 10,
                  left: "50%"
                }}
              >
                <ReactWordcloud words={smellWords} />
              </div>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
