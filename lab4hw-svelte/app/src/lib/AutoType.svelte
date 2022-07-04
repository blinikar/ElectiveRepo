<script lang="ts">
  export let texts = ["Hello world"];

  let text: string = texts[0];
  const changeText = () => {
    text = texts[Math.floor(Math.random() * texts.length)];
  }

  const sliceData = (c) => {
    return text.slice(0, c);
  }

  let c = 0;
  let content: string;
  let state = "writing";
  setInterval(() => {
    if (state === "writing") {
      if (c === text.length) {
        state = "clearingStage0";
      }
      c++;
    }
    else if (state === "clearingStage0") {
      c = Math.ceil(c/2);
      state = "clearingStage1";
    }
    else if (state === "clearingStage1") {
      c = 1;
      changeText();
      state = "writing";
    }
    content = sliceData(c);
  }, 400);
</script>

<span>
    {content}
</span>

<style>
    span {

    }
    span::after {
        content: "_";
        animation: typing .75s ease 0s infinite normal forwards;
    }
    
    @keyframes typing {
        from {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>