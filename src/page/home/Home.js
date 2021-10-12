import React from "react";
import { analytics } from "../../assets/image";
import {
  handleSetDataCalon,
  handleSetFilterDataCalon,
  handleSetUser,
} from "../../context/reducers";
import { ContextReact } from "../../context/store";
import { getCountByCalon, getUser } from "./../../api/read";
import Charts from "./Chart";
function Home() {
  const [filter, setFilter] = React.useState("");
  const context = React.useContext(ContextReact);
  const { dispatch, data } = context;

  const { calon1, calon2, calon3, calon4, tidakSah } = data.dataCalon;

  const Card = [
    {
      label: "Calon 1",
      background: "#D21414",
      total: calon1.total,
      name: "calon1",
    },
    {
      label: "Calon 2",
      background: "#6FD91C",
      total: calon2.total,
      name: "calon2",
    },
    {
      label: "Calon 3",
      background: "#1C2FD9",
      total: calon3.total,
      name: "calon3",
    },
    {
      label: "Calon 4",
      background: "#D9D11C",
      total: calon4.total,
      name: "calon4",
    },
    {
      label: "Tidak Sah",
      background: "#080808",
      total: tidakSah.total,
      name: "tidakSah",
    },
  ];

  let valueFilter = "";

  React.useEffect(() => {
    getCountByCalon({
      then: (val) => {
        const getAcuan = sessionStorage.getItem("acuanFilter");

        if (getAcuan) {
          const filterData = Object.values(val[getAcuan].user);
          dispatch(handleSetFilterDataCalon(filterData));
        }
        dispatch(handleSetDataCalon(val));
      },
    });
    getUser({
      then: (val) => {
        dispatch(handleSetUser(val));
      },
    });
  }, []);
  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
    valueFilter = value;
    sessionStorage.setItem("acuanFilter", value);

    const newData = context.data.dataCalon[value];
    dispatch(handleSetFilterDataCalon(Object.values(newData.user)));
  };

  const { filterDataCalon, listUser } = context.data;
  const dataIsTrue = () => {
    if (Array.isArray(filterDataCalon)) {
      if (filterDataCalon.filter((data) => data.suara > 0).length > 0) {
        if (filter) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  return (
    <div className="container bg-aqua">
      <h1 className="m-4 text-center text-uppercase">Grafik Total Suara</h1>
      {/* <img src={analytics} className="rounded mx-auto d-block " alt="..." /> */}
      <div className="container w-50 text-center m-auto">
        <Charts />
      </div>
      <br />
      <div className="container">
        <div className="row">
          {Card.map((data, index) => {
            return (
              <div key={index} className="col">
                <div
                  className="card h-100"
                  style={{ backgroundColor: data.background, color: "white" }}
                >
                  <div className="card-body text-center">
                    <h3 className="card-title">{data.label}</h3>
                    <h4 className="card-subtitle mb-2">{data.total}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h4 className="m-4 text-center text-uppercase">
        data table suara calon per tps
      </h4>
      <select
        onChange={(e) => handleChange(e)}
        className="form-select w-25 text-center m-auto"
        aria-label="Default select example"
        value={filter}
      >
        <option selected>Nama Calon</option>
        {Card.map((data, index) => {
          return <option value={data.name}>{data.label}</option>;
        })}
      </select>
      <br />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama TPS</th>
            <th scope="col">Suara</th>
            <th scope="col">Total Kehadiran</th>
          </tr>
        </thead>
        <tbody>
          {dataIsTrue() ? (
            filterDataCalon
              .filter((data) => data.suara > 0)
              .map((data, index) => {
                if (data.suara && data.suara > 0) {
                  const { namaTps } = data;
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{data.namaTps}</td>
                      <td>{data.suara}</td>
                      <td>{listUser[namaTps].kehadiranPemilih}</td>
                    </tr>
                  );
                }
              })
          ) : (
            <tr>
              <th scope="row" className="text-center" colSpan="4">
                data kosong
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
