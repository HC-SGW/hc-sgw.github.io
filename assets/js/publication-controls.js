// Add keyboard and screen-reader support to al-folio's publication toggles.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".publications a.abstract, .publications a.bibtex").forEach((trigger, index) => {
    const scope = trigger.closest(".links")?.parentElement;
    const kind = trigger.classList.contains("abstract") ? "abstract" : "bibtex";
    const panel = scope?.querySelector(`div.${kind}.hidden`);
    if (!panel) return;

    panel.id ||= `publication-${kind}-${index}`;
    trigger.tabIndex = 0;
    trigger.setAttribute("role", "button");
    trigger.setAttribute("aria-controls", panel.id);
    trigger.setAttribute("aria-label", kind === "abstract" ? "Toggle publication abstract" : "Toggle BibTeX citation");

    const syncState = () => trigger.setAttribute("aria-expanded", String(panel.classList.contains("open")));
    syncState();
    new MutationObserver(syncState).observe(panel, { attributes: true, attributeFilter: ["class"] });

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        trigger.click();
      }
    });
  });
});
