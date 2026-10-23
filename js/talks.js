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
    // `slides` (array of {label, path}) lists several slides; `slidePath` is the single-slide shorthand.
    const slideList = slides || (slidePath ? [{ label: "Slide", path: slidePath }] : []);
    if (slideList.length) {
      const links = Site.el("p", "paper-links");
      slideList.forEach(({ label, path }) => links.appendChild(Site.link(path, label)));
      item.appendChild(links);
    }
    container.appendChild(item);
  });
});
