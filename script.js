const uploadBtn = document.getElementById("uploadBtn");
const noteUpload = document.getElementById("noteUpload");
const notesList = document.getElementById("notesList");

uploadBtn.addEventListener("click", () => {
  const file = noteUpload.files[0];
  if (!file) { alert("Please choose a file."); return; }

  const item = document.createElement("div");
  item.classList.add("note-item");
  item.innerHTML = `<b>${file.name}</b>`;

  const empty = notesList.querySelector(".empty");
  if (empty) empty.remove();

  notesList.appendChild(item);
  noteUpload.value = "";
});

// VIDEO SECTION
const subjectVideos = {
  physics: [
    "https://www.youtube.com/embed/Dr5ay0OBN3U",
    "https://www.youtube.com/embed/EVgk3oUxx40"
  ],
  maths: [
    "https://www.youtube.com/embed/PYBqF3rXW2Q",
    "https://www.youtube.com/embed/MXbH87kH8sU"
  ],
  python: [
    "https://www.youtube.com/embed/kqtD5dpn9C8",
    "https://www.youtube.com/embed/_uQrJ0TkZlc"
  ]
};

const subjectSlider = document.getElementById("subjectSlider");
const videoContainer = document.getElementById("videoContainer");

function loadVideos(subject) {
  videoContainer.innerHTML = "";
  subjectVideos[subject].forEach(link => {
    videoContainer.innerHTML += `<iframe src="${link}" allowfullscreen></iframe>`;
  });
}

loadVideos("physics");

subjectSlider.addEventListener("change", () => loadVideos(subjectSlider.value));

// GLOBAL SEARCH
const globalSearch = document.getElementById("globalSearch");
const globalSearchBtn = document.getElementById("globalSearchBtn");

globalSearchBtn.addEventListener("click", () => {
  const query = globalSearch.value.toLowerCase();
  const items = document.querySelectorAll(".note-item");

  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(query)
      ? "block"
      : "none";
  });
});
