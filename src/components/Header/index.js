import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../../firebase";
import HeaderData from "./HeaderData";
import {
  HeaderContainer,
  Logo,
  NavMenu,
  NavLink,
  Login,
  UserPhoto,
  SignOut,
  Dropdown,
} from "./styles";

import {
  setUserLoginDetails,
  setSignOutState,
  selectUserName,
  selectUserPhoto,
} from "../../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleAuth = async () => {
    try {
      if (!userName) {
        const result = await auth.signInWithPopup(provider);
        setUser(result.user);
        return history.push("/home");
      }
      await auth.signOut();
      dispatch(setSignOutState());
      return history.push("/");
    } catch (e) {
      // eslint-disable-next-line no-alert
      return alert(e.message);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  return (
    <HeaderContainer>
      <Logo href="/">
        <img src="/images/logo.svg" alt="Disney Logo" />
      </Logo>

      {userName && (
        <NavMenu>
          {HeaderData.map((data) => (
            <NavLink href={data.link} key={data.name}>
              {data.icon}
              <span>{data.name}</span>
            </NavLink>
          ))}
        </NavMenu>
      )}

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <SignOut>
          <UserPhoto src={userPhoto} alt="user-image" />
          <Dropdown onClick={handleAuth}>
            <span>SignOut</span>
          </Dropdown>
        </SignOut>
      )}
    </HeaderContainer>
  );
};

export default Header;
