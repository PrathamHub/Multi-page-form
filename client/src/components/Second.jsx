import React from "react";

const Second = ({ data, setData }) => {
  return (
    <div className="second-container">
      <div className="subcontainer">
        <label>Phone</label>
        <input
          type="number"
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
      </div>
      <div className="subcontainer">
        <label>DOB</label>
        <input
          type="text"
          onChange={(e) => setData({ ...data, dob: e.target.value })}
        />
      </div>
      <div className="subcontainer">
        <label>Gender</label>
        <div>
          <div>
            <input
              type="radio"
              id="male"
              value="male"
              name="gender"
              checked={data.gender === "male"}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              value="female"
              name="gender"
              checked={data.gender === "female"}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="other"
              value="other"
              name="gender"
              checked={data.gender === "other"}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="other">Others</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
