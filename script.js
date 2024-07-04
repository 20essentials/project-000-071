console.log("Reference", "https://youtu.be/r2HijzmwZzk?si=kUxlusI1aIGuGgwU");
console.log("img ->", "https://wallhaven.cc/w/0pvog3");

const d = document,
  $body = d.body;

d.addEventListener("click", (e) => {
  if (e.target === $body) {
    e.target.classList.toggle("with-glitch");
  }
});
