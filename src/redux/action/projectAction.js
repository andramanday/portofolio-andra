import serverCall from '../../modules/apiCall'

export const getProject=()=>dispatch=>{
  dispatch({
    type:GET_ALL_PROJECTS_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/projects`
  })
  .then(res=>{
    dispatch({
      type: GET_ALL_PROJECTS_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_ALL_PROJECTS_FAIL,
      payload: {error}
    })
    return error
  })
}

export const getProjectbyID=(id)=>dispatch=>{
  dispatch({
    type:GET_PROJECT_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/project/${id}`
  })
  .then(res=>{
    dispatch({
      type: GET_PROJECT_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_PROJECT_FAIL,
      payload: {error}
    })
    return error
  })
}

export const GET_ALL_PROJECTS_BEGIN='GET_ALL_PROJECTS_BEGIN'
export const GET_ALL_PROJECTS_SUCCESS='GET_ALL_PROJECTS_SUCCESS'
export const GET_ALL_PROJECTS_FAIL='GET_ALL_PROJECTS_FAIL'

export const GET_PROJECT_BEGIN='GET_PROJECT_BEGIN'
export const GET_PROJECT_SUCCESS='GET_PROJECT_SUCCESS'
export const GET_PROJECT_FAIL='GET_PROJECT_FAIL'