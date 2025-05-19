document.addEventListener("DOMContentLoaded", function () {
  // Fetch header
  fetch("https://orlandog7.github.io/DFMMA/header.html")
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById("header-placeholder");
      if (header) header.innerHTML = data;
    });

  // Fetch footer
  fetch("https://orlandog7.github.io/DFMMA/footer.html")
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById("footer-placeholder");
      if (footer) footer.innerHTML = data;
    });
});
