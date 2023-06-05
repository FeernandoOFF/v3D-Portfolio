<script>
  import {
    Mesh as MeshComponent,
    useLoader,
    Canvas,
    OrbitControls,
    T,
  } from "@threlte/core";
  import { spring } from "svelte/motion";
  import { degToRad } from "three/src/math/MathUtils";
  import { BufferGeometryLoader, MeshBasicMaterial } from "three";
  import { onMount } from "svelte";

  const loader = useLoader(
    BufferGeometryLoader,
    () => new BufferGeometryLoader()
  );

  let Face;
  const scale = spring(1);
  onMount(() => {
    loader.load(
      "https://threejs.org/examples/models/json/WaltHeadLo_buffergeometry.json",
      (obj) => {
        // obj.deleteAttribute("normal");
        // obj.deleteAttribute("uv");
        Face = obj;
      }
    );
  });
</script>

<div>
  <Canvas>
    {#if Face}
      <T.Group scale={0.05}>
        <MeshComponent
          geometry={Face}
          position={[-10, -10, -10]}
          material={new MeshBasicMaterial({ wireframe: true, color: "#fff" })}
        />
      </T.Group>
    {/if}
    <T.PerspectiveCamera makeDefault position={[0, -10, 15]} fov={24}>
      <OrbitControls
        autoRotate={true}
        maxPolarAngle={degToRad(80)}
        enableZoom={false}
        target={{ y: 0.5 }}
      />
    </T.PerspectiveCamera>

    <T.DirectionalLight castShadow position={[3, 10, 10]} />
    <T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
    <T.AmbientLight intensity={0.2} />

    <!-- Floor -->
    <T.Mesh receiveShadow rotation.x={degToRad(-90)} position={[0, -2, 0]}>
      <T.CircleGeometry args={[3, 72]} />
      <T.MeshStandardMaterial color="#413601" />
    </T.Mesh>
  </Canvas>
</div>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
