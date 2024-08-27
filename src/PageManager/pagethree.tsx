import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AvatarFullConfig, NiceAvatarProps } from "../types";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import ReactNiceAvatar from "../index";

const PageThree = ({ avatarId, state, download, setPage }: PageThreeProps) => {
  const previousPage = () => {
    setPage(2);
  };
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
            <div className="text-black text-2xl text-center mt-8 z-20">
              {state.name}
            </div>
            <div className="text-black text-2xl text-center mt-2 z-20">
              Avanade Avatar
            </div>
          </div>
        </div>
        <button
          className="flex gap-4 mt-5 py-2 w-[375px] justify-center items-center text-xl bg-[#DD3C10] hover:bg-[#e7572f] rounded"
          onClick={download}
        >
          <FontAwesomeIcon icon={faPrint} className="text-3xl" />
          <span>Download & Print</span>
        </button>
        <button className="mt-6 underline p-2" onClick={previousPage}>
          Return to previous page
        </button>
      </div>
    </main>
  );
};

export default PageThree;

interface PageThreeProps {
  avatarId: string;
  state: {
    config: AvatarFullConfig;
    shape: NiceAvatarProps["shape"];
    name: string;
  };
  download: () => Promise<void>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
