export default (state, action) => {
    switch(action.type) {
      case "DELETE_LIST":
        return {
            ...state,
            list:state.list.filter(li => li.id !== action.payload)
        }
      case "ADD_LIST":
        return {
          ...state,
          list:[action.payload, ...state.list]
        }
      default:
        return state;
    }
  }

