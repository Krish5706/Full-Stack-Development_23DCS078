const votes = {
  JavaScript: 0,
  Python: 0,
  Java: 0
};

function vote(language) {
  votes[language]++;
  updateVotes();
}

function updateVotes() {
  for (const lang in votes) {
    document.getElementById(lang).textContent = votes[lang];
  }
}

// Simulate real-time votes every 2 seconds
setInterval(() => {
  const languages = Object.keys(votes);
  const randomLang = languages[Math.floor(Math.random() * languages.length)];
  votes[randomLang]++;
  updateVotes();
}, 2000);
