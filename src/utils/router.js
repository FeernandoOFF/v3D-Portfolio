import * as turbo from "@hotwired/turbo";

turbo.start();

document.addEventListener("turbo:load", () => {
  document.addEventListener("turbo:before-render", beforeRender);
});

function beforeRender(event) {
  document.removeEventListener("turbo:before-render", beforeRender);
  event.preventDefault();

  // Browser doesn't support transition API
  if (!document.startViewTransition) {
    event.detail.resume();
    return;
  }

  // With a transition:

  document.startViewTransition(() => {
    event.detail.resume();
  });
}
