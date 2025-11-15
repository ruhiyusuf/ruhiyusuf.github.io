---
layout: page
title: projects
permalink: /projects/
description: A selection of research and engineering projects.
nav: true
nav_order: 3
---

<div class="projects">

{% assign sorted_projects = site.projects | sort: "importance" | sort: "year" | reverse %}
{% assign years = sorted_projects | map: "year" | uniq %}

{% for year in years %}
  <div class="year-section">
    <h2 class="year">{{ year }}</h2>
    {% assign projects_in_year = sorted_projects | where: "year", year %}
    {% for project in projects_in_year %}
      <div class="proj-item">
        {% if project.image %}
          <div class="proj-thumb">
            <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
          </div>
        {% endif %}
        <div class="proj-info">
          <h3 class="proj-title">{{ project.title }}</h3>
          <p class="proj-desc">{{ project.description }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}

</div>


<style>
.projects {
  margin-top: 2rem;
}
.year-section {
  position: relative;
  margin-bottom: 3rem;
}
.year {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 2rem;
  font-weight: 200;
  color: #d0d0d0;
  margin: 0;
}
.proj-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}
.proj-thumb img {
  width: 160px;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.proj-info {
  max-width: 600px;
}
.proj-title {
  margin: 0 0 0.3rem 0;
  font-size: 1.05rem;
  font-weight: 500;
}
.proj-desc {
  margin: 0;
  color: #555;
  font-size: 0.95rem;
}
@media (max-width: 700px) {
  .proj-item {
    flex-direction: column;
    align-items: flex-start;
  }
  .year {
    position: static;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
}
</style>
