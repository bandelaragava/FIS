import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // The slim version loads all standard shapes, connections, and interactive modes perfectly
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="global-bg-wrapper">
      {/* 1. Cinematic Aurora Borealis Ambient Light Base */}
      <div className="aurora-orb aurora-1"></div>
      <div className="aurora-orb aurora-2"></div>
      <div className="aurora-orb aurora-3"></div>

      {/* 2. Intelligent, Interactive Web3/Data Node Particle Engine */}
      {init && (
        <Particles
          id="tsparticles"
          style={{ position: 'absolute', inset: 0, zIndex: 1 }}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" }, // The background connects its nodes to your actual mouse cursor!
                onClick: { enable: true, mode: "push" }, // Drop new logic bombs into the void on click
                resize: true,
              },
              modes: {
                grab: { distance: 180, links: { opacity: 0.7, color: "#00f2ff" } },
                push: { quantity: 3 }
              },
            },
            particles: {
              color: { value: ["#7000ff", "#00f2ff", "#ffffff", "#e600ff"] },
              links: {
                color: "random",
                distance: 140,
                enable: true,
                opacity: 0.25,
                width: 1.2,
                triangles: { enable: true, opacity: 0.05, color: "#7000ff" } // Complex polygon geometry effect!
              },
              move: {
                enable: true,
                speed: 0.5, // Slow, extremely deliberate premium movement
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
              number: {
                density: { enable: true, area: 900 },
                value: 90, // Rich density without destroying performance
              },
              opacity: {
                value: { min: 0.1, max: 0.7 },
                animation: { enable: true, speed: 0.5, sync: false }
              },
              shape: { type: ["circle", "triangle"] },
              size: {
                value: { min: 1, max: 3.5 },
                animation: { enable: true, speed: 1.5, sync: false }
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* 3. Ultra-Premium Hardware Film Grain Over-Layer */}
      <div className="premium-grain-overlay" style={{ zIndex: 2 }}></div>
    </div>
  );
}
