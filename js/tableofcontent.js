document.addEventListener("DOMContentLoaded", () => {
  // Select all <section> elements that have an "id"
  const sections = document.querySelectorAll("section[id]");
  // Select all ToC links inside .table_of_contents
  const navLinks = document.querySelectorAll(".table_of_contents ul li a");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    // Figure out which <section> is currently in view
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      /*
        If the current scroll position (pageYOffset) 
        is >= top of the section minus 1/3 of its height,
        we consider that section 'current'.
      */
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update link styles based on "currentSection"
    navLinks.forEach((link) => {
      link.classList.remove("active");
      // Compare the link's #hash (minus '#') to the currentSection ID
      if (link.getAttribute("href").slice(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });
});
