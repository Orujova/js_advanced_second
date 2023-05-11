const btn = document.querySelector(".btn");

const data = ["Message one", "Message two", "Message three", "Message four"];

function showRandomNotificationInDocument() {
  let color = "#" + Math.random().toString(16).slice(2, 8);

  let randomNumber = Math.floor(Math.random() * data.length);
  let text = data[randomNumber];

  var notificationElement = document.createElement("div");
  notificationElement.className = "notification";
  notificationElement.style.backgroundColor = color;
  notificationElement.textContent = text;

  document.body.appendChild(notificationElement);

  setTimeout(function () {
    notificationElement.style.display = "none";
  }, 5000);
}

btn.addEventListener("click", () => {
  showRandomNotificationInDocument();
});
