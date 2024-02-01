import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
class Carousel extends Component {

    constructor() {
        super();
        this.state = {
            x: 0
        };
    }
    
    right() {
        this.setState({
            x: this.state.x >= 2 ? 0 : this.state.x + 1
        });
    }
    
    left() {
        this.setState({
            x: this.state.x <= 0 ? 2 : this.state.x - 1
        });
    }
    
    

    render(){
        return(
            <div className="rect">
                <div className="Larrow  symbol" onClick={() => this.left()}><ArrowBackIosIcon/></div>
                <div id="head">{images[this.state.x].title}</div>
                <img src={images[this.state.x].img} alt="" />
                <div id="text">{images[this.state.x].subtitle}</div>
                <div className="Rarrow  symbol" onClick={() => this.right()}><ArrowForwardIosIcon/></div>
            </div>
        )
    }
}

export default Carousel;