import React, { useEffect } from "react";
import "./table.css";
import { completeddata } from "../data/completeddata";
import { pendingdata } from "../data/pendingdata";
import { useState } from "react";
import CloseAccount from "./close_account.js";

function Table() {
  const red = {
    display: "block",
    margin: "5px 5px 0px 0px",
    width: "10px",
    height: "10px",
    background: "red",
    borderRadius: "50%",
  };

  const green = {
    display: "block",
    margin: "5px 5px 0px 0px",
    width: "10px",
    height: "10px",
    background: "green",
    borderRadius: "50%",
  };

  const yellow = {
    display: "block",
    margin: "5px 5px 0px 0px",
    width: "10px",
    height: "10px",
    background: "#987704",
    borderRadius: "50%",
  };

  const css = {
    opacity: "0.3",
    zIndex: -1,
    filter: "blur(1px) grayscale(30%)",
    // backdropFilter: blur("10px")
  };

  const buttoncss = {
    width: "100%",
    // background: "#000",
    transition: "transform 0.2s ease-in-out",
    borderBottom: "2px solid #000",
  };

  const [accountclose, setAccountclose] = useState(false);
  const [extracss, setExtracss] = useState({}); //{display:"none"}
  const [pending, setPending] = useState(true);
  const [pendingbuttoncss, setPendingbuttoncss] = useState(buttoncss);
  const [completedbuttoncss, setCompletedbuttoncss] = useState({}); //{display:"none"}
  const [data, setData] = useState(pendingdata);
  const [use, setUse] = useState(true);

  const closeAccount = () => {
    if (accountclose) {
      setExtracss({});
      setAccountclose(false);
    } else {
      setExtracss(css);
      setAccountclose(true);
    }
  };

  useEffect(() => {}, [use]);

  const changetoPending = () => {
    setData(pendingdata);
    setPendingbuttoncss(buttoncss);
    setCompletedbuttoncss({});
    setPending(true);
    if (use) {
      setUse(false);
    } else {
      setUse(true);
    }
  };

  const changetoCompleted = () => {
    setData(completeddata);
    setPendingbuttoncss({});
    setCompletedbuttoncss(buttoncss);
    setPending(false);
    if (use) {
      setUse(false);
    } else {
      setUse(true);
    }
  };

  const handleinqueuedec = () => {
    let temp = data;
    temp.sort(function (a, b) {
      if (a.Inqueuefor < b.Inqueuefor) {
        return 1;
      }
      return -1;
    });
    setData(temp);
    if (use) {
      setUse(false);
    } else {
      setUse(true);
    }
  };

  const handleinqueueinc = () => {
    let temp = data;
    temp.sort(function (a, b) {
      if (a.Inqueuefor > b.Inqueuefor) {
        return 1;
      }
      return -1;
    });
    setData(temp);
    if (use) {
      setUse(false);
    } else {
      setUse(true);
    }
  };

  const handleriskleveldec = () => {
    let temp = data;
    temp.sort(function (a, b) {
      if (a.Risklevel === "High") {
        return -1;
      } else if (b.Risklevel === "High") {
        return 1;
      } else if (a.Risklevel === "Medium") {
        return -1;
      } else if (b.Risklevel === "Medium") {
        return 1;
      }
      return -1;
    });
    setData(temp);
    if (use) {
      setUse(false);
    } else {
      setUse(true);
    }
  };

  const handlerisklevelinc = () => {
    let temp = data;
    temp.sort(function (a, b) {
      if (a.Risklevel === "High") {
        return 1;
      } else if (b.Risklevel === "High") {
        return -1;
      } else if (a.Risklevel === "Medium") {
        return 1;
      } else if (b.Risklevel === "Medium") {
        return -1;
      }
      return 1;
    });
    setData(temp);
    if (use) {
      setUse(false);
    } else {
      setUse(true);
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if(e.target.value===""){
        setData(pending?pendingdata:completeddata);
        return;
      }
      let temp;
      temp = data.filter((item) => {
        console.log(Object.keys(item));
        for(let key of Object.keys(item)){
          if(item[key].toString().toLowerCase().includes(e.target.value.toLowerCase())){
            return item;
          }
        };
      });
      setData(temp);
    }
  };

  const handletriggerfilter = (e) => {
    let temp;
    if (pending) {
      temp = pendingdata.filter((item) => {
        return item.Triggerreason === e.target.innerText ? item : null;
      });
    } else {
      temp = completeddata.filter((item) => {
        return item.Activereason === e.target.innerText ? item : null;
      });
    }
    setData(temp);
  };

  const handlerisklevelfilter = (e) => {
    let temp;
    if (pending) {
      temp = pendingdata.filter((item) => {
        return item.Risklevel === e.target.innerText ? item : null;
      });
    } else {
      temp = completeddata.filter((item) => {
        return item.Risklevel === e.target.innerText ? item : null;
      });
    }
    setData(temp);
  };

  return (
    <>
      {accountclose && <CloseAccount closeAccount={closeAccount} />}
      <div className="container conatainer2" style={extracss}>
        <div className="container">
          <h1>Monitoring</h1>

          <nav className="navbar navbar-expand-lg navbar-light">
            {/* <div
            className="d-flex"
            style={{ display: "inline-block" }}
            id="navbarNav"
          > */}
            <div className="mr-auto p-2" style={{ float: "left" }}>
              <ul className="navbar-nav">
                <li className="nav-item active" style={pendingbuttoncss}>
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={changetoPending}
                  >
                    Pending <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active" style={completedbuttoncss}>
                  <a
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={changetoCompleted}
                  >
                    Completed <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-2" style={{ float: "right" }}>
              <button
                type="button"
                className="btn btn-danger"
                onClick={closeAccount}
              >
                Close account
              </button>
            </div>
            {/* </div> */}
          </nav>

          <hr className="mt-1" />

          <div className="d-flex my-4">
            <input
              onKeyDown={handleSearch}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "30%" }}
            ></input>
            <div className="dropdown" style={{ paddingRight: "20px" }}>
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#d3d3d3" }}
              >
                {pending === true ? "Trigger reason" : "Active reason"}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                {pending &&
                  Array.from(
                    [new Set(pendingdata.map((item) => item.Triggerreason))][0]
                  ).map((dat) => {
                    return (
                      <button
                        onClick={handletriggerfilter}
                        className="dropdown-item"
                        type="button"
                        key={dat}
                      >
                        {dat}
                      </button>
                    );
                  })}
                {!pending &&
                  Array.from(
                    [new Set(completeddata.map((item) => item.Activereason))][0]
                  ).map((dat) => {
                    return (
                      <button
                        onClick={handletriggerfilter}
                        className="dropdown-item"
                        type="button"
                        key={dat}
                      >
                        {dat}
                      </button>
                    );
                  })}
              </div>
            </div>

            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: "#d3d3d3" }}
              >
                Risk level
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                {pending &&
                  Array.from(
                    [new Set(pendingdata.map((item) => item.Risklevel))][0]
                  ).map((data) => {
                    return (
                      <button
                        onClick={handlerisklevelfilter}
                        className="dropdown-item"
                        type="button"
                        key={data}
                      >
                        {data}
                      </button>
                    );
                  })}
                {!pending &&
                  Array.from(
                    [new Set(completeddata.map((item) => item.Risklevel))][0]
                  ).map((data) => {
                    return (
                      <button
                        onClick={handlerisklevelfilter}
                        className="dropdown-item"
                        type="button"
                        key={data}
                      >
                        {data}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">User</div>
              <div className="col col-3 d-flex">
                <div>Risk level</div>
                <div>
                  <img
                    onClick={handlerisklevelinc}
                    style={{ cursor: "pointer" }}
                    width="16"
                    height="16"
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons.png"
                    alt="external-up-arrows-those-icons-lineal-those-icons"
                  />
                  <img
                    onClick={handleriskleveldec}
                    style={{ cursor: "pointer" }}
                    width="16"
                    height="16"
                    src="https://img.icons8.com/ios/50/expand-arrow--v1.png"
                    alt="expand-arrow--v1"
                  />
                </div>
              </div>
              <div className="col col-2">
                {pending === true ? "Trigger " : "Active "}reason
              </div>
              <div className="col col-4 d-flex">
                <div>{pending === true ? "In queue for" : "Time to close"}</div>
                <div>
                  <img
                    onClick={handleinqueueinc}
                    style={{ cursor: "pointer" }}
                    width="16"
                    height="16"
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/external-up-arrows-those-icons-lineal-those-icons.png"
                    alt="external-up-arrows-those-icons-lineal-those-icons"
                  />
                  <img
                    onClick={handleinqueuedec}
                    style={{ cursor: "pointer" }}
                    width="16"
                    height="16"
                    src="https://img.icons8.com/ios/50/expand-arrow--v1.png"
                    alt="expand-arrow--v1"
                  />
                </div>
              </div>
              <div className="col col-5">Date added on</div>
              <div className="col col-6">
                {pending === true ? "Previously reviewed" : "Action taken by"}
              </div>
            </li>
            {pending &&
              data.map((dat) => {
                return (
                  <li className="table-row" key={dat.Email}>
                    <div className="col col-1" data-label="User">
                      <div
                        className="d-flex"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div>{dat.Username}</div>
                        <div>
                          <a href="">
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/pulsar-line/48/external-link.png"
                              alt="external-link"
                            />
                          </a>
                        </div>
                      </div>
                      <p style={{ fontSize: "12px" }}>{dat.Email}</p>
                    </div>
                    <div className="col col-2" data-label="Risk level">
                      <div style={{ display: "flex" }}>
                        <span
                          className="dot"
                          style={
                            dat.Risklevel === "High"
                              ? red
                              : dat.Risklevel === "Low"
                              ? green
                              : yellow
                          }
                        ></span>
                        <span style={{ paddingLeft: "0px" }}>
                          {dat.Risklevel}
                        </span>
                      </div>
                    </div>
                    <div className="col col-3" data-label="Trigger reason">
                      {dat.Triggerreason}
                    </div>
                    <div className="col col-4" data-label="In queue for">
                      {dat.Inqueuefor} days
                    </div>
                    <div className="col col-5" data-label="Data added on">
                      {dat.Dateadded}
                    </div>
                    <div className="col col-6" data-label="Previously reviewed">
                      {dat.Previouslyreviewed}
                      {dat.Previouslyreviewed === "Yes" ? (
                        <p style={{ fontSize: "12px" }}>{dat.Lastreviewed}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                );
              })}
            {!pending &&
              data.map((dat) => {
                return (
                  <li className="table-row" key={dat.Email}>
                    <div className="col col-1" data-label="User">
                      <div
                        className="d-flex"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div>{dat.Username}</div>
                        <div>
                          <a href="">
                            <img
                              width="20"
                              height="20"
                              src="https://img.icons8.com/pulsar-line/48/external-link.png"
                              alt="external-link"
                            />
                          </a>
                        </div>
                      </div>
                      <p style={{ fontSize: "12px" }}>{dat.Email}</p>
                    </div>
                    <div className="col col-2" data-label="Risk level">
                      <div style={{ display: "flex" }}>
                        <span
                          className="dot"
                          style={
                            dat.Risklevel === "High"
                              ? red
                              : dat.Risklevel === "Low"
                              ? green
                              : yellow
                          }
                        ></span>
                        <span style={{ paddingLeft: "0px" }}>
                          {dat.Risklevel}
                        </span>
                      </div>
                    </div>
                    <div className="col col-3" data-label="Trigger reason">
                      {dat.Activereason}
                    </div>
                    <div className="col col-4" data-label="In queue for">
                      {dat.Timetoclose} days
                    </div>
                    <div className="col col-5" data-label="Data added on">
                      {dat.Dateadded}
                    </div>
                    <div className="col col-6" data-label="Previously reviewed">
                      <div>{dat.Actiontakenby}</div>
                      <div>{dat.Actiontakenbymail}</div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Table;
