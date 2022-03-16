import React from "react";
import Slider from "react-slick";
import "./index.css";
import {Card,CardContent ,CardMedia ,Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const LMCarousel = ({data, component}) => {
  console.log("data", data, "component", component);
  var settings = {
    dots: true,
    centerMode: true,
    centerPadding: "30px",
    className: "centerLM",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const useStyles = makeStyles(theme => ({
    root: {
      position: "relative"
    },
    font: {
      position: "absolute",
      right: "2%",
      top: "38%",
      fontWeight: "bold",
      padding: "6px",
      textAlign: "center",
      color: "white",
      borderRadius: "4px",
      width: '113px',
      backgroundColor: "#3AB44E",
    },
    minilogo: {
      position: "absolute",
      left: "2%",
      top: "2%",
      padding: "2px",
      textAlign: "center",
      color: "white",
      borderRadius: "4px",
      width: '70px',
      backgroundColor: "#d3d3d35e",
    }
  }));
  
  const classes = useStyles();
  
  return (
    <div className="container">
        <Slider {...settings}>
          {data.map((item, i)=>(
            <Card sx={{ maxWidth: 345 }} className={classes.root}>
              <CardMedia
                component="img"
                height="140"
                image={item.logo}
                alt= {item.title}
                className="blackOpcaity"
              />
                <Typography
                  gutterBottom
                  className={classes.minilogo}
                  id="minilogo"
                >
                  {/* <img src='' alt='' /> */}
                  20
                </Typography>
               <Typography
                  gutterBottom
                  className={classes.font}
                  id="price"
                >
                  Pkr 1.2 Cr
                </Typography>
              <CardContent>
                <Typography variant="h6">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.location}
                  </Typography>
                  {(component === "freshListing") &&
                    <div className="utilities-listing">
                      <span style={{marginRight: "20px"}}>
                        <img src='' alt='' />
                        <Typography>2 beds</Typography>
                      </span>
                      <span>
                        <img src='' alt='' />
                        <Typography>2 baths</Typography>
                      </span>
                    </div>
                  }
              </CardContent>
            </Card>
          ))}
        </Slider>
      </div>
  )
}

export default LMCarousel;