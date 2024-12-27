import React from "react";
import useTheme from "./contexts/theme";
import { LuSunMoon } from "react-icons/lu";


function Themebtn() {
  const{themeMode,darkTheme,lightTheme}=useTheme()
  const onchangeBtn = () => {
    if(themeMode==='dark'){
      lightTheme()

    }else{
      darkTheme()
    }
  };
  return (
    <>
    <div>
      <button
        type="button"
        // checked={themeMode=="dark"}
        onClick={onchangeBtn}
        >
        <LuSunMoon size={25}/>
          
      </button>

    </div>
    </>
  );
}

export default Themebtn;
