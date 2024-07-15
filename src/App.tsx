import { useState, useCallback, ChangeEvent } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import ReactNiceAvatar from "./index";
import { genConfig } from "./utils";
import AvatarEditor from "./AvatarEditor/index";
import "./styles.css";
import { NiceAvatarProps } from "./types";

const App = () => {
  const [state, setState] = useState({
    config: genConfig({
      isGradient: Boolean(Math.round(Math.random())),
    }),
    shape: "circle" as NiceAvatarProps["shape"],
    name: "",
  });

  const avatarId = "myAvatar";

  const updateConfig = useCallback(
    (key: string | number, value: string | number | boolean) => {
      setState((prevState) => ({
        ...prevState,
        config: { ...prevState.config, [key]: value },
      }));
    },
    []
  );

  const resetConfig = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      config: genConfig({
        isGradient: Boolean(Math.round(Math.random())),
      }),
      name: "",
    }));
  }, []);

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, name: e.target.value }));
  }, []);

  const download = useCallback(async () => {
    if (state.name === "") {
      alert("Enter your name to save your avatar!");
      return;
    }
    const scale = 2;
    const node = document.getElementById(avatarId);
    if (node) {
      const blob = await domtoimage.toBlob(node, {
        height: node.offsetHeight * scale,
        style: {
          transform: `scale(${scale}) translate(${
            node.offsetWidth / 2 / scale
          }px, ${node.offsetHeight / 2 / scale}px)`,
          "border-radius": 0,
        },
        width: node.offsetWidth * scale,
      });

      saveAs(blob, state.name + ".png");
      resetConfig();
    }
  }, [state.name, resetConfig]);

  return (
    <div className="App flex flex-col min-h-screen p-20">
      <main className="flex-grow h-full w-full bg-white bg-opacity-50 rounded-xl flex items-center">
        <div className="flex-1 flex flex-col items-center">
          <div id={avatarId} className="mb-10">
            <ReactNiceAvatar
              className="w-80 h-80"
              {...state.config}
              hairColorRandom={true}
              shape={state.shape}
            />
          </div>
          <input
            className="bg-white bg-opacity-70 w-64 h-10 p-2 mb-10 text-center outline-none z-50 text-black placeholder-gray-900"
            placeholder="Enter name here"
            onChange={onInputChange}
            value={state.name}
          />
          <AvatarEditor
            config={state.config}
            updateConfig={updateConfig}
            download={download}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
