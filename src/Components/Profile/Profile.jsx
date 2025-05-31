import { useContext, useEffect } from "react";
import style from "./Profile.module.css";
import { jwtDecode } from "jwt-decode";
function Profile() {
  const encodedUserProfile = localStorage.getItem("userToken");
  const userData = jwtDecode(encodedUserProfile);
  console.log(userData);
  console.log(userData?.name);
  console.log(userData?.role);

  return (
    <>
      <h2>Name: {userData.name}</h2>
      <h2>Role: {userData.role}</h2>
    </>
  );
}

export default Profile;
