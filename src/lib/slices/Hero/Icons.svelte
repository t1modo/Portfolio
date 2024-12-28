<script lang="ts">
    import {T as Threlte} from "@threlte/core";
    import * as THREE from 'three';
	import Geometry from "./Geometry.svelte";
	import { ContactShadows, Environment, interactivity, transitions } from "@threlte/extras";

    interactivity();
    transitions();
</script>

<Threlte.PerspectiveCamera
    makeDefault
    position={[0,0,25]}
    aspect={1}
    fov={30}
    near={1}
    far={40} 
/>

<Environment files="smallroom.hdr" path="/" format="hdr" />

<ContactShadows position={[0, -3.5, 0]} opacity={0.65} scale={40} blur={1} far{9} />

<Geometry position={[0,0,0]} rate={0.3} geometry={new THREE.IcosahedronGeometry(3)} />
