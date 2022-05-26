let switcher = false;
const pageTitle = document.getElementById("page-window-title").innerText;
setInterval(() => {
  const title = document.getElementById("page-window-title");
  const webSiteTitle = "Yegor Blinov";

  switch(switcher) {
    case true:
      title.innerText = pageTitle;
      break;
    case false:
      title.innerText = webSiteTitle;
      break;
  }

  switcher = !switcher;


}, 2000);