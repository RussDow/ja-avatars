import { useState } from "react";

const PageOne = ({ setPage }: PageOneProps) => {
  const [ended, setEnded] = useState(false);

  const nextPage = () => {
    setPage(2);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <div className="border-sky-100 border relative shadow-md shadow-slate-800 max-w-[1600px]">
        <video
          className="aspect-video"
          src={"./intro.mp4"}
          controls
          onEnded={() => setEnded(true)}
          onPlay={() => setEnded(false)}
        />
        {ended ? (
          <div className="absolute top-1/4 w-full h-1/2">
            <div className="flex justify-center items-center bg-white/30 w-full h-full">
              <button
                className="bg-[#A13368] hover:bg-[#b34479] px-20 py-2 rounded h-fit"
                onClick={nextPage}
              >
                Create an Avatar
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
};

export default PageOne;

interface PageOneProps {
  // state: {
  //   config: AvatarFullConfig;
  //   shape: NiceAvatarProps["shape"];
  //   name: string;
  // };
  // nameError: boolean;
  // setNameError: React.Dispatch<React.SetStateAction<boolean>>;
  // onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // updateConfig: (
  //   key: string | number,
  //   value: string | number | boolean
  // ) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
