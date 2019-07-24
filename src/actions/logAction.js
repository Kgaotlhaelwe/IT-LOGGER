import { GET_LOGS, SET_LOADING, LOGS_ERROR,ADD_LOGS , DELETE_LOG , SET_CURRENT , CLEAR_CURRENT , UPDATE_LOGS, CLEAR_LOGS , SEARCH_LOGS } from "./types";

// export const getLogs = ()=>{
//     return async (dispatch)=>{
//         setLoading() ;

//         const res = await fetch('/logs') ;
//         const data = await res.json() ;
//         dispatch({
//             type:GET_LOGS ,
//             payload:data 
//         })
//     }
// }


// export const setLoading  = ()=>{
//     return {
//         type:SET_LOADING
//     }
// }



export const getLogs = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/logs');
      const data = await res.json();
  
      dispatch({
        type: GET_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };


  export const deleteLog = id => async dispatch => {
    try {
      setLoading();
  
      await fetch(`/logs/${id}`, {
        method: 'DELETE'
      });
  
      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };



  export const addLog = log => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/logs', {
        method: 'POST',
        body: JSON.stringify(log),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };
  
   //set current 
// Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};


// clear current
export const clearCurrent = log =>{
  return {
    type:CLEAR_CURRENT ,
   
  }
}

// update log

// Update log on server
export const updateLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};



// Search server logs
export const searchLogs = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}