import { useState, useCallback, ChangeEvent } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import ReactNiceAvatar from "./index";
import { genConfig } from "./utils";
import AvatarEditor from "./AvatarEditor/index";
import "./styles.css";
import { AvatarFullConfig, NiceAvatarProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong, faPrint } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [nameError, setNameError] = useState(false);
  const [state, setState] = useState({
    config: genConfig({
      isGradient: Boolean(Math.round(Math.random())),
      hairStyle: "none"
    }),
    shape: "circle" as NiceAvatarProps["shape"],
    name: "",
  });

  const avatarId = "myAvatar";

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, name: e.target.value }));
    setNameError(false);
  }, []);

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
        hairStyle: "none",
      }),
      name: "",
    }));
    setCurrentPage(1);
  }, []);

  const download = useCallback(async () => {
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

      saveAs(blob, `${state.name.replace(/\s/g, "").toLowerCase()}-avatar.png`);
      //resetConfig();
    }
  }, [resetConfig, state.name]);

  return (
    <div className="App flex flex-col min-h-screen relative p-20">       
      {currentPage === 1 ? <PageOne
        state={state}
        nameError={nameError}
        setNameError={setNameError}
        onInputChange={onInputChange}
        updateConfig={updateConfig}
        setPage={setCurrentPage}
      /> : <PageTwo
        avatarId={avatarId}
        state={state}
        download={download}
        setPage={setCurrentPage} />}
    </div>
  );
};

const PageOne = ({ state, nameError, setNameError, onInputChange, updateConfig, setPage }: PageOneProps) => {
  const nextPage = () => {
    if (!state.name) {
      setNameError(true);
      return;
    }
    setPage(2);
  }
  
  return (
    <main className="flex-grow h-full w-full bg-white/50 rounded-xl flex pt-10">
      <img src="./avanade_logo.png" className="absolute w-80 ml-10" />
      <div className="flex-1 flex flex-col items-center pt-10">
        <div className="mb-10">
          <ReactNiceAvatar
            className="w-80 h-80"
            {...state.config}
            hairColorRandom={true}
            shape={state.shape}
          />
        </div>
        <div className="mb-10 flex flex-col items-center">
          <input
            className={`bg-white/70 w-64 h-10 p-2 mb-1 text-center outline-none z-50 text-black placeholder-gray-900 rounded ${nameError ? "border-2 border-red-700" : ""}`}
            placeholder="Enter name here"
            onChange={onInputChange}
            value={state.name}
          />
          {nameError && <span className="text-red-700">Please enter your name.</span>}
        </div>
        <AvatarEditor
          config={state.config}
          updateConfig={updateConfig}
        />
        <div className="absolute right-32 -translate-y-1/2 top-1/2 cursor-pointer text-black flex flex-col items-end" onClick={nextPage}>
          <FontAwesomeIcon icon={faArrowRightLong} size={"2xl"} />
          <span>Next</span>
        </div>
      </div>
    </main>
  );
};

const PageTwo = ({ avatarId, state, download, setPage }: PageTwoProps) => {
  return (
    <main className="flex-grow h-full w-full flex pt-20">
      <div className="flex-1 flex flex-col items-center">
        <div id={avatarId}>
          <div className="badge h-[500px] rounded-lg w-[375px] flex flex-col items-center">
            <div className="z-10">
              <ReactNiceAvatar
                className="w-60 h-60 mt-16"
                {...state.config}
                hairColorRandom={true}
                shape={state.shape}
              />
            </div>
            <div className="text-black text-2xl text-center mt-8 z-20">{state.name}</div>
            <div className="text-black text-2xl text-center mt-2 z-20">Avanade Consultant</div>
          </div>
        </div>
        <button className="flex gap-4 mt-5 py-2 w-[375px] justify-center items-center text-xl bg-[#DD3C10] rounded" onClick={download}>
          <FontAwesomeIcon icon={faPrint} className="text-3xl" />
          <span>Download & Print</span>
        </button>
        <div className="absolute left-32 -translate-y-1/2 top-1/2 cursor-pointer text-black flex flex-col items-start" onClick={() => setPage(1)}>
          <FontAwesomeIcon icon={faArrowLeftLong} size={"2xl"} />
          <span>Back</span>
        </div>
      </div>
    </main>
  )
}

interface PageOneProps {
  state: {
    config: AvatarFullConfig;
    shape: NiceAvatarProps["shape"];
    name: string;
  };
  nameError: boolean;
  setNameError: React.Dispatch<React.SetStateAction<boolean>>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateConfig: (key: string | number, value: string | number | boolean) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface PageTwoProps {
  avatarId: string;
  state: {
    config: AvatarFullConfig;
    shape: NiceAvatarProps["shape"];
    name: string;
  };  
  download: () => Promise<void>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default App;
