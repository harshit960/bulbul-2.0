import React, { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import * as THREE from 'three';
import gsap from 'gsap';
function AstroThree() {

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
          renderer.setPixelRatio(10);

      };

      handleResize();
      window.addEventListener('resize', handleResize);
      renderer.setPixelRatio(4)
      ref.current.appendChild(renderer.domElement);
      
      // Add a directional light
      const light = new THREE.DirectionalLight(0xffffff, 5);
      light.position.set(200, 10, 150);
      scene.add(light);
      const group = new THREE.Group();

      const axesHelper = new THREE.AxesHelper(50);
      const loader = new GLTFLoader();
      loader.load('astro.glb', function (gltf) {
          gltf.scene.position.set(-3.3, -8.1, -10.2); // replace x, y, z with the desired coordinates
          gltf.scene.scale.set(5, 5, 5); // replace x, y, z with the desired coordinates
          gltf.scene.rotation.set(0, .06, 0); // replace x, y, z with the desired coordinates
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
      group.position.y = -5
      group.position.x = 0
      

      const animate = function () {
          requestAnimationFrame(animate);
          // camera.lookAt(group.position);
          // group.rotation.x += 0.00005
          // group.rotation.y += 0.0005
          // group.rotation.z += 0.00005
          renderer.render(scene, camera);

      };
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth) * 2 - 1;
        const y = -(clientY / innerHeight) * 2 + 1;
        const targetX = x * 0.5;
        const targetY = y * 0.5 -3;

        // Smoothly move the group towards the target position
        gsap.to(group.position, {
        x: targetX,
        y: targetY,
        duration: 2, // Adjust the duration to control the smoothness of the movement
        ease: 'power2.out' // Adjust the easing function to control the acceleration/deceleration
        });
    };

    window.addEventListener('mousemove', handleMouseMove);
    // Create a purple color light
    const purpleLight = new THREE.PointLight(0xFF3666, 10, 0);
    scene.add(purpleLight);

    // Update the position of the purple light based on mouse movement
    const handleMouseMoveLight = (event) => {
        console.log("eir");
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth) * 2 - 1;
        const y = -(clientY / innerHeight) * 2 + 1;
        const targetX = x * 5;
        const targetY = y * 5;

        // Smoothly move the purple light towards the target position
        gsap.to(purpleLight.position, {
            x: targetX,
            y: targetY,
            z: -8,
            duration:0.5, // Adjust the duration to control the smoothness of the movement
            ease: 'power2.out' // Adjust the easing function to control the acceleration/deceleration
        });
    };

    window.addEventListener('mousemove', handleMouseMoveLight);
    function handleScale() {
        console.log(window.innerWidth);
        if (window.innerWidth < 638) {
            group.scale.set(0.35, 0.35, 0.35)
            group.position.y = -0

        }
        else if (window.innerWidth < 768) {
            group.scale.set(0.5 * 2.5, 0.5 * 2.5, 0.5 * 2.5)
            group.position.y = -0


        }
        else {
            group.scale.set(1, 1, 1)
            // group.position.y = -5

        }
    }
    handleScale()
    window.addEventListener('resize', handleScale);

    animate();

  }, []);

  return <div className='h-screen w-full -translate-y-20 absolute -z-20 overflow-hidden ' ref={ref} />;
}

export default AstroThree