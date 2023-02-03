const callbackToBottom = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-to-bottom");
    } else {
      entry.target.classList.remove("animate-to-bottom");
    }
  });
};

const callbackToRight = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-to-right");
    } else {
      entry.target.classList.remove("animate-to-right");
    }
  });
};

const callbackFadeIn = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const callbackToTop = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-to-top");
    } else {
      entry.target.classList.remove("animate-to-top");
    }
  });
};

if (typeof window !== "undefined") {
  const toBottom = new IntersectionObserver(callbackToBottom);
  const targetsToBottom = document.querySelectorAll(".show-animate-to-bottom");
  targetsToBottom.forEach(function (target) {
    toBottom.observe(target);
  });

  const toRight = new IntersectionObserver(callbackToRight);
  const targetsToRight = document.querySelectorAll(".show-animate-to-right");
  targetsToRight.forEach(function (target) {
    toRight.observe(target);
  });

  const fadeIn = new IntersectionObserver(callbackFadeIn);
  const targetsFadeIn = document.querySelectorAll(".show-animate-fade-in");
  targetsFadeIn.forEach(function (target) {
    fadeIn.observe(target);
  });

  const toTop = new IntersectionObserver(callbackToTop);
  const targetsToTop = document.querySelectorAll(".show-animate-to-top");
  targetsToTop.forEach(function (target) {
    toTop.observe(target);
  });
}
