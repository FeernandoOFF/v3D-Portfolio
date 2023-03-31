---
Name: GSAP Large scroll
description: "This script allows GSAP scroll trigger to set a dynamic viewport
  height to the target, useful to not use it on "
Snippet:
  code: |-
    gsap.to(cube.scale, {
      x: 3,
      scrollTrigger: {
        trigger: "#scene",
        scrub: true,
        markers: true,
        start: "top 30%",
        // end: "400%",
        pin: true,
      },
    });
  lang: javascript
---
