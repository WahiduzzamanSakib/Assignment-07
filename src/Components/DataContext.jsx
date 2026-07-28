import { createContext, useState } from "react";

export const GetData = createContext(null);

const DataProvider = ({ children }) => {
  const [contest, setContest] = useState([]);

  return (
    <GetData.Provider value={{ contest, setContest }}>
      {children}
    </GetData.Provider>
  );
};

export default DataProvider;