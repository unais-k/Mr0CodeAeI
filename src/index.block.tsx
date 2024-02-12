import React, { useEffect, useState } from "react";
import type { Config } from "./block-config";
import { css } from "@emotion/react";
import Toast from "./index.toast";

const Block: React.FC<{
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
}> = ({ config, setConfig }) => {
  const [toastArr, setToastArr] = useState<Config[]>([]);
  useEffect(() => {
    if (config?.id) {
      const index = toastArr.findIndex((item) => item.id === config.id);
      if (index !== -1) {
        setToastArr((prevState) => {
          const updatedArr = [...prevState];
          updatedArr[index] = config;
          return updatedArr;
        });
      } else {
        setToastArr((prevState) => [...prevState, config]);
      }
    }
  }, [config]);
  
  const handleConfig = (color: string) => {
    if (color === "Info") {
      let colorExists = false;
      for (const toast of toastArr) {
        if (toast.title === color) {
          colorExists = true;
          break;
        }
      }
      if (!colorExists) {
        let toast: Config = {
          "id": 2,
          "title": "Info",
          "info": "This is important, but..., Not super important",
          "icon": "info",
          "titleColor": "#0ea5e9",
          "border": "#16a34a",
          "color": "#7dd3fc"
        };
        setToastArr([...toastArr, toast]);
        setConfig(toast);
      }
    } else if (color == "Warning") {
      let colorExists = false;
      for (const toast of toastArr) {
        if (toast.title === color) {
          colorExists = true;
          break;
        }
      }
      if (!colorExists) {
        let toast: Config = {
          "id": 3,
          "title": "Warning",
          "info": "Carefull! please, never look behind... I said NEVER!",
          "icon": "info",
          "titleColor": "#ffa31a",
          "border": "#16a34a",
          "color": "#fed7aa"
        };
        setToastArr([...toastArr, toast]);
        setConfig(toast);
      }
    } else if (color === "Error") {
      let colorExists = false;
      for (const toast of toastArr) {
        if (toast.title === color) {
          colorExists = true;
          break;
        }
      }
      if (!colorExists) {
        let toast: Config = {
          "id": 4,
          "title": "Error",
          "info": "OMG this is a disaster!!!",
          "icon": "cancel",
          "titleColor": "#ff1a1a",
          "border": "#16a34a",
          "color": "#ffcccc"
        };
        setToastArr([...toastArr, toast]);
        setConfig(toast);
      }
    }
  };

  return (
    <>
      {/* <div
        css={css({ display: "flex", backgroundColor: "black", justifyContent:"center",justifyItems:"center",margin:"20px" })}
      >
        <div  css={css({ display: "flex", color: "white",width:"80%" })}>
        <span
          css={css({ padding: "1rem", fontSize: "4rem" })}
          className="material-icons-outlined"
        >
          {config.icon}
        </span>
        <div
          css={css({ display: "flex", alignItems: "center", fontSize: "1.5rem", flex: 1, padding: "1rem", textAlign: "center"})}
        >
          <span>{config.text}</span>
        </div>
        </div>
      </div> */}
      <div
        css={css({
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          margin: "30px"
        })}
      >
        {toastArr?.length > 0 &&
          toastArr?.map((items, index) => {
            return <Toast key={index} config={items} />;
          })}
      </div>
      <div
        css={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: "30px"
        })}
      >
        <button
          css={css({
            padding: "10px 20px 10px 20px",
            color: "#13b04d",
            fontFamily: "sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            border: `1.5px solid #13b04d`,
            backgroundColor: "#86efac"
          })}
        >
          success
        </button>
        <button
          css={css({
            padding: "10px 20px 10px 20px",
            color: "#0ea5e9",
            fontFamily: "sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            border: `1.5px solid #0ea5e9`,
            backgroundColor: "#7dd3fc"
          })}
          onClick={() => handleConfig("Info")}
        >
          info
        </button>
        <button
          css={css({
            padding: "10px 20px 10px 20px",
            color: " #ffa31a",
            fontFamily: "sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            border: `1.5px solid  #ffa31a`,
            backgroundColor: "#fed7aa"
          })}
          onClick={() => handleConfig("Warning")}
        >
          warning
        </button>
        <button
          css={css({
            padding: "10px 20px 10px 20px",
            color: "#ff1a1a",
            fontFamily: "sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            border: `1.5px solid #ff1a1a`,
            backgroundColor: "#ffcccc"
          })}
          onClick={() => handleConfig("Error")}
        >
          Error
        </button>
      </div>
      {/* <div>
        <button onClick={handleConfig}>hey</button>
      </div> */}
    </>
  );
};

export default Block;
