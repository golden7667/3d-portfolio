import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function TechGlobe3D() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Group to hold everything
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Glowing Core Sphere
    const coreGeo = new THREE.SphereGeometry(3.5, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Inner Solid Sphere
    const innerGeo = new THREE.SphereGeometry(2.8, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x0a192f,
      transparent: true,
      opacity: 0.8
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 2. Orbital Rings
    const ring1Geo = new THREE.RingGeometry(4.8, 5.0, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.RingGeometry(5.8, 6.0, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x9055ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 4;
    mainGroup.add(ring2);

    // 3. Floating Skill Nodes on Sphere Surface
    const techNodes = [
      { name: 'Python', color: 0x38bdf8, lat: 0.5, lon: 1.2 },
      { name: 'React', color: 0x00f2fe, lat: -0.8, lon: 2.5 },
      { name: 'OpenCV', color: 0x9055ff, lat: 1.1, lon: -0.5 },
      { name: 'FastAPI', color: 0x10b981, lat: -1.2, lon: -1.8 },
      { name: 'MySQL', color: 0xf59e0b, lat: 0.2, lon: -2.8 },
      { name: 'sklearn', color: 0xec4899, lat: -0.3, lon: 0.4 }
    ];

    const nodeGroup = new THREE.Group();
    mainGroup.add(nodeGroup);

    techNodes.forEach((node) => {
      const radius = 4.2;
      const x = radius * Math.cos(node.lat) * Math.cos(node.lon);
      const y = radius * Math.sin(node.lat);
      const z = radius * Math.cos(node.lat) * Math.sin(node.lon);

      const nodeGeo = new THREE.SphereGeometry(0.32, 16, 16);
      const nodeMat = new THREE.MeshBasicMaterial({ color: node.color });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      nodeGroup.add(nodeMesh);

      // Connecting line to center
      const points = [];
      points.push(new THREE.Vector3(0, 0, 0));
      points.push(new THREE.Vector3(x, y, z));
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: node.color,
        transparent: true,
        opacity: 0.25
      });
      const line = new THREE.Line(lineGeo, lineMat);
      nodeGroup.add(line);
    });

    // Outer Orbiting Satellites / Cubes
    const cubeCount = 12;
    const cubeGroup = new THREE.Group();
    mainGroup.add(cubeGroup);

    for (let i = 0; i < cubeCount; i++) {
      const cubeGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const cubeMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f2fe : 0x9055ff,
        wireframe: true
      });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      const angle = (i / cubeCount) * Math.PI * 2;
      const r = 6.8;
      cube.position.set(Math.cos(angle) * r, (Math.random() - 0.5) * 3, Math.sin(angle) * r);
      cubeGroup.add(cube);
    }

    // Interactivity: Drag to rotate
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onPointerDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      mainGroup.rotation.y += deltaX * 0.008;
      mainGroup.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      if (!isDragging) {
        mainGroup.rotation.y += 0.005;
        coreMesh.rotation.x = t * 0.2;
        ring1.rotation.z = t * 0.3;
        ring2.rotation.z = -t * 0.25;
        cubeGroup.rotation.y = -t * 0.4;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      domEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center cursor-grab active:cursor-grabbing"
    >
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-mono rounded-full border transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
            : 'bg-slate-900/60 border-slate-700 text-slate-400'
        }`}
      >
        {isHovered ? '🖱️ Drag to rotate 3D Tech Globe' : '⚡ 3D Interactive Globe'}
      </div>
    </div>
  );
}
