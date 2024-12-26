import {  Home, Users } from "lucide-react";

 export const Navitems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Home className="size-4" />,
    },
    {
      id: "users",
      label: "Users",
      icon: <Users className="size-4" />,
      subItems: ["Link 1", "Link 2", "Link 3"],
    },
  ];