// Get references to the button and div elements
const clickButton = document.getElementById("clickButton");
const clickCountDisplay = document.getElementById("clickCount");
const contentrDiv = document.getElementById("content");
const img = document.createElement("img");
img.src = "./assets/achievement.jpg";
const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart";
restartBtn.addEventListener("click", handleRestart);

function handleRestart() {
  localStorage.setItem("clickCount", 0);
  window.location.reload();
}

// Function to handle button clicks
function handleClick() {
  // Retrieve current click count from localStorage
  let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;

  // Increment click count
  clickCount++;

  // Save updated click count to localStorage
  localStorage.setItem("clickCount", clickCount);

  // Update the display
  clickCountDisplay.textContent = clickCount;
  setContent(clickCount);
}

// Add click event listener to the button
clickButton.addEventListener("click", handleClick);

// Initialize click count display when the page loads
window.onload = function () {
  let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;
  clickCountDisplay.textContent = clickCount;
  setContent(clickCount);
};

function setContent(clicks) {
  switch (clicks) {
    case 0:
      contentrDiv.textContent = "Kiss me!!!";
      break;
    case 1:
      contentrDiv.textContent = "Thank you!!!";
      break;
    case 10:
      contentrDiv.textContent = "I appreciate it!!!";
      break;
    case 20:
      contentrDiv.textContent = "I love you too!!!";
      break;
    case 50:
      contentrDiv.textContent = "Wow!!!";
      break;
    case 100:
      contentrDiv.textContent = "More kisses!!!";
      break;
    case 200:
      contentrDiv.textContent = "Damn";
      break;
    case 201:
      contentrDiv.textContent = "Heh!!!";
      break;
    case 205:
      contentrDiv.textContent = "Continue!!!";
      break;
    case 300:
      contentrDiv.textContent = "I love you to the moon and back!!!";
      break;
    case 400:
      contentrDiv.textContent = "I adore you!!!";
      break;
    case 500:
      contentrDiv.textContent = "You rock my world!!!";
      break;
    case 600:
      contentrDiv.textContent = "I love you more each day!!!";
      break;
    case 700:
      contentrDiv.textContent = "Te amo!!!";
      break;
    case 800:
      contentrDiv.textContent = "I'm smitten with you!!!";
      break;
    case 900:
      contentrDiv.textContent = "Je t'aime!!!";
      break;
    case 990:
      contentrDiv.textContent = "Ich liebe dich!!!";
      break;
    case 1000:
      contentrDiv.textContent = ":D last one!!!";
      break;
    case 1001:
      contentrDiv.textContent = "";
      contentrDiv.appendChild(img);
      contentrDiv.appendChild(restartBtn);
      clickButton.remove();
      break;
  }
}
