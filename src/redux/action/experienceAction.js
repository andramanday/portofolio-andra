import serverCall from '../../modules/apiCall'

export const getExperience=()=>dispatch=>{
  dispatch({
    type:GET_ALL_EXPERIENCES_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/experiences`
  })
  .then(res=>{
    dispatch({
      type: GET_ALL_EXPERIENCES_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_ALL_EXPERIENCES_FAIL,
      payload: {error}
    })
    return error
  })
}

export const getExperiencebyID=(id)=>dispatch=>{
  dispatch({
    type:GET_EXPERIENCE_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/experience/${id}`
  })
  .then(res=>{
    dispatch({
      type: GET_EXPERIENCE_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_EXPERIENCE_FAIL,
      payload: {error}
    })
    return error
  })
}

export const GET_ALL_EXPERIENCES_BEGIN='GET_ALL_EXPERIENCES_BEGIN'
export const GET_ALL_EXPERIENCES_SUCCESS='GET_ALL_EXPERIENCES_SUCCESS'
export const GET_ALL_EXPERIENCES_FAIL='GET_ALL_EXPERIENCES_FAIL'

export const GET_EXPERIENCE_BEGIN='GET_EXPERIENCE_BEGIN'
export const GET_EXPERIENCE_SUCCESS='GET_EXPERIENCE_SUCCESS'
export const GET_EXPERIENCE_FAIL='GET_EXPERIENCE_FAIL'