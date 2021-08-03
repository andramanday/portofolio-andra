import {
    GET_ALL_EXPERIENCES_BEGIN,
    GET_ALL_EXPERIENCES_SUCCESS,
    GET_ALL_EXPERIENCES_FAIL,
    GET_EXPERIENCE_BEGIN,
    GET_EXPERIENCE_SUCCESS,
    GET_EXPERIENCE_FAIL,
  } from '../action/experienceAction'
  
  const initialState = {
    experiences: null,
    experience: null,
    loading: false,
    error: null,
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_EXPERIENCES_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        }
      case GET_ALL_EXPERIENCES_SUCCESS:
        return {
          ...state,
          loading: false,
          experiences: action.payload.data.RESULT
        }
      case GET_ALL_EXPERIENCES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload.error.response.data.RESULT
        }
      case GET_EXPERIENCE_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        }
      case GET_EXPERIENCE_SUCCESS:
        return {
          ...state,
          loading: false,
          experience: action.payload.data.experience
        }
      case GET_EXPERIENCE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload.error.response.data
        }
      default:
        return state
    }
  }