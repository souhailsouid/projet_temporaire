import React from "react";

export const isTop = (state, updateState) => {
  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const appBarIsTop = window.scrollY !== 0;
      appBarIsTop ? updateState(state) : updateState(state);
    });
  });
};
