document.addEventListener("turbo:load", () => {
  const toggle = document.getElementById("menu-toggle");
  const close = document.getElementById("menu-close");
  const menu = document.getElementById("menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.remove("hidden");
  });
  close.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});
