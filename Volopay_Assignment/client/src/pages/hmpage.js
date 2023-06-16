import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./hmpage.css";
import { getAllDatas } from "../actions/dataActions";
import Dataa from "../components/Dataa";

export default function HmPage() {
  const dispatch = useDispatch();
  const datasstate = useSelector((state) => state.getAllDatasReducer);

  const { datas, error, loading } = datasstate;

  useEffect(() => {
    dispatch(getAllDatas());
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Somthing is wrong</h1>
        ) : (
          datas.map((data) => {
            return (
              <div className="place">
                <div>
                  <Dataa data={data} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
