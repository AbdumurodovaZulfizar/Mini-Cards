import { add, wrap } from "lodash";
import "tailwindcss/tailwind.css";
window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".my_card"),
        wrapper = document.querySelector(".slide_wrapper"),
        inner_wrapper = document.querySelector(".wrapper"),
        width = getComputedStyle(wrapper).width,
        prev = document.querySelector("#prev"),
        next = document.querySelector("#next");
        inner_wrapper.style.width = 100*(slides.length)/3.5 + '%';
        inner_wrapper.style.transition = '0.5s ease';
  let offset = 0;

  slides.forEach(slide => {
    slide.style.width = width/3.5;
  })
  next.addEventListener("click", () => {
    if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))/3.5) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2)/3.5;
    }
    inner_wrapper.style.transform = `translateX(-${offset}px)`
  })

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = (+width.slice(0, width.length - 2) * (slides.length - 1))/3.5;
    } else {
      offset -= +width.slice(0, width.length - 2)/3.5;
    }
    inner_wrapper.style.transform = `translateX(-${offset}px)`
  })
})