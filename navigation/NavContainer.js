import React, { useEffect, useRef } from "react";
import { NavigationActions } from "react-navigation";
import { useSelector } from "react-redux";
import ShopNavigator from "./ShopNavigator";

function NavContainer() {
  const auth = useSelector((state) => !!state.auth.token);

  const navRef = useRef();

  useEffect(() => {
    if (!auth) {
      navRef.current.dispatch(
        NavigationActions.navigate({ routeName: "AuthLogin" })
      );
    }
  }, [auth]);

  return <ShopNavigator ref={navRef} />;
}

export default NavContainer;
