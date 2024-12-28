<script lang="ts">
    import {T as Threlte} from '@threlte/core';
	import { createTransition, Float } from '@threlte/extras';
    import * as THREE from 'three';
    import gsap from 'gsap';
	import { elasticIn, elasticOut } from 'svelte/easing';

    export let position: [number, number, number] = [0,0,0];
    export let geometry: THREE.BufferGeometry = new THREE.IcosahedronGeometry(3);
    export let rate = 0.5;

    let visible = false

    const materialParams = [
		{ color: "#ef5350", roughness: 0 },
		{ color: "#7e57c2", roughness: 0.4 },
		{ color: "#5c6bc0", roughness: 0.1 },
		{ color: "#42a5f5", roughness: 0.1 },
		{ color: "#26a69a", roughness: 0.1 },
		{ color: "#66bb6a", roughness: 0, metalness: 0.5 },
		{ color: "#ec407a", roughness: 0.1, metalness: 0.5 }
	];

    function getRandomMaterial() {
        return new THREE.MeshStandardMaterial(gsap.utils.random(materialParams));
    }

    function handleClick(event: MouseEvent) {

        if ('object' in event && event.object instanceof THREE.Mesh) {
            gsap.to(event.object.rotation, {
                x: `+=${gsap.utils.random(0, 3)}`,
                y: `+=${gsap.utils.random(0, 3)}`,
                z: `+=${gsap.utils.random(0, 3)}`,
                duration: 1.3,
                ease: 'elastic.out(1,0.3)',
                yoyo: true
            });

            event.object.material = getRandomMaterial();
        }
    }

    const bounce = createTransition((ref) => {
        return {
            tick(t) {
                if (t > 0) visible = true
                ref.scale.set(t,t,t)
            },
            easing: elasticOut,
            duration: gsap.utils.random(800,1200),
            delay: gsap.utils.random(0,500)
        }
    })

</script>

<Threlte.Group position={position.map((p) => p * 2)}>
    <Float speed={5 * rate} rotationSpeed={5 * rate} rotationIntensity={6 * rate} floatIntensity={5 * rate}>
        <Threlte.Mesh {visible} {geometry} in={bounce} material={getRandomMaterial()}
        interactive
        on:click={handleClick}

        ></Threlte.Mesh>
    </Float>
</Threlte.Group>