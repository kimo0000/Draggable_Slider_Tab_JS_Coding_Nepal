const tab = document.querySelector(".tabs");
const icons = document.querySelectorAll(".icon i");
const tabs = tab.querySelectorAll(".tab");

let isDragging = false;

tabs.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
  });
});

const handlIcon = () => {
  const scrollValue = Math.ceil(tab.scrollLeft);
  const maxScrollWidth = tab.scrollWidth - tab.clientWidth;
  // console.log(scrollValue, tab.scrollWidth, tab.clientWidth);
  // console.log(maxScrollWidth);
  icons[0].style.display = scrollValue > 0 ? "flex" : "none";
  icons[1].style.display = maxScrollWidth > scrollValue ? "flex" : "none";
};

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    tab.scrollLeft += icon.id === "right" ? 250 : -250;
    handlIcon();
  });
});

const handlTabs = (e) => {
  if (!isDragging) return;
  tab.scrollLeft -= e.movementX;
  tab.classList.add("dragging");
  handlIcon();
};

const dragStop = () => {
  isDragging = false;
  tab.classList.remove("dragging");
};

tab.addEventListener("mousedown", () => (isDragging = true));
tab.addEventListener("mousemove", handlTabs);
document.addEventListener("mouseup", dragStop);
