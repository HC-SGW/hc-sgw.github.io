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

    panel.querySelectorAll("pre").forEach((code) => {
      code.tabIndex = 0;
      code.setAttribute("role", "region");
      code.setAttribute("aria-label", "BibTeX citation");
    });

    if (kind === "bibtex" && navigator.clipboard) {
      const copyButton = document.createElement("button");
      copyButton.type = "button";
      copyButton.className = "copy-bibtex";
      copyButton.textContent = "Copy BibTeX";
      copyButton.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(panel.querySelector("pre")?.textContent.trim() ?? "");
          copyButton.textContent = "Copied";
        } catch {
          copyButton.textContent = "Copy failed";
        }
        setTimeout(() => (copyButton.textContent = "Copy BibTeX"), 2000);
      });
      panel.prepend(copyButton);
    }

    const syncState = () => {
      const isOpen = panel.classList.contains("open");
      trigger.setAttribute("aria-expanded", String(isOpen));
      panel.setAttribute("aria-hidden", String(!isOpen));
      panel.inert = !isOpen;
    };
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
