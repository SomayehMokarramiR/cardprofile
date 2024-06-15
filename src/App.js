import logo from "./logo.svg";
import "./App.css";
import "./index.css";

// function Card() {
//   return (
//     <div
//       style={{
//         border: "3px solid black",
//         width: "50%",
//         height: "50%",
//         margin: "50px auto",
//       }}
//     >
//       <img
//         src="/MyImg.jpg"
//         alt="MyImg"
//         style={{ width: "100%", height: "50%" }}
//       />
//       <h1>Somayeh Mokarrami Rostami</h1>
//       <p style={{ textAlign: "justify", padding: "0 18px" }}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//         occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//         mollit anim id est laborum.
//       </p>
//       <div
//         style={{
//           display: "flex",
//           flexFlow: "column",
//           gap: "15px",
//           padding: "15px 10px",
//         }}
//       >
//         <div style={{ display: "flex", gap: "15px" }}>
//           <button style={{ background: "green" }}>Html/Css 💪</button>
//           <button style={{ background: "red" }}> JavaScript 💪</button>
//           <button style={{ background: "yellow" }}>TypeScript 💪</button>
//         </div>
//         <div style={{ display: "flex", gap: "15px" }}>
//           <button style={{ background: "orange" }}>React.js 💪</button>
//           <button style={{ background: "blue" }}>Next.js 💪</button>
//           <button style={{ background: "gray" }}>C# 💪</button>
//           <button style={{ background: "pink" }}>Ascp.net 💪</button>
//         </div>
//         <div style={{ display: "flex", gap: "15px" }}>
//           <button style={{ background: "orange" }}>Git & Github 💪</button>
//           <button style={{ background: "pink" }}>Jira 💪</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Card />
//     </div>
//   );
// }

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Next",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/myImg.png" alt="MyImg" />;
}

function Intro() {
  return (
    <div>
      <h1>Somayeh Mokarrami Rostami</h1>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((sk) => (
        <Skill
          skill={sk.skill}
          level={sk.level}
          color={sk.color}
          key={sk.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" ? "💪" : level === "intermediate" ? "👍" : "👶"}
      </span>
      {/* <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span> */}
    </div>
  );
}

export default App;
