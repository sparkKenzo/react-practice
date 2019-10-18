// 生成action creator
export const makeActionCreator = (type, ...argName) => 
  (...args) => {
    const action = {type}
    argName.forEach((arg, i) => {
      action[arg] = args[i]
    })
    return action
  }

// 生成reducer
export const createReducer = (initState, handlers) =>
  (state = initState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
// API调用中间件(结合redux-thunk)
export const callApiMiddleware = ({dispatch, getState}) => 
  next => action => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      payload = {}
    } = action
    if (!types) {
      next(action)
    } 
    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ){
      throw new Error('types必须为长度为3的字符串数组')
    }
    if (typeof callAPI !== 'function') {
      throw new Error('callAPI必须是个函数')
    }
    if (!shouldCallAPI(getState())) {
      return
    }
    const [requestType, successType, failureType] = types
    dispatch({
      ...payload,
      type: requestType
    })
    return callAPI().then(
      response => dispatch({
        ...payload,
        type: successType,
        response
      }),
      error => dispatch({
        ...payload,
        type: failureType,
        error
      })
    )
  }