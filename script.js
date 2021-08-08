
  const $ = document.getElementsByClassName.bind(document);
  const tabs = $("tab");
  const nextBtns = $("action-button");
  const prevBtns = $("action-button-previous");
  for (let i = 0; i < tabs.length; ++i) {
    switch (i) {
      case tabs.length - 1:
        nextBtns[tabs.length - 1].addEventListener("click", () => {
          alert("submitted");
        });
        break;
      default:
        nextBtns[i].addEventListener("click", () => {
          tabs[i + 1].classList.add("show-div");
          tabs[i].classList.remove("show-div");
        });
        prevBtns[i].addEventListener("click", () => {
          tabs[i].classList.add("show-div");
          tabs[i + 1].classList.remove("show-div");
        });
    }
  }
