export const getAllDatasReducer = (state = { datas: [] }, action) => {
    switch (action.type) {
      case "GET_Datas_REQUEST":
        return {
          loading: true,
          ...state,
        };
  
      case "GET_Datas_SUCCESS":
        return {
          loading: false, // whether it is success or failed the request is sent. it's meaning here
          items: action.payload,
        };
      case "GET_Datas_FAILED":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  