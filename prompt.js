 function togglePrompt(id, button) {
      const container = document.getElementById(id);
      if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        button.textContent = 'Hide';
        button.setAttribute('aria-expanded', 'true');
      } else {
        container.classList.add('hidden');
        button.textContent = 'Continue Reading';
        button.setAttribute('aria-expanded', 'false');
      }
    }
  if(localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "loginpage.html"; // force login first
  }
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "loginpage.html";
  }