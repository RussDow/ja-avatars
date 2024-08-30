import React from "react";
import "./index.css";
import { AvatarFullConfig, NiceAvatarProps } from "../types";
import ReactNiceAvatar from "../index.tsx";

const PageFour = ({state}: PageFourProps) => {
  return (
    <div className="WordSection1">
      <table
        className="MsoTableGrid"
        border={0}
        cellSpacing="0"
        cellPadding="0"
        style={{
          marginLeft: "-.75pt",
          borderCollapse: "collapse",
          border: "none",
          tableLayout: "fixed"
        }}
      >
        <tbody>
          <tr style={{ overflow: "hidden", pageBreakInside: "avoid", height: "167.75pt" }}>
            <td
              width="324"
              valign="top"
              style={{
                width: "243.0pt",
                padding: "0in .75pt 0in .75pt",
                height: "167.75pt",
                overflow: "hidden"
              }}
            >
                <div className="badge w-[224px] rounded-lg h-[327px] flex flex-col items-center">
                  <div className="z-10">
                    <ReactNiceAvatar
                      className="w-40 h-40 mt-16"
                      {...state.config}
                      hairColorRandom={true}
                      shape={state.shape}
                    />
                  </div>
                  <div className="text-black text-2xl text-center mt-8 z-20">
                    {state.name}
                  </div>
                  <div className="text-black text-2xl text-center mt-2 z-20">
                    Avanade Avatar
                  </div>
                </div>
            </td>
            <td
              width="36"
              valign="top"
              style={{
                width: "27.0pt",
                padding: "0in .75pt 0in .75pt",
                height: "167.75pt",
                overflow: "hidden"
              }}
            >
              <p
                className="MsoNormal"
                style={{
                  marginTop: "0in",
                  marginRight: "6.1pt",
                  marginBottom: "0in",
                  marginLeft: "6.1pt",
                  lineHeight: "normal",
                }}
              >
                &nbsp;
              </p>
            </td>
            <td
              width="324"
              valign="top"
              style={{
                width: "243.0pt",
                padding: "0in .75pt 0in .75pt",
                height: "167.75pt",
                overflow: "hidden"
              }}
            >
                <div className="badge w-[224px] rounded-lg h-[327px] flex flex-col items-center">
                  <div className="z-10">
                    <ReactNiceAvatar
                      className="w-40 h-40 mt-16"
                      {...state.config}
                      hairColorRandom={true}
                      shape={state.shape}
                    />
                  </div>
                  <div className="text-black text-2xl text-center mt-8 z-20">
                    {state.name}
                  </div>
                  <div className="text-black text-2xl text-center mt-2 z-20">
                    Avanade Avatar
                  </div>
                </div>
            </td>
          </tr>
          {/* Repeated rows */}
          {[...Array(3)].map((_, index) => (
            <React.Fragment key={index}>
              <tr style={{ overflow: "hidden", pageBreakInside: "avoid", height: "12.25pt" }}>
                <td
                  width="324"
                  valign="top"
                  style={{
                    width: "243.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "12.25pt",
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginTop: "0in",
                      marginRight: "6.1pt",
                      marginBottom: "0in",
                      marginLeft: "6.1pt",
                      lineHeight: "normal",
                    }}
                  >
                    &nbsp;
                  </p>
                </td>
                <td
                  width="36"
                  valign="top"
                  style={{
                    width: "27.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "12.25pt",
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginTop: "0in",
                      marginRight: "6.1pt",
                      marginBottom: "0in",
                      marginLeft: "6.1pt",
                      lineHeight: "normal",
                    }}
                  >
                    &nbsp;
                  </p>
                </td>
                <td
                  width="324"
                  valign="top"
                  style={{
                    width: "243.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "12.25pt",
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginTop: "0in",
                      marginRight: "6.1pt",
                      marginBottom: "0in",
                      marginLeft: "6.1pt",
                      lineHeight: "normal",
                    }}
                  >
                    &nbsp;
                  </p>
                </td>
              </tr>
              <tr style={{ overflow: "hidden", pageBreakInside: "avoid", height: "167.75pt" }}>
                <td
                  width="324"
                  valign="top"
                  style={{
                    width: "243.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "167.75pt",
                    overflow: "hidden"
                  }}> 
                  
                    <div className="badge w-[224px] rounded-lg h-[327px] flex flex-col items-center">
                      <div className="z-10">
                        <ReactNiceAvatar
                          className="w-40 h-40 mt-16"
                          {...state.config}
                          hairColorRandom={true}
                          shape={state.shape}
                        />
                      </div>
                      <div className="text-black text-2xl text-center mt-8 z-20">
                        {state.name}
                      </div>
                      <div className="text-black text-2xl text-center mt-2 z-20">
                        Avanade Avatar
                      </div>
                    </div>
                </td>
                <td
                  width="36"
                  valign="top"
                  style={{
                    width: "27.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "167.75pt",
                  }}
                >
                  <p
                    className="MsoNormal"
                    style={{
                      marginTop: "0in",
                      marginRight: "6.1pt",
                      marginBottom: "0in",
                      marginLeft: "6.1pt",
                      lineHeight: "normal",
                    }}
                  >
                    &nbsp;
                  </p>
                </td>
                <td
                  width="324"
                  valign="top"
                  style={{
                    width: "243.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "167.75pt",
                    overflow: "hidden"
                  }}> 
                  
                    <div className="badge w-[224px] rounded-lg h-[327px] flex flex-col items-center">
                      <div className="z-10">
                        <ReactNiceAvatar
                          className="w-40 h-40 mt-16"
                          {...state.config}
                          hairColorRandom={true}
                          shape={state.shape}
                        />
                      </div>
                      <div className="text-black text-2xl text-center mt-8 z-20">
                        {state.name}
                      </div>
                      <div className="text-black text-2xl text-center mt-2 z-20">
                        Avanade Avatar
                      </div>
                    </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
          {/* Last set of rows */}
        </tbody>
      </table>
      <p
        className="MsoNormal"
        style={{
          marginTop: "0in",
          marginRight: "6.1pt",
          marginBottom: "8.0pt",
          marginLeft: "6.1pt",
        }}
      >
        <span style={{ display: "none" }}>&nbsp;</span>
      </p>
    </div>
  );
};
export default PageFour;

interface PageFourProps {
  state: {
    config: AvatarFullConfig;
    shape: NiceAvatarProps["shape"];
    name: string;
  };
  // setPage: React.Dispatch<React.SetStateAction<number>>;
}
