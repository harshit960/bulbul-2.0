import React, { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import * as THREE from 'three';

function StarsThree() {

    const ref = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for a transparent background
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;

            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            renderer.setPixelRatio(window.devicePixelRatio);

        };

        handleResize();
        window.addEventListener('resize', handleResize);
        renderer.setPixelRatio(4)
        ref.current.appendChild(renderer.domElement);
        
        // Add a directional light
        const light = new THREE.DirectionalLight(0xffffff, 40);
        light.position.set(40, 200, 150);
        scene.add(light);
        const group = new THREE.Group();

        const axesHelper = new THREE.AxesHelper(50);
        const loader = new GLTFLoader();
        loader.load('stars.glb', function (gltf) {
            gltf.scene.position.set(13.3, -2.1, -9.2); // replace x, y, z with the desired coordinates
            gltf.scene.scale.set(8, 6, 8); // replace x, y, z with the desired coordinates
            gltf.scene.rotation.set(0, 0, 0); // replace x, y, z with the desired coordinates
            group.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
        scene.add(group);
        // group.add(axesHelper);
        camera.position.z = 15;
        // camera.position.x = 0;
        // camera.position.y = 15;
        group.rotation.y = -Math.PI * 0.05
        group.rotation.x = Math.PI * 0.1
        group.scale.set(0.35 * 2.5, 0.35 * 2.5, 0.35 * 2.5)
        group.position.y = 0
        group.position.x = 0
        

        const animate = function () {
            requestAnimationFrame(animate);
            // camera.lookAt(group.position);
            group.rotation.x += 0.0005
            group.rotation.y += 0.0005
            group.rotation.z += 0.0005
            renderer.render(scene, camera);

        };

        animate();

    }, []);

    return <div className='h-screen w-full fixed -z-20 opacity-20 bg-chinese-black ' ref={ref} />;
}

export default StarsThree