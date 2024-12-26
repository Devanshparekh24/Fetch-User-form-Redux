// import UserData from "./components/UserData";
import { ModalProvider } from "./components/contexts/ModalContext";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import DarkMode from "./components/DarkMode";
import Dry from "./components/Dry";
// import  AppSidebar  from "./components/Sidebar";
// import { SidebarProvider } from "@shadcn/ui"; // Import SidebarProvider from ShadCN

import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <Sidebar />
        <DarkMode />
        <ModalProvider>
          <Dry />
          {/* <UserData /> */}
          <Modal />
        </ModalProvider>
      </div>
    </>
  );
}

export default App;
