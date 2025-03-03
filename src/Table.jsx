import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFormInputData } from "./utility/formSlice.js";

const Table = () => {
  const selector = useSelector((state) => state.form.formInputData.users);
  // console.log(selector)
  const dispatch = useDispatch();
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Birthday
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {selector.length > 0 &&
              selector.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.details.name}
                  </th>
                  <td className="px-6 py-4">{user.details.email}</td>
                  <td className="px-6 py-4">{user.details.email}</td>
                  <td className="px-6 py-4">{user.details.address}</td>
                  <td className="px-6 py-4">{user.details.birthday}</td>
                  <td className="px-6 py-4">{user.details.password}</td>
                  <td className="px-6 py-4">
                    <IconButton
                      aria-label="delete"
                      size="large"
                      onClick={() => dispatch(removeFormInputData(user.id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
