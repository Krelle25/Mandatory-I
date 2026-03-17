document.addEventListener("DOMContentLoaded", () => {
    const headings = Array.from(document.querySelectorAll(".doc-content .doc-section h2"));
    const aside = document.querySelector("#toc");

    if (!aside || !headings.length) return;

    const ul = document.createElement("ul");
    aside.appendChild(ul);

    headings.forEach((heading, index) => {
        let id = heading.id;

        if (!id) {
            id = heading.textContent
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "_")
                .replace(/[^\w-]/g, "");
            heading.setAttribute("id", id);
        }

        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = `#${id}`;
        a.textContent = heading.textContent;

        if (index === 0) {
            a.classList.add("active");
        }

        li.appendChild(a);
        ul.appendChild(li);
    });

    const tocAnchors = Array.from(aside.querySelectorAll("a"));

    const observer = new IntersectionObserver(
        (entries) => {
            const visibleEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (!visibleEntry) return;

            const index = headings.indexOf(visibleEntry.target);

            tocAnchors.forEach((anchor) => anchor.classList.remove("active"));

            if (tocAnchors[index]) {
                tocAnchors[index].classList.add("active");
            }
        },
        {
            rootMargin: "-120px 0px -60% 0px",
            threshold: [0.1, 0.25, 0.5, 0.75, 1]
        }
    );

    headings.forEach((heading) => observer.observe(heading));
});