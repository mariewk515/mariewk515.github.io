/** Sets the page title, nav name, and footer from data/profile.json on every page. */
Site.fetchJSON("./data/profile.json").then((profile) => {
  if (!profile || !profile.name) return;
  document.title = profile.name;
  const navName = document.getElementById("nav-name");
  if (navName) navName.textContent = profile.name;
  const footer = document.getElementById("footer-text");
  if (footer) footer.textContent = `© ${new Date().getFullYear()} ${profile.name}`;
});
