  document.addEventListener("DOMContentLoaded", () => {
    // Get all sections and all TOC links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".table_of_contents ul li a");

    window.addEventListener("scroll", () => {
      let currentSection = "";

      // Determine which section is in view
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        /*
          If pageYOffset is >= the top of this section minus 
          some fraction of its height (for smoother activation),
          we consider that section 'current'.
        */
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      // Update TOC links
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === currentSection) {
          link.classList.add("active");
        }
      });
    });
  });
