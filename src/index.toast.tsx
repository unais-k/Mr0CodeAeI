import React from "react";
import type { Config } from "./block-config";
import { css } from "@emotion/react";

const Toast: React.FC<{ config: Config | any }> = ({ config }) => {
  return (
    <>
      
      <div
        css={css({
          backgroundColor: `${config.color}`,
          borderRadius: "3px",
          borderBottom: `3px solid ${config.titleColor}`,
          width: "600px",
          display: "flex",
          justifyContent: "start",
          gap: "10px"
        })}
      >
        <div
          css={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          })}
        >
          <span
            css={css({
              padding: "1rem",
              color: `${config?.titleColor}`,
              fontSize: "2rem",
              width: "fit-content"
            })}
            className="material-icons-outlined"
          >
            {config.icon}
          </span>
        </div>
        <div
          css={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            placeContent: "center",
            gap: "5px"
          })}
        >
          <span
            css={css({
              fontFamily: "sans-serif",
              fontStyle: "italic",
              color: `${config.titleColor}`,
              fontSize: "24px",
              fontWeight: "600"
            })}
          >
            {config.title}
          </span>

          <p
            css={css({
              fontFamily: "sans-serif",
              padding: "0px",
              margin: "0px",
              color: `black`,
              fontSize: "14px",
              fontWeight: "500"
            })}
          >
            {config.info}
          </p>
        </div>
      </div>
    </>
  );
};

export default Toast;
