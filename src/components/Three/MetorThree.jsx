import React, { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import * as THREE from 'three';


function MetorThree() {
  
    const ref = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
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
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(40, 200, 150);
        scene.add(light);
        const group = new THREE.Group();

        const axesHelper = new THREE.AxesHelper(50);
        const loader = new GLTFLoader();
        loader.load('1.glb', function (gltf) {
            gltf.scene.position.set(-300, -2.1, -9.2); // replace x, y, z with the desired coordinates
            gltf.scene.scale.set(30, 30, 30); // replace x, y, z with the desired coordinates
            gltf.scene.rotation.set(0, 0, 0); // replace x, y, z with the desired coordinates
            group.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
        loader.load('1.glb', function (gltf) {
            gltf.scene.position.set(-600, -300.1, -9.2); // replace x, y, z with the desired coordinates
            gltf.scene.scale.set(30, 30, 30); // replace x, y, z with the desired coordinates
            gltf.scene.rotation.set(0, 0, 0); // replace x, y, z with the desired coordinates
            group.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
        loader.load('1.glb', function (gltf) {
            gltf.scene.position.set(-300, -200.1, -600.2); // replace x, y, z with the desired coordinates
            gltf.scene.scale.set(40, 40, 40); // replace x, y, z with the desired coordinates
            gltf.scene.rotation.set(0, 0, 0); // replace x, y, z with the desired coordinates
            group.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
        loader.load('1.glb', function (gltf) {
            gltf.scene.position.set(-500, 200.1, 100.2); // replace x, y, z with the desired coordinates
            gltf.scene.scale.set(35, 35, 35); // replace x, y, z with the desired coordinates
            gltf.scene.rotation.set(0, 0, 0); // replace x, y, z with the desired coordinates
            group.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
        loader.load('1.glb', function (gltf) {
            gltf.scene.position.set(300, 200.1, 600.2); // replace x, y, z with the desired coordinates
            gltf.scene.scale.set(30, 30, 30); // replace x, y, z with the desired coordinates
            gltf.scene.rotation.set(0, 0, 0); // replace x, y, z with the desired coordinates
            group.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
        const loader2 = new GLTFLoader();
        loader2.load('2.glb', function (gltf) {
            gltf.scene.position.set(0, 100, -190.2); // replace x, y, z with the desired coordinates
            gltf.scene.scale.set(35, 35, 35); // replace x, y, z with the desired coordinates
            gltf.scene.rotation.set(0, 0, 0); // replace x, y, z with the desired coordinates
            group.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
        const loader3 = new GLTFLoader();
        loader3.load('3.glb', function (gltf) {
            gltf.scene.position.set(103.3, -200.1, -90.2); // replace x, y, z with the desired coordinates
            gltf.scene.scale.set(40, 40, 40); // replace x, y, z with the desired coordinates
            gltf.scene.rotation.set(0, 0, 0); // replace x, y, z with the desired coordinates
            group.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
        scene.add(group);
        // scene.add(axesHelper);
        camera.position.z = 1000;
        camera.position.x = 0;
        // camera.position.y = 15;
        group.rotation.y = -Math.PI * 0.05
        group.rotation.x = Math.PI * 0.1
        // group.scale.set(0.35 * 2.5, 0.35 * 2.5, 0.35 * 2.5)
        group.position.y = 0
        group.position.x = 0
        

        const animate = function () {
            requestAnimationFrame(animate);
            // camera.lookAt(group.position);
            group.rotation.x -= 0.0002
            group.rotation.y -= 0.0007
            group.rotation.z += 0.0009
            renderer.render(scene, camera);

        };

        animate();

    }, []);

    return <div className='h-screen w-full absolute -z-10  overflow-hidden opacity-60' ref={ref} />;
}

export default MetorThree