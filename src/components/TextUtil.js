import React, { useState, useEffect } from "react";

export default function TextUtil(props) {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fClick, setFClick] = useState(false);

  //Ferching data from backend
  const fetchData = async () => {
    setFClick(true);
    try {
      if (text != "") {
        const response = await fetch("http://localhost:8081/" + text);
        const Ftext = await response.text();
        let jsObj = JSON.parse(Ftext);
        setData(jsObj);
      } else {
        alert("Please provide any data");
      }
    } catch (err) {
      setData(text);
      setError(err.message);
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="3"
            placeholder="Type"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="button" className="btn btn-success" onClick={fetchData}>
          Search
        </button>
      </div>
      <div className="container my-3">
        {fClick && data.length == 0 && <>No Data Found</>}
        {data.map((item) =>
          item.meanings.map((meaning) => (
            <div key={meaning.partOfSpeech}>
              <h5>{meaning.partOfSpeech}</h5>
              {meaning.definitions.map((definition, index) => (
                <p key={index}>{definition.definition}</p>
              ))}
            </div>
          ))
        )}
      </div>
    </>
  );
}
