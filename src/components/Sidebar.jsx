import React, { useState } from "react";
import { Menu, Home, Users } from "lucide-react";
import { Navitems } from "./NavItems";
import UserData from "./UserData";
// import Dry from "./Dry";
const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeAccordions, setActiveAccordions] = useState({
    users: false,
    account: false,
    projects: false,
  });

  const toggleAccordion = (id) => {
    setActiveAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className=" flex">
      {/* Sidebar */}
      <div
        className={`${
          isExpanded ? "w-64" : "w-16"
        } fixed top-0 start-0 bottom-0 z-[60] transition-all duration-300 transform bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700`}
      >
        {/* Toggle Button */}
        <div className=" flex flex-col items-center absolute right-0 transform translate-x-full top-4">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-e bg-white border border-gray-200 border-s-0 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-neutral-700 dark:border-neutral-700 dark:hover:bg-neutral-700"
            aria-label="Toggle navigation"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col h-full">
          {/* Brand */}
          <div className="p-4">
            {isExpanded ? (
              <span className="text-xl font-semibold">Brand</span>
            ) : (
              <span className="text-xl font-semibold">B</span>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {Navitems.map((item) => (
                <li key={item.id}>
                  {item.subItems ? (
                    // Accordion Item
                    <div>
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className={`w-full flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 ${
                          !isExpanded ? "justify-center" : "justify-between"
                        }`}
                      >
                        <div className="flex items-center gap-x-2">
                          {item.icon}
                          {isExpanded && <span>{item.label}</span>}
                        </div>
                        {isExpanded && (
                          <svg
                            className={`size-4 transition-transform ${
                              activeAccordions[item.id] ? "rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        )}
                      </button>
                      {/* Subitems */}
                      {isExpanded && activeAccordions[item.id] && (
                        <ul className="mt-2 space-y-1 ps-6">
                          {item.subItems.map((subItem, index) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="block p-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
                              >
                                {subItem}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    // Regular Item
                    <a
                      href="#"
                      className={`flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 ${
                        !isExpanded && "justify-center"
                      }`}
                    >
                      {item.icon}
                      {isExpanded && <span>{item.label}</span>}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      
    </div>
  );
};

export default Sidebar;
