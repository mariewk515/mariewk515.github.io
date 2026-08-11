/** Renders data/fellowships.json (array of fellowships/scholarships/grants/awards, newest first). */
Site.load("./data/fellowships.json", "fellowships-container", (container, items) => {
  items.forEach(({ title, organization, date, description }) => {
    const item = Site.el("div", "item");
    item.appendChild(Site.el("p", "item-title", title));

    const meta = [organization, date].filter(Boolean).join(" — ");
    if (meta) item.appendChild(Site.el("p", "item-meta", meta));

    if (description) {
      item.appendChild(Site.el("p", "item-description", description));
    }
    container.appendChild(item);
  });
});
