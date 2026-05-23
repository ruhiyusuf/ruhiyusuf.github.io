---
layout: page
title: news
permalink: /news/
nav: true
nav_order: 2
---

<div class="news-list">

  <div class="news-item">
    <div class="news-date">2026.05</div>
    <div class="news-content">
      Joining <a href="https://lightmatter.co/">Lightmatter</a> as an Embedded Laser Intern, working on control and stabilization of multi-wavelength laser systems for photonic computing.
    </div>
  </div>

  <div class="news-item">
    <div class="news-date">2026.05</div>
    <div class="news-content">
      <p>Presented at <a href="https://cleoconference.org/">CLEO 2026</a> in Charlotte. Gave an oral presentation on wafer-scale Si₃N₄ photonic integrated circuit fabrication.</p>
      <div class="row mt-2">
        <div class="col-sm-4">
          <img src="/assets/img/cleo2026_sign.jpeg" class="img-fluid rounded" alt="CLEO 2026">
        </div>
        <div class="col-sm-8">
          <img src="/assets/img/cleo2026_talk.png" class="img-fluid rounded" alt="Presenting at CLEO 2026">
        </div>
      </div>
    </div>
  </div>

</div>

<style>
.news-list {
  margin-top: 1.5rem;
}
.news-item {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 1rem;
  padding: 1.2rem 0;
  border-bottom: 1px solid var(--global-divider-color);
}
.news-date {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  padding-top: 0.15rem;
  white-space: nowrap;
}
.news-content {
  font-size: 0.95rem;
  color: var(--global-text-color);
}
.news-content p {
  margin-bottom: 0.5rem;
}
</style>