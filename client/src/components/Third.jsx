import React, { useState } from "react";

const Third = ({ data, setData }) => {
  const [skills, setSkills] = useState([]);

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    const isChecked = e.target.checked;
    let updatedSkills;

    if (isChecked) {
      updatedSkills = [...skills, skill];
    } else {
      updatedSkills = skills.filter((s) => s !== skill);
    }

    setSkills(updatedSkills);
    setData({ ...data, skills: updatedSkills });
  };

  return (
    <div className="third-container">
      <label>Address</label>
      <input
        type="text"
        onChange={(e) => setData({ ...data, address: e.target.value })}
      />
      <label>Skills</label>
      <div>
        <label>
          <input
            type="checkbox"
            value="Web Development"
            checked={skills.includes("Web Development")}
            onChange={handleSkillChange}
          />
          Web Development
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="Machine Learning"
            checked={skills.includes("Machine Learning")}
            onChange={handleSkillChange}
          />
          Machine Learning
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="UI/UX"
            checked={skills.includes("UI/UX")}
            onChange={handleSkillChange}
          />
          UI/UX
        </label>
      </div>
    </div>
  );
};

export default Third;
