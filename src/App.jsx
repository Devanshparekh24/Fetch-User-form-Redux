import UserData from "./components/UserData";
import { ModalProvider } from "./components/contexts/ModalContext";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import DarkMode from "./components/DarkMode";
import Dry from "./components/Dry";
import Themebtn from "./components/Themebtn";
import { ThemeProvider } from "./components/contexts/theme";

// import  AppSidebar  from "./components/Sidebar";
// import { SidebarProvider } from "@shadcn/ui"; // Import SidebarProvider from ShadCN

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="">
          <Sidebar />
          <div className="flex flex-row justify-end pr-12">

          <Themebtn />
          </div>
          {/* <DarkMode /> */}
          <ModalProvider>
            {/* <Dry /> */}
            <UserData />
            <Modal />
          </ModalProvider>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
