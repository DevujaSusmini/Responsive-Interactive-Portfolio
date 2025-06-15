document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

function openContact() {
  document.getElementById("contactPanel").classList.add("show");
}

function closeContact() {
  document.getElementById("contactPanel").classList.remove("show");
}

fetch('https://api.github.com/users/DevujaSusmini/repos')
  .then(res => res.json())
  .then(repos => {
    const container = document.getElementById('repo-list');
    repos.slice(0, 5).forEach(repo => {
      const div = document.createElement('div');
      div.className = 'repo';
      div.innerHTML = `<h5>${repo.name}</h5><p>${repo.description || 'No description provided.'}</p>`;
      container.appendChild(div);
    });
  });