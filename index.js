function addClassDynmically(prevStyle, newStyle) {
  const togglePrevStyle = document.querySelector(prevStyle);
  //   let toggleNewStyle = document.querySelector(newStyle);
  if (togglePrevStyle && true) {
    console.log("clicked");
    togglePrevStyle.classList.add("homeClass_addedClass");
  }
}
