document.addEventListener("DOMContentLoaded", () => {
    const headings = [...document.querySelectorAll(".doc-content .doc-section h2")];
    const toc = document.querySelector("#toc");

    if (!toc || headings.length === 0) return;

    const createId = (text) =>
        text
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "_")
            .replace(/[^\w-]/g, "");

    const ul = document.createElement("ul");

    headings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = createId(heading.textContent);
        }

        const li = document.createElement("li");
        const link = document.createElement("a");

        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;

        if (index === 0) {
            link.classList.add("active");
        }

        li.appendChild(link);
        ul.appendChild(li);
    });

    toc.appendChild(ul);

    const tocLinks = [...document.querySelectorAll("#toc a")];

    const observer = new IntersectionObserver((entries) => {
        const visibleHeading = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleHeading) return;

        const activeIndex = headings.indexOf(visibleHeading.target);

        tocLinks.forEach(link => link.classList.remove("active"));

        if (tocLinks[activeIndex]) {
            tocLinks[activeIndex].classList.add("active");
        }
    }, {
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75, 1]
    });

    headings.forEach(heading => observer.observe(heading));
});