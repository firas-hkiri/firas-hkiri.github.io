// List of component IDs that match file names in the components folder
const components = [
  "header",
  "hero",
  "about",
  "skills",
  "projects",
  "contact",
  "footer",
];

components.forEach((component) => {
  fetch(`components/${component}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not load ${component}.html`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(component).innerHTML = data;
    })
    .catch((error) =>
      console.error(`Error loading ${component} component:`, error)
    );
});
