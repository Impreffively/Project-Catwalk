/* eslint-disable camelcase */
import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import TotalSort from './TotalSort.jsx';
import WriteReview from './WriteReview.jsx';
import axios from 'axios';
import styled from 'styled-components';

const ReviewList_div = styled.div `
margin-left: 100px;
`;


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      display: [],
      reviewCount: 4
    };
    this.getReviews = this.getReviews.bind(this);
    this.handleMoreReview = this.handleMoreReview.bind(this);
  }

  getReviews(id) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews',
      params: {
        product_id: id
      }
    })
      .then((data) => {
        //console.log(data.data.results),
        this.setState({
          reviewList: data.data.results,
          display: data.data.results.slice(0, 2)
        });
        // console.log("new state", this.state.reviewList)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    // console.log(this.props)
    this.getReviews(25192);
  }

  handleMoreReview() {
    var count = this.state.reviewCount;
    var display = this.state.reviewList.slice(0, count);
    this.setState((state) => {
      return {
        display: display,
        reviewCount: state.reviewCount + 2
      };
    });
  }

  render() {
    var toRender = [];
    if (this.state.reviewList.length) {
      toRender = (
        <ReviewList_div>
          <TotalSort />
          {this.state.display.map((review, index) =>
            <ReviewTile
              key={index}
              review={review}
            />
          )}
          <h1>Buttons</h1>
          <div>
            <button onClick={this.handleMoreReview}>
              More Review
            </button>

            <button>
              Add a review +
            </button>
          </div>

          <WriteReview />

        </ReviewList_div>
      );
    } else {
      toRender = (
        <ReviewList_div>

          <TotalSort />
          {this.state.display.map((review, index) =>
            <ReviewTile
              key={index}
              review={review}
            />
          )}
          <h1>Buttons</h1>

          <WriteReview />

        </ReviewList_div>
      );
    }
    return toRender;
  }
}

export default ReviewList;