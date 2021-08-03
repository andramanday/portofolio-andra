import {
  GET_ALL_PROJECTS_BEGIN,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_FAIL,
  GET_PROJECT_BEGIN,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
} from '../action/projectAction'

const initialState = {
  projects: null,
  project: null,
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload.data.RESULT
      }
    case GET_ALL_PROJECTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.RESULT
      }
    case GET_PROJECT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        project: action.payload.data.project
      }
    case GET_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}
