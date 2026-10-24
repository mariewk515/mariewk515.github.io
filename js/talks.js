/** Renders data/talks.json (array of talks, newest first). */
Site.load("./data/talks.json", "talks-container", (container, talks) => {
  talks.forEach(({ title, location, date, link, slidePath, slides }) => {
    const item = Site.el("div", "item");
    const heading = Site.el("p", "item-title");
    if (link) heading.appendChild(Site.link(link, title));
    else heading.textContent = title;
    item.appendChild(heading);

    const meta = [location, date].filter(Boolean).join(" — ");
    if (meta) item.appendChild(Site.el("p", "item-meta", meta));
    // `slides` (array of {label, path}) shows a row of clickable thumbnails, each opening the full-size image;
    // `slidePath` is the single-slide shorthand.
    const slideList = slides || (slidePath ? [{ label: "Slide", path: slidePath }] : []);
    if (slideList.length) {
      const row = Site.el("div", "slide-thumbs");
      slideList.forEach(({ label, path }) => {
        const a = Site.link(path, "");
        a.className = "slide-thumb";
        const img = document.createElement("img");
        img.src = path;
        img.alt = label;
        img.loading = "lazy";
        a.appendChild(img);
        a.appendChild(Site.el("span", null, label));
        row.appendChild(a);
      });
      item.appendChild(row);
    }
    container.appendChild(item);
  });
});
