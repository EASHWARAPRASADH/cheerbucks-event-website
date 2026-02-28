import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeHeroBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup with performance optimizations
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300; // Reduced for performance
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating geometric shapes
    const geometries = [
      new THREE.TetrahedronGeometry(0.5, 0),
      new THREE.OctahedronGeometry(0.3, 0),
      new THREE.IcosahedronGeometry(0.4, 0)
    ];

    const shapes = [];
    const colors = [0xfbbf24, 0xf59e0b, 0xd97706];

    geometries.forEach((geometry, index) => {
      const material = new THREE.MeshPhongMaterial({
        color: colors[index % colors.length],
        transparent: true,
        opacity: 0.7,
        shininess: 100,
        specular: 0xffffff
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 2
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      shapes.push({
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatAmplitude: Math.random() * 0.5 + 0.2
      });
      
      scene.add(mesh);
    });

    // Mouse interaction
    const mouse = new THREE.Vector2();
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouseX = mouse.x * 0.5;
      mouseY = mouse.y * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(mount);

    // Animation loop
    const clock = new THREE.Clock();
    let lastTime = 0;

    const animate = (currentTime) => {
      if (!isVisible) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      frameRef.current = requestAnimationFrame(animate);

      // Limit frame rate for performance
      if (currentTime - lastTime < 1000 / 60) {
        return;
      }
      lastTime = currentTime;

      const elapsedTime = clock.getElapsedTime();

      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.1;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.mesh.rotation.x += shape.rotationSpeed.x;
        shape.mesh.rotation.y += shape.rotationSpeed.y;
        shape.mesh.rotation.z += shape.rotationSpeed.z;

        // Floating motion
        shape.mesh.position.y += Math.sin(elapsedTime * shape.floatSpeed + index) * shape.floatAmplitude * 0.01;
        shape.mesh.position.x += Math.cos(elapsedTime * shape.floatSpeed + index) * shape.floatAmplitude * 0.01;
      });

      // Camera parallax effect
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (mount && rendererRef.current && rendererRef.current.domElement) {
        mount.removeChild(rendererRef.current.domElement);
      }
      
      renderer.dispose();
      
      // Dispose geometries and materials
      shapes.forEach(shape => {
        shape.mesh.geometry.dispose();
        shape.mesh.material.dispose();
      });
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [isVisible]);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0"
      style={{ 
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)'
      }}
    />
  );
};

export default ThreeHeroBackground;
