import "./styles.css";
import PageManager from "./PageManager/index";

const App = () => {
  return (
    <div className="App flex flex-col min-h-screen relative p-20">
      <PageManager />
    </div>
  );
};

export default App;
