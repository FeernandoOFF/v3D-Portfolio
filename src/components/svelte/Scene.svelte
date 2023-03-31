<script lang="ts">
  // svelte
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { spring } from "svelte/motion";
  import { onMount } from "svelte";

  // GSAP
  import { gsap } from "gsap";
  // Threejs
  import { Canvas, InteractiveObject, OrbitControls, T } from "@threlte/core";
  import { Grid, Text } from "@threlte/extras";
  import { degToRad } from "three/src/math/MathUtils";

  // Code

  const scale = spring(1);
  let cube: any;

  $: {
    console.log(cube);
    if (cube) {
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
    }
  }
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
  });
</script>

<div id="scene">
  <Canvas>
    <T.PerspectiveCamera makeDefault position={[0, 0, 30]} fov={24}>
      <OrbitControls
        maxPolarAngle={degToRad(80)}
        enableZoom={false}
        target={{ y: 0 }}
      />
    </T.PerspectiveCamera>

    <T.DirectionalLight castShadow position={[-3, 10, 10]} />
    <T.DirectionalLight castShadow position={[3, 10, 10]} intensity={0.5} />
    <T.AmbientLight intensity={0.2} />

    <!-- Cube -->
    <T.Group scale={$scale}>
      <T.Mesh position={[-3, 0.5, 0]} castShadow let:ref bind:ref={cube}>
        <InteractiveObject
          object={ref}
          interactive
          on:pointerenter={() => ($scale = 1.5)}
          on:pointerleave={() => ($scale = 1)}
        />

        <T.BoxGeometry />
        <T.MeshStandardMaterial color="#333333" />
      </T.Mesh>
    </T.Group>

    <T.Mesh position={[4, 0.5, 0]} castShadow>
      <T.BoxGeometry />
      <T.MeshStandardMaterial color="#333333" />
    </T.Mesh>

    <!-- Text -->
    <Text
      text={`Hey! this is in 
development :)
Welcome`}
      fontSize={1}
      visible={true}
      position={{ y: 3, x: 0, z: 0 }}
    />

    <!-- Floor -->
    <!--     
    <T.Mesh receiveShadow rotation.x={degToRad(-90)}>
      <T.CircleGeometry args={[4, 72]} />
      <T.MeshStandardMaterial color="white" />
    </T.Mesh> -->
    <Grid infiniteGrid={true} />
  </Canvas>
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
