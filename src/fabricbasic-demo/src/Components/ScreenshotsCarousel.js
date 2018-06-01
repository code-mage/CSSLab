import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import Carousel from './Carousel';
import { Image } from 'office-ui-fabric-react/lib/Image';

import dsp1 from './../Images/wp1.jpg'
import dsp2 from './../Images/wp2.jpg'
import dsp3 from './../Images/wp3.jpg'

import './ScreenshotsCarousel.css';

class ScreenshotsCarousel extends Component {

    render() {
        var itemScreenshots = [];
        var carousel = null;

        
        itemScreenshots.push({ imageUrl: dsp1});
        itemScreenshots.push({ imageUrl: dsp2});
        itemScreenshots.push({ imageUrl: dsp3});

        carousel = <div className="item-carousel">
                    <Carousel renderItem={(itemScreenshot) => { return this._renderScreenshot(itemScreenshot.imageUrl) }}
                        items={itemScreenshots}
                        numberOfItemsToDisplay={1}
                        showIndicators={true}
                        showNavigators={false}
                        noShadow={true} />
                </div>

        return carousel;

    }

    _renderScreenshot = (screenshotUrl) => {
        var screenshot = <div className="item-screenshot" >
            <Image
            height={600}
            width={1160}
                src={screenshotUrl} />
        </div>;
        return screenshot;
    }

}

export default ScreenshotsCarousel;