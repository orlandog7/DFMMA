document.addEventListener("DOMContentLoaded", () => {
// Load Header
fetch("header.html")
  .then(res => res.text())
  .then(html => {
    const headerEl = document.getElementById("header-placeholder");
    headerEl.innerHTML = html;

    // ✅ Force header container to have no white space
    headerEl.style.margin = "0";
    headerEl.style.padding = "0";

    setupDropdown(); // activate dropdown logic after header is injected
  });

  
    // Load Footer
    fetch("footer.html")
      .then(res => res.text())
      .then(html => {
        document.getElementById("footer-placeholder").innerHTML = html;
      });
  });
  
  // Dropdown hover logic
  function setupDropdown() {
    const wrapper = document.querySelector(".dropdown-wrapper");
    const menu = document.querySelector(".dropdown");
  
    if (!wrapper || !menu) return;
  
    let timeout;
  
    wrapper.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
      menu.style.display = "flex";
    });
  
    wrapper.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        menu.style.display = "none";
      }, 150);
    });
  
    menu.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
    });
  
    menu.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        menu.style.display = "none";
      }, 150);
    });
  }
  