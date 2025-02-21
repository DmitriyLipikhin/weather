// source/scripts/index.js
var fieldDate = document.querySelector(".weather-info__time");
var createTime = () => {
  let today = /* @__PURE__ */ new Date();
  let hours = today.getHours().toString().padStart(2, "0");
  let minutes = today.getMinutes().toString().padStart(2, "0");
  const option = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric"
  };
  const currentDate = today.toLocaleDateString("ru-RU", option);
  fieldDate.textContent = `${hours}:${minutes} ${currentDate}`;
};
var updateTime = () => {
  document.addEventListener("DOMContentLoaded", () => {
    createTime();
    setInterval(createTime, 1e3);
  });
};
export {
  updateTime
};
//# sourceMappingURL=index.js.map
