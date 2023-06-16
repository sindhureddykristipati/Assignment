import axios from "axios";

export const getAllDatas = () => async (dispatch) => {
  // these request will be set So whenever these function is called these request will be sent to the reducer.now we need to called the asynchronous function. through the axios for API operations.
  dispatch({ type: "GET_DATAS_REQUEST" });

  try {
    const response = await axios.get("/api/datas/getalldatas");

    console.log(response);
    dispatch({ type: "GET_Datas_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_Datas_FAILED", payload: error });
  }
};
