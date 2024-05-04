import { mount } from "auth/AuthApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const AuthApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }, name) => {
        const { pathname: curPathname = "" } = history?.location;
        if (curPathname !== nextPathname) {
          history.push(nextPathname);
          console.log(`Container history is updated by ${name}`);
        }
      },
      initialPath: history?.location?.pathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
