import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../Redux/Slice/todo";
import { ModalContext } from "./contexts/ModalContext"; // Import ModalContext

function UserData() {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.todo);
  const { openModal } = useContext(ModalContext); // Get openModal from context
  console.log(data, "dtataaa");

  useEffect(() => {
    
    dispatch(fetchTodos());
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error fetching data.</h1>;

  return (
    <>
      <div className="flex  flex-col items-center">
        <table className="w-1/2 border-collapse border border-gray-300 rounded-md shadow-md">
          <caption className="text-lg font-semibold text-gray-700">
            List of Users
          </caption>
          <thead className="bg-gray-100">
            <tr>
              <th className="w-[50px] border border-gray-300 px-4 py-2 text-left text-gray-600 font-bold">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-bold">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-bold">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.users?.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => openModal(user)} // Open modal on row click
              >
                <td className="font-medium border border-gray-300 px-4 py-2">
                  {user.firstName} {user.lastName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserData;
