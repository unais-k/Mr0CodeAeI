import React from "react";
import type { Config } from "./block-config";
import { css } from "@emotion/react";

const Toast: React.FC<{ config: Config | any }> = ({ config }) => {
  const handleConfig = () => {
    console.log('he');
  }
  return (
    <>
      <div
        css={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px"
        })}
      >
        <div
          css={css({
            backgroundColor: `${config.toast.color}`,
            borderRadius: "3px",
            borderBottom: `3px solid ${config.toast.titleColor}`,

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
                color: `${config?.toast?.titleColor}`,
                fontSize: "2rem",
                width: "fit-content"
              })}
              className="material-icons-outlined"
            >
              {config.toast.icon}
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
                color: `${config.toast?.titleColor}`,
                fontSize: "24px",
                fontWeight: "600"
              })}
            >
              {config.toast?.title}
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
              {config.toast?.info}
            </p>
          </div>
        </div>
      </div>
        <div>
          <button onClick={handleConfig}>hey</button>
        </div>
    </>
  );
};

export default Toast;
