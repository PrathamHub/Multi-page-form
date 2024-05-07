import React from "react";
import { useState } from "react";
import axios from "axios";
import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";
import "./form.css";
const Form = () => {
  const [page, setpage] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    dob: "",
    gender: "",
    skills: [],
  });
  const registerUser = async (e) => {
    const { name, email, username, gender, dob, phone, address, skills } = data;
    e.preventDefault();
    try {
      await axios.post("/api/data", {
        name,
        email,
        username,
        gender,
        dob,
        phone,
        address,
        skills,
      });
      alert("registration Successfull");
    } catch (error) {
      console.log(error);
      console.log("Registration Unsuccessfull");
    }
  };
  const titles = ["First Page", "Second Page", "Third Page"];
  const showPage = () => {
    if (page == 0) {
      return <First data={data} setData={setData} />;
    } else if (page == 1) {
      return <Second data={data} setData={setData} />;
    } else {
      return <Third data={data} setData={setData} />;
    }
  };
  if (titles == 0) {
  }
  if (page == 0) {
    const { name, email, username } = data;
    var filled = name && email && username;
  }
  if (page == 1) {
    const { phone, dob, gender } = data;
    var filled = phone && dob && gender;
  }
  if (page == 2) {
    const { address, skills } = data;
    var filled = address && skills;
  }
  return (
    <div className="main">
      <h1>{titles[page]}</h1>
      <div className="content">{showPage()}</div>
      <button
        onClick={(e) => {
          if (page == titles.length - 1) {
            {
              if (filled) {
                setpage((curr) => curr + 1);
              } else {
                alert("fill all details");
                return;
              }
            }
            alert("Registration done");
            registerUser(e);
            console.log(e);
          } else {
            {
              if (filled) {
                setpage((curr) => curr + 1);
              } else {
                alert("fill all details");
              }
            }
          }
        }}
      >
        {page == titles.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Form;
