import React from "react";

const Categories = ({ filterItems }) => {
  const buttons = {
    backgroundColor: "#00000000",
    border: "none",
    width: "9.5vw",
    height: "5.5vh",
  };

  function hover(e) {
    e.target.style.background = "#777777";
  }

  function normal(e) {
    e.target.style.background = "#00000000";
  }

  const header = {
    height: "5.5vh",
    backgroundColor: "#9E9E9E",
    width: "100vw",
    display: "flex",
  };

  return (
    <div style={header} className="d-sm-block">
      <div class="container">
        <button
          className="cat"
          style={buttons}
          value="adventure"
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => filterItems("adventure")}
        >
          ADVENTURE
        </button>
        <button
          className="cat"
          style={buttons}
          value="mystery"
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => filterItems("mystery")}
        >
          MYSTERY
        </button>

        <button
          className="cat"
          style={buttons}
          value="fiction"
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => filterItems("fiction")}
        >
          FICTION
        </button>

        <button
          className="cat"
          style={buttons}
          value="autobiography"
          onMouseEnter={hover}
          onMouseLeave={normal}
          onClick={() => filterItems("autobiography")}
        >
          AUTOBIOGRAPHY
        </button>
      </div>
    </div>
  );
};

export default Categories;
export var val;
