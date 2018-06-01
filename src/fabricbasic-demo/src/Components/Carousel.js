import jquery from 'jquery';

import React, { Component } from 'react';
import * as ReactDOM from "react-dom";

import './Carousel.css';

class Carousel extends Component {
    ARROWLEFT_KEY_CODE = 37;
    ARROWRIGHT_KEY_CODE = 39;
    static TILE_SHADOW_WIDTH = 5;

    indicatorCount = 0;
    itemWidth = 0;

    firstCarouselElement = null;
    carouselWrapper = null;
    carousel = null;

    


    constructor(props) {
        super(props);

        var itemsRendered = 0;
        if (this.props.delayRenderingOfItemsNotInViewport) {
            itemsRendered = this.props.numberOfItemsToDisplay;
        } else {
            itemsRendered = this.props.items.length;
        }
        this.state = {
            viewPortStartIndex: 0,
            numberOfItemsRendered: itemsRendered,
            selectedIndicatorIndex: 0,
            focussedIndicatorIndex: 0
        };
    }

    render() {

    var carouselItems = [];

    for (var index = 0; index < this.state.numberOfItemsRendered; index++) {
    var carouselItemElement = null;
    var carouselItem = this.props.items[index];
    if (this.props.renderItem) {
        carouselItemElement = this.props.renderItem(carouselItem);
    }
    if (index === 0) {
        carouselItems.push( < div className = "carousel-item"
            role = "option"
            key = { "carouselItem" + index.toString() }
            ref = {
                (carouselItem) => this.firstCarouselElement = carouselItem } > { carouselItemElement } 
                </div>);
        }
        else {
            carouselItems.push( < div className = "carousel-item"
                role = "option"
                key = { "carouselItem" + index.toString() } > { carouselItemElement } </div>);
            }
        }

        var carouselIndicators = [];
        var showIndicators = this.props.showIndicators ? this.props.showIndicators : false;
        if (showIndicators) {
            var temp = Math.floor((this.props.items.length) / this.props.numberOfItemsToDisplay);
            this.indicatorCount = (this.props.items.length % this.props.numberOfItemsToDisplay === 0) ? temp : temp + 1;
            if (this.indicatorCount > 1) {
                for (var i = 0; i < this.indicatorCount; i++) {
                    //try using button
                    carouselIndicators.push( <span role = "option"
                        tabIndex = { i === this.state.focussedIndicatorIndex ? 0 : -1 }
                        aria-label = { "Carousel indicator." }
                        key = { "carouselIndicator" + i.toString() }
                        className = { i === this.state.selectedIndicatorIndex ? "indicator active" : "indicator" }
                        onClick = { this._selectIndicator.bind(this, i) }
                        onKeyPress = { this._selectIndicator.bind(this, i) } />);
                    }
                }
            }


            return <div className = "carousel-control" > <div className = "carousel-indicators"
            role = "listbox" > { carouselIndicators } </div> <div className = "carousel-wrapper"
            ref = {
                (carouselWrapper) => this.carouselWrapper = carouselWrapper }
            tabIndex = { 0 } >
                <div className = "carousel"
            role = "listbox"
            ref = {
                (carousel) => this.carousel = carousel }
            aria-orientation = "horizontal" > { carouselItems } </div> </div> </div>;

        }

        componentDidMount() {
            this._setCarouselWidthAndHeight();
        }

        _setCarouselWidthAndHeight() {
            var $;
            $ = require('jquery');
            var $firstItem = this.firstCarouselElement;
            var carouselItem = $(ReactDOM.findDOMNode($firstItem));
            var itemWidth = carouselItem.outerWidth(true);
            var itemWidthWithoutMargin = carouselItem.outerWidth();

            this.itemWidth = itemWidth;

            var totalItemCount = this.props.items.length;
            var totalwidth = totalItemCount * itemWidth;
            
            $(ReactDOM.findDOMNode(this.carousel)).width(totalwidth);

            var visibleItemCount = this.props.numberOfItemsToDisplay;
            // Using minimum of total items and visible items to find view port width
            var visibleWidth = visibleItemCount < totalItemCount ? visibleItemCount * itemWidth : totalItemCount * itemWidth;
            // Each item has some padding to its right. And we need to subtract the padding for the last item 
            // so that when the sliding happens, that area doesnt show any content.
            var marginWidth = itemWidth - itemWidthWithoutMargin;

            // Adding the shadow width so that the shadow is not cut off for the last item on the right
            if (this.props.noShadow) {
                $(ReactDOM.findDOMNode(this.carouselWrapper)).width(visibleWidth - marginWidth);
            } else {
                $(ReactDOM.findDOMNode(this.carouselWrapper)).width(visibleWidth - marginWidth + Carousel.TILE_SHADOW_WIDTH);
            }
        }

        _selectIndicator(index, event) {
            if (!event.key || (event.key === 'Enter' || event.key === ' ')) {
                var newViewPortStartIndex = index * this.props.numberOfItemsToDisplay;
                var totalItems = this.props.items.length;
                if (newViewPortStartIndex < totalItems) {
                    if (newViewPortStartIndex + this.props.numberOfItemsToDisplay > totalItems) {
                        newViewPortStartIndex = totalItems - this.props.numberOfItemsToDisplay;
                    }

                    this.setState({
                        viewPortStartIndex: newViewPortStartIndex,
                        numberOfItemsRendered: this.state.numberOfItemsRendered,
                        selectedIndicatorIndex: index,
                        focussedIndicatorIndex: index
                    });
                }
            }
            this._scroll(newViewPortStartIndex)
        }

        _scroll(startIndex) {
            var $;
            $ = require('jquery');
            var leftPosition = this._getLeftPosition(startIndex, this.itemWidth);
            $(ReactDOM.findDOMNode(this.carousel)).animate({ left: leftPosition }, 300);
    
        }

        _getLeftPosition(viewportStartIndex, itemWidth) {
            return -(viewportStartIndex) * itemWidth;
        }

    }

    export default Carousel;