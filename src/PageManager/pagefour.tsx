import React from "react";
import "./index.css";
import { AvatarFullConfig, NiceAvatarProps } from "../types";
import ReactNiceAvatar from "../index.tsx";

const PageFour = ({ state }: PageFourProps) => {
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
          tableLayout: "fixed",
        }}
      >
        <tbody>
          <tr
            style={{
              overflow: "hidden",
              pageBreakInside: "avoid",
              height: "167.75pt",
            }}
          >
            <td
              width="324"
              valign="top"
              style={{
                width: "243.0pt",
                padding: "0in .75pt 0in .75pt",
                height: "167.75pt",
                overflow: "hidden",
              }}
            >
              <div className="badge-horizontal h-[224px] rounded-lg w-[327px] flex items-center">
                <div className="z-10">
                  <ReactNiceAvatar
                    className="w-40 h-40 -rotate-90 ml-16"
                    {...state.config}
                    hairColorRandom={true}
                    shape={state.shape}
                  />
                </div>
                <div className="text-black text-2xl text-center ml-6 z-20 write-vertical rotate-180">
                  {state.name}
                </div>
                <div className="text-black text-2xl text-center ml-2 z-20 write-vertical rotate-180">
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
                overflow: "hidden",
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
                overflow: "hidden",
              }}
            >
              <div className="badge-horizontal h-[224px] rounded-lg w-[327px] flex items-center">
                <div className="z-10">
                  <ReactNiceAvatar
                    className="w-40 h-40 -rotate-90 ml-16"
                    {...state.config}
                    hairColorRandom={true}
                    shape={state.shape}
                  />
                </div>
                <div className="text-black text-2xl text-center ml-6 z-20 write-vertical rotate-180">
                  {state.name}
                </div>
                <div className="text-black text-2xl text-center ml-2 z-20 write-vertical rotate-180">
                  Avanade Avatar
                </div>
              </div>
            </td>
          </tr>
          {/* Repeated rows */}
          {[...Array(3)].map((_, index) => (
            <React.Fragment key={index}>
              <tr
                style={{
                  overflow: "hidden",
                  pageBreakInside: "avoid",
                  height: "12.25pt",
                }}
              >
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
              <tr
                style={{
                  overflow: "hidden",
                  pageBreakInside: "avoid",
                  height: "167.75pt",
                }}
              >
                <td
                  width="324"
                  valign="top"
                  style={{
                    width: "243.0pt",
                    padding: "0in .75pt 0in .75pt",
                    height: "167.75pt",
                    overflow: "hidden",
                  }}
                >
                  <div className="badge-horizontal h-[224px] rounded-lg w-[327px] flex items-center">
                    <div className="z-10">
                      <ReactNiceAvatar
                        className="w-40 h-40 -rotate-90 ml-16"
                        {...state.config}
                        hairColorRandom={true}
                        shape={state.shape}
                      />
                    </div>
                    <div className="text-black text-2xl text-center ml-6 z-20 write-vertical rotate-180">
                      {state.name}
                    </div>
                    <div className="text-black text-2xl text-center ml-2 z-20 write-vertical rotate-180">
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
                    overflow: "hidden",
                  }}
                >
                  <div className="badge-horizontal h-[224px] rounded-lg w-[327px] flex items-center">
                    <div className="z-10">
                      <ReactNiceAvatar
                        className="w-40 h-40 -rotate-90 ml-16"
                        {...state.config}
                        hairColorRandom={true}
                        shape={state.shape}
                      />
                    </div>
                    <div className="text-black text-2xl text-center ml-6 z-20 write-vertical rotate-180">
                      {state.name}
                    </div>
                    <div className="text-black text-2xl text-center ml-2 z-20 write-vertical rotate-180">
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
  setPage: React.Dispatch<React.SetStateAction<number>>;
  print: () => void;
}
