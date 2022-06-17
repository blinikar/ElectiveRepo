
const fetchImg = () => {
  const img = document.getElementById("monster");
  fetch("https://app.pixelencounter.com/api/basic/monsters/random/png?size=100", {
    mode: "no-cors"
  })
    //.then((res) => res.json())
    .then((res ) => res.raw)
    .then((res) => {
      console.log(res);
    })

}

window.onload = fetchImg;





