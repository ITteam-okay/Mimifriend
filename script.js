const responses = {
  happy: {
    text: "Ура! Делись своей радостью с друзьями 💖",
    img: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
    sound: "ding",
    background: "#fffacd"
  },
  sad: {
    text: "Обнимашки 💙 Всё обязательно наладится!",
    img: "https://cdn-icons-png.flaticon.com/512/742/742760.png",
    sound: "water",
    background: "#add8e6"
  },
  tired: {
    text: "Ты умничка, заслужила отдых. Пора расслабиться 🌙",
    img: "https://cdn-icons-png.flaticon.com/512/742/742773.png",
    sound: "water",
    background: "#f0e68c"
  },
  angry: {
    text: "Глубокий вдох... и всё будет хорошо! ❤️",
    img: "https://cdn-icons-png.flaticon.com/512/742/742774.png",
    sound: "ding",
    background: "#ffb6c1"
  },
  motivated: {
    text: "Твоя энергия — огонь! Жги! 🔥",
    img: "https://cdn-icons-png.flaticon.com/512/742/742775.png",
    sound: "ding",
    background: "#d1ffd6"
  }
};

function showMood(type) {
  const res = responses[type];
  document.getElementById("mood-img").src = res.img;
  document.getElementById("mood-text").textContent = res.text;
  document.getElementById("mood-response").classList.remove("hidden");

  // Изменение фона
  document.querySelector(".mood-section").style.background = res.background;

 
  
}

// Обработчик кнопки "Начать"
