//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
      "Wash your hands often with soap and water for at least 20 seconds, especially after being in a public place, or after blowing your nose, coughing or sneezing."
    },
    {
      quote:
        "If soap and water are not readily available, use a hand sanitizer with at least 60% alcohol."
    },
    {
      quote:
        "Avoid touching your eyes, nose and mouth with unwashed hands. "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Avoid close contact with people who are sick. Some people without symptoms may be able to spread the virus."
    },
    {
      quote:
        "Practice social distancing by keeping at least 6 feet — about two arm lengths — away from others if you must go out in public."
    },

    {
      quote:
        "Stay home as much as possible and avoid non-essential travel."
    },

    {
      quote:
      "Cover your mouth and nose with a cloth face cover when around others and when you must go out in public, such as to a grocery store. The cloth face cover is meant to protect other people in case you are infected."
    },

    {
      quote:
      "Cover your coughs and sneezes. Use a tissue to cover your nose and mouth, and throw used tissues in a lined trash can. If a tissue isn’t available, cough or sneeze into your elbow — not your hands. Wash your hands immediately.."
    },

    {
      quote:
      "Clean and disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets and sinks. Follow CDC guidance."
    }   
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    
  });
})();
