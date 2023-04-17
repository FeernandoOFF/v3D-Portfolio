<script lang="ts">
  // svelte
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { type Spring, spring } from "svelte/motion";
  import { onMount } from "svelte";

  // GSAP
  import { gsap } from "gsap";
  // Threejs
  import { Canvas, type Position, T } from "@threlte/core";
  import { GLTF, Grid, Text } from "@threlte/extras";
  import {
    BufferGeometry,
    Material,
    Mesh,
    PerspectiveCamera,
    Vector3,
  } from "three";

  let isSM: boolean;
  let isMD: boolean;
  let isLG: boolean;
  // 3D Bindings

  const xPos = spring(1);
  let cube: Mesh<BufferGeometry, Material | Material[]>;
  let gem: any;
  let camera: PerspectiveCamera;
  let mainLight: any;

  function responsiveValues(mobile: any, tablet?: any, desktop?: any) {
    if (isLG) return desktop || tablet || mobile;
    if (isMD) return tablet || mobile;
    if (isSM) return mobile;
    return desktop;
  }

  $: {
    if (cube) {
      // Scene Timeline
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#scene",
            scrub: true,
            markers: true,
            start: "top 30%",
            end: "200%",
            pin: true,
            onUpdate: (self) => {
              $xPos = +self.progress?.toFixed(1) * 3;
            },
          },
        })
        .to(camera.position, {
          z: 30,
          onUpdate: () => {
            camera.lookAt(new Vector3(-5, 1, 1));
          },
        })
        .to(mainLight.position, {
          x: -3,
          y: -2,
          z: 3,
          duration: 2.5,
        })
        .to(camera.position, {
          x: responsiveValues(4, -0.2),
          z: responsiveValues(40, 30),
          onUpdate: () => {
            console.log(camera);
            camera.lookAt(cube.position);
          },
        });
    }
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    isSM = window.innerWidth < 768;
    isMD = window.innerWidth > 767 && window.innerWidth < 1024;
    isLG = window.innerWidth > 1023;
  });
</script>

<div id="scene" class="w-screen -z-10">
  <Canvas>
    <!-- Controls -->
    <T.PerspectiveCamera
      makeDefault
      position={[responsiveValues(-5, -7, -7), 0, responsiveValues(30, 20, 13)]}
      bind:ref={camera}
      fov={responsiveValues(30, 24)}
    />

    <!-- Lights -->
    <T.DirectionalLight
      castShadow
      position={[-0.5, -1, 20]}
      intensity={10}
      bind:ref={mainLight}
    />

    <T.AmbientLight intensity={0.8} />

    <!-- Scene -->
    <!-- Box -->
    <T.Mesh position={[0, 0.5, 0]} castShadow let:ref bind:ref={cube}>
      <T.BoxGeometry />
      <T.MeshStandardMaterial color="#333333" />
    </T.Mesh>

    <!-- Text -->
    <Text
      text={`Hey! this is in 
development :)
Welcome ${$xPos} `}
      fontSize={1}
      visible={true}
      position={{ y: 3, x: 0, z: 0 }}
    />
    <!-- Crystal -->

    <GLTF
      url="/models/gemstone/scene.gltf"
      castShadow
      receiveShadow
      scale={0.05}
      position={{ x: -5, y: 1 }}
    />
    <GLTF
      url="/diamond.glb"
      castShadow
      receiveShadow
      scale={0.2}
      position={{ x: 2, y: 1 }}
    />

    <!-- Helpers -->
    <Grid infiniteGrid={true} />
  </Canvas>
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
