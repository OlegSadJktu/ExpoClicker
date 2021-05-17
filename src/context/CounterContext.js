import React, {useContext, useState} from "react";

const IncomeContext = React.createContext({
  passiveIncome: 1,
  setPassiveIncome: () => {
    console.log("ERROR SET")
  },
  upgradePassiveIncome: () => {
    console.log('ERROR')
  },
});

const IncomeProvider = ({children}) => {
  const [passiveIncome, setPassiveIncome] = useState(0);

  return(
    <IncomeContext.Provider
    value={{passiveIncome, setPassiveIncome}}>
      {children}
    </IncomeContext.Provider>
  )
};

const useIncome = () => {
  const {passiveIncome, setPassiveIncome} = useContext(IncomeContext)
  return {
    passiveIncome, setPassiveIncome
  }
}


export {IncomeProvider, useIncome}

