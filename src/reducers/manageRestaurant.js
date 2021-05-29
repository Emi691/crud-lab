import cuid from 'cuid';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer

function manageRestaurants(state = [], action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            let restaurant = {
                text: action.restaurant,
                id: cuid()
            }
            return [...state, restaurant]
        case "DELETE_RESTAURANT":
            return state.filter(restaurant => restaurant.id !== action.id)
        default:
            return state        
    }
}

function manageReviews(state = [], action) {
    switch(action.type) {
        case "ADD_REVIEW":
            let review = {
                ...action.review,
                id: cuid()
            }
            return [...state, review]
        case "DELETE_REVIEW":
            return state.filter(review => review.id !== action.id)
        case "DELETE_RESTAURANT":
            return state.filter(review => review.restaurantId !== action.id)
        default:
            return state
    }
}
