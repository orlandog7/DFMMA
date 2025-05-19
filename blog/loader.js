document.addEventListener("DOMContentLoaded", function () {
  // Fetch header
  fetch("/DFMMA/header.html")
    .then(res => res.text())
    .then(data => {
      const header = document.getElementById("header-placeholder");
      if (header) header.innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));

  // Fetch footer
  fetch("/DFMMA/footer.html")
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById("footer-placeholder");
      if (footer) footer.innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});
