import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [studyClicked, setStudyClicked] = useState(false);
  const [showCashFlow, setshowCashFlow] = useState(false);
  const [files, setFiles] = useState([]);
  const [textArea, setTextArea] = useState("");
  useEffect(() => {
    // console.log("studyClicked", studyClicked, "showCashFlow", showCashFlow);
    console.log("files", files);
  }, [files]);
  return (
    <AppContext.Provider
      value={{
        studyClicked,
        setStudyClicked,
        showCashFlow,
        setshowCashFlow,
        files,
        setFiles,
        textArea,
        setTextArea,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

export const useAppData = () => useContext(AppContext);
