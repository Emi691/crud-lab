import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  filterReviews = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId}/>
        <Reviews deleteReview={this.props.deleteReview} reviews={this.filterReviews()} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: review => dispatch({type: 'ADD_REVIEW', review: review}),
    deleteReview:  reviewId => dispatch({type: 'DELETE_REVIEW', id: reviewId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
