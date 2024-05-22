import { useState } from "react";
import { Divz } from "./lib/Divz";
import "./App.css";

function App() {
  const [demo, setDemo] = useState<number>(1);

  const isActive = (link: number) => {
    return link === demo ? "active" : "";
  };

  return (
    <div className={`app ${demo >= 3 ? "dark-mode" : ""}`}>
      <div className="app-header">
        <div className={`demo-list`}>
          {[1, 2].map((demoNumber) => (
            <a
              key={demoNumber}
              className={isActive(demoNumber)}
              onClick={() => setDemo(demoNumber)}
            >
              {demoNumber===1 ? "Landscape 2018 - 2019":"Hyperealistic 2021 - 2023"}
            </a>
          ))}
        </div>
        <br/>
        <h1>Leonardo AI</h1>
        <small>
          Gallery in carousell
        </small>
        <a className="github" href="https://github.com/itpofy2024o">
          GitHub
        </a>
      </div>

      {demo === 1 ? (
        <Demo1 />
      ) : (
        <Demo2 />
      )}
    </div>
  );
}

const demo1Images: string[] = [];

for (let i = 1; i <= 9; i++) {
  demo1Images.push(`./demo1/${i}.jpg`);
}

function Demo1() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <>
      <img className="background" src={`./demo1/${selectedIndex + 1}-bg.jpg`} />

      <Divz
        className="demo1"
        autoPlay={true}
        isExpanded={false}
        onIndexChange={(i) => setSelectedIndex(i)}
      >
        {demo1Images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} />
          </div>
        ))}
      </Divz>
    </>
  );
}

const demo2Images: string[] = [];

for (let i = 1; i <= 10; i++) {
  demo2Images.push(`./demo2/${i}.jpg`);
}

function Demo2() {
  return (
    <>
      <img className="background" src="./demo2/bg.jpg" />

      <Divz className="demo4" autoPlay={true} isDarkMode={true}>
        {demo2Images.map((imageUrl, index) => (
          <figure key={index}>
            <img src={imageUrl} />
            {/* <figcaption>
              <div>{(index + 1).toString().padStart(2, "0")}</div>
              <div>{`demo2/${index + 1}.jpg`}</div>
            </figcaption> */}
          </figure>
        ))}
      </Divz>
    </>
  );
}

export default App;
