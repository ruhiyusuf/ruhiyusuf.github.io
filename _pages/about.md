---
layout: about
title: about
permalink: /
subtitle: <a href='https://ece.engin.umich.edu/'>EE @ UMich</a> · Integrated Photonics · Photonic Devices · Lightmatter '26

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am an undergraduate researcher at the University of Michigan working across integrated photonics, nonlinear optics, and experimental quantum photonics in Prof. Zheshen Zhang's <a href='https://quantumlab.engin.umich.edu/'>Quantum Engineering Lab</a>.

My research has focused on silicon nitride photonic integrated circuits, including device characterization, nonlinear optical measurements, and the generation and stabilization of dissipative Kerr solitons in microring resonators. I have also worked on experimental hardware for quantum optics and cryogenic measurements, spanning low-noise photodetector design, optical instrumentation, and mechanical and thermal design for dilution-refrigerator experiments.

My work has contributed to a co-authored publication in <i>Optics Letters</i> and two conference papers at <a href='https://cleoconference.org/'>CLEO 2026</a>, including an oral presentation on wafer-scale Si₃N₄ photonic integrated circuits. I also presented my undergraduate research at NCUR 2025 and was selected for Michigan's Undergraduate Research in Quantum (MURiQ) program.

This summer, I joined <a href='https://lightmatter.co/'>Lightmatter</a> as an Embedded Laser Intern, where I am working on automated characterization of multi-wavelength laser systems for optical interconnects. The experience has expanded my interest in how photonic devices interface with electronics, instrumentation, and computing systems.

I am broadly interested in integrated photonics and photonic device physics, particularly where device-level physics connects to larger optical and electronic systems. I plan to pursue a PhD in this area, with interests spanning optical interconnects, nonlinear and quantum photonics, and emerging photonic hardware.

---

## selected projects

<div class="selected-projects-grid">
  {% assign featured_projects = site.projects | where_exp: "p", "p.importance <= 3" | sort: "importance" %}
  {% for project in featured_projects %}
    <a href="{{ '/projects/' | relative_url }}" class="project-card">
      {% if project.image %}
        <div class="project-image">
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
          <div class="project-overlay">
            <h3 class="project-title">{{ project.title }}</h3>
          </div>
        </div>
      {% else %}
        <div class="project-placeholder">
          <h3 class="project-title">{{ project.title }}</h3>
        </div>
      {% endif %}
    </a>
  {% endfor %}
</div>

<p class="projects-link">
  <a href="{{ '/projects/' | relative_url }}">Check out my projects here →</a>
</p>

<style>
.selected-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.4rem;
  margin-top: 1.8rem;
}

/* Project card */
.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: #111; /* fallback for no image */
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

/* Image layer */
.project-image img {
  width: 100%;
  height: 170px;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  filter: brightness(85%);
  transition: filter 0.3s ease;
}
.project-card:hover img {
  filter: brightness(100%);
}

/* Overlay (gradient and blur glass effect) */
.project-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.8rem 0.9rem;
  background: linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.05));
  backdrop-filter: blur(4px);
  border-radius: 0 0 12px 12px;
}

/* Title text */
.project-title {
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* Link below grid */
.projects-link {
  margin-top: 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
}
.projects-link a {
  color: #0077cc;
  text-decoration: none;
  transition: color 0.2s ease;
}
.projects-link a:hover {
  color: #005fa3;
  text-decoration: underline;
}
</style>

