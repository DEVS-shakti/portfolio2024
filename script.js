
function revealTospan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    var parent = document.createElement("span");
    var child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}
function loaderAnimation() {
  var tl = gsap.timeline();
  tl.from(".loader .child span", {
    x: 120,
    Delay: 1,
    stagger: 0.2,
    duration: 1,
    ease: Expo.easeInOut,
  })

    .to(".loader .parent .child", {
      y: "-100%",
      duration: 2,
      ease: Expo.easeInOut,
    })

    .to(".loader .spinner", {
      y: "-100%",
      delay: -1,
      ease: Expo.easeInOut,
    })

    .to(".loader", {
      duration: 1,
      y: "-100%",
      ease: Expo.easeInOut,
    })
    .to(".green", {
      height: "100%",
      duration: 1,
      delay: -1.2,
      top: 0,
      ease: Expo.easeInOut,
    })
    .to(".green", {
      height: "0%",
      duration: 1,
      delay: -0.6,
      ease: Expo.easeInOut,
    })
    .from(".row .revive", {
      height: 0,
      delay: -0.2,
      stagger: 0.1,
      duration: 0.5,
      ease: Expo.easeInOut,
    })
    .from(".home .c-row .sr::before",{
      width:0,
      duration:1,
      delay:1,
      ease: Expo.easeInOut
    });
  animateSvg();
}
function animateSvg() {
  document.querySelectorAll("#Visual>g").forEach(function (node) {
    var elem = node.childNodes[1].childNodes[1];
    elem.style.strokeDasharray = elem.getTotalLength() + "px";
    elem.style.strokeDashoffset = elem.getTotalLength() + "px";
  });
  gsap.to("#Visual>g>g>path,#Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
    delay: 6,
  });
}
function cardCursor() {
  const cardCursor = document.querySelector("#cursor");
  const imgs = document.querySelectorAll(".contr");
  const cursor = document.querySelector(".custom-cursor");
  imgs.forEach(function (img) {
    img.addEventListener("mousemove", function (e) {
      cardCursor.style.opacity = 1;
      cardCursor.style.transform = `translate(${e.clientX-28}px,${e.clientY-15}px)`;
      img.style.filter = "grayscale(1)";
      cursor.style.opacity = 0;
      document.querySelector(".work").style.backgroundColor =
        "#" + img.dataset.value;
    });
    img.addEventListener("mouseleave", function (e) {
      img.style.filter = "grayscale(0)";
      document.querySelector(".work").style.backgroundColor = "#f2f2f2";
      cardCursor.style.opacity = 0;
      cursor.style.opacity = 1;
    });
  });
}
function customCursor() {
  document.addEventListener("mousemove", function (e) {
    gsap.to('.custom-cursor',{
      x:e.clientX+4,
      y:e.clientY+8
    })
  });
}
function hover(a) {
  var tl =gsap.timeline();
  a.addEventListener("mouseover", function (e) {
    tl.to('.sm',{
      height: "30%",
      duration:1,
    })
    document.querySelector(".sm").style.display = "flex";
  });

  document.querySelector(".sm").addEventListener("mouseleave", function (e) {
    tl.to('.sm',{
      height: 0,
      duration:.1
    })
    document.querySelector(".sm").style.display = 'none';
  });
}

revealTospan();
loaderAnimation();
customCursor();
cardCursor();
hover(document.querySelector(".social"));