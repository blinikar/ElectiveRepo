<script lang="ts" >
import LandingContent from "./lib/LandingContent.svelte";

interface Data {
    slogans: string[];
}

let slogans: string[];
const fetchSlogan = () => {
  fetch("/slogans.json")
    .then((res) => res.text())
    .then((res) => JSON.parse(res) as Data)
    .then((res) => {
      slogans = res.slogans;
    })
}
fetchSlogan();
</script>

<main>
  <h1>Welcome to Yegor Blinov's website</h1>

  <p>
    This website built using svelte
  </p>

  <div class="main-content">
      <LandingContent type="manyTexts"
                      texts={slogans}
                      imgSrc="https://upload.wikimedia.org/wikipedia/commons/3/34/Museum-Enter-6094769.JPG" />

      <LandingContent label="This website fetches slogans from JSON and simulate typings"
                      type="text" />
  </div>
</main>
<footer>
    <p class="footer-text">This website created for Frontend development elective in Innopolis University</p>
    <p class="footer-text">Unfortunately I can't rebuild my previous homework using Svelte because it uses React :(</p>
</footer>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .main-content {
      padding-left: 10%;
      padding-right: 20%;
      padding-bottom: 16px;
      box-sizing: border-box;

      display: flex;
      flex-direction: column;

      width: 100vw;
      min-height: 180px;
      background: #ff3e00;
  }

  footer {
      display: flex;
      flex-direction: column;

      box-sizing: border-box;

      width: 100vw;
      height: 180px;

      color: white;

      align-items: start;
      justify-content: end;

      padding: 16px 20% 16px 10%;

      background-color: #9D1200FF;
  }

  .footer-text {
      text-align: left;
      margin: 0;
  }

  main {
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }

  button {
      font-family: inherit;
      font-size: inherit;
      padding: 1em 2em;
      color: white;
      background-color: #9D1200FF;
      border-radius: 2em;
      border: 2px solid rgba(255, 62, 0, 0);
      outline: none;
      width: 200px;
      font-variant-numeric: tabular-nums;
      cursor: pointer;

      transition: all .1s;
  }

  button:hover {
      border: 2px solid #560B00FF;
  }

  button:active {
      background-color: #560B00FF;
  }
</style>
