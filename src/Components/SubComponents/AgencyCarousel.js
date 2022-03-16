import React from "react";
import Slider from "react-slick";
import "./index.css";

class AgencyCarousel extends React.Component {
    constructor(props){
        super(props);
        console.log("props :", props);
    }
  render() {
    var settings = {
        dots: true,
        centerMode: true,
        centerPadding: "60px",
        className: "center",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
    };
    return (
      <div className="container">
        <Slider {...settings}>
            {/* <div>
                {
                    this.props.map((item, i)=>{
                        <img src={item}  alt={`${item,i} error loading..`}/>
                    })
                }
            </div> */}
          <div>
            <img src={this.props.logo} alt="error"/>
          </div>
          <div>
            <img src={this.props.logo} alt="error"/>
          </div>
          <div>
            <img src={this.props.logo} alt="error"/>
          </div>
          <div>
            <img src={this.props.logo} alt="error"/>
          </div>
          <div>
            <img src={this.props.logo} alt="error"/>
          </div>
          <div>
            <img src={this.props.logo} alt="error"/>
          </div>
        </Slider>
      </div>
    );
  }
}


export default AgencyCarousel;