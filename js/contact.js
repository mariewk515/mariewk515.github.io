/**
 * Renders data/contact.json (object: email, optional address lines and note).
 * The email is stored and shown spam-safe (e.g. "name[@]example.edu") as plain
 * text, with no mailto: link, so scrapers can't harvest it.
 */
Site.load("./data/contact.json", "contact-container", (container, contact) => {
  if (contact.email) {
    container.appendChild(Site.el("p", "contact-line", `Email: ${contact.email}`));
  }
  if (contact.address && contact.address.length) {
    const p = Site.el("p", "contact-line");
    contact.address.forEach((line, i) => {
      if (i) p.appendChild(document.createElement("br"));
      p.appendChild(document.createTextNode(line));
    });
    container.appendChild(p);
  }
  if (contact.note) container.appendChild(Site.el("p", "contact-line", contact.note));
});
