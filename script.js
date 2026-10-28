
const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");

// Open and close the mobile navigation menu
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  // Close the menu after clicking a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Automatically update the copyright year
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Remind you to add your real GitHub and LinkedIn links
document.querySelectorAll("[data-profile-placeholder]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert(
        "Open index.html and replace # with your real profile URL."
      );
    }
  });
});
