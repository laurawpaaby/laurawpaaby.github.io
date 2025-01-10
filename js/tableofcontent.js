document.addEventListener("DOMContentLoaded", () => {
  const toc = document.querySelector(".table_of_contents ul");
  const headings = document.querySelectorAll("h2, h3");

  headings.forEach((heading) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;

    // Add a class to style nested H3 under H2
    if (heading.tagName === "H3") {
      li.classList.add("nested");
    }

    li.appendChild(link);
    toc.appendChild(li);
  });

  // Highlight active section on scroll
  const links = toc.querySelectorAll("a");
  window.addEventListener("scroll", () => {
    let currentId = "";
    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentId = heading.id;
      }
    });

    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href").slice(1) === currentId);
    });
  });
});
