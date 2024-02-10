import React from "react";
import type { Config } from "./block-config";
import { css } from "@emotion/react";
import Toast from "./index.toast";
import { configurer } from "./block-configurer";

const Block: React.FC<{ config: Config, setConfig:  }> = ({ config }) => {
  return (
    <>
      <div
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
          css={css({
            display: "flex",
            alignItems: "center",
            fontSize: "1.5rem",
            flex: 1,
            padding: "1rem",
            textAlign: "center"
          })}
        >
          <span>{config.text}</span>
        </div>
        </div>
      </div>
      <Toast config={config} />
    </>
  );
};

export default Block;
