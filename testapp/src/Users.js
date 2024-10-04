import env from "./env";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get(process.env.REACT_APP_ENDPOINT + "/api/users")
      .then((response) => {
        // console.log(response);
        setUsers(response.data?.response || []);
      })
      .catch((error) => {
        console.log("Axios error :", error);
      });
  };

  const createUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post(process.env.REACT_APP_ENDPOINT + "/api/createUser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.log("Axios error :", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.put(process.env.REACT_APP_ENDPOINT + "/api/updateUser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.log("Axios error :", error);
      });
  };

  const deleteUser = (data) => {
    Axios.delete(process.env.REACT_APP_ENDPOINT + "/api/deleteUser", {
      data: data,
    })
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.log("Axios error :", error);
      });
  };

  return (
    <Box
      sx={{
        width: "calc(100% - 100px)",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <UserForm
        createUser={createUser}
        updateUser={updateUser}
        submitted={submitted}
        data={selectedUser}
        isEdit={isEdit}
      />
      <UserTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={(data) =>
          window.confirm("Are you sure ??") && deleteUser(data)
        }
      />
    </Box>
  );
};

export default Users;
