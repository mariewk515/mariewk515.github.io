/** Renders data/contact.json (object: email, optional address lines and note). */
Site.load("./data/contact.json", "contact-container", (container, contact) => {
  if (contact.email) {
    const p = Site.el("p", "contact-line", "Email: ");
    const a = document.createElement("a");
    a.href = `mailto:${contact.email}`;
    a.textContent = contact.email;
    p.appendChild(a);
    container.appendChild(p);
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
