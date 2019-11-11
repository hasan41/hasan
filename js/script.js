var typed = new Typed('.moving-text', {
    strings: ["student.",
              "designer.",
              "creative.",
              "architect.",
              "kanye fanatic.",
              "hip hop head.",
              "reddit lurker.",
              "youtube binger.",
              "hyperactive.",
              "shopaholic.",
              "minimalist.",
              "reader.",
              "beat maker.",
              "lover of wabi-sabi.",
              "rager.",
              "hypebeast.",
              "conspiracy theory nut.",
              "reader.",
              "follower of christ."],
    typeSpeed: 95


  });
  

  let hand = document.querySelector(".wavinghand");
  let media = document.querySelector(".media")

  hand.addEventListener("click",function(){
    alert("it works");
  })