const slots = document.querySelectorAll(".slot");

// for getting the active class on click
slots.forEach((slot) => {
  slot.addEventListener("click", () => {
    removeActiveClasses();
    slot.classList.add("active");
  });
});

// for removing previous active/default class
const removeActiveClasses = () => {
  slots.forEach((slot) => {
    slot.classList.remove("active");
  });
};