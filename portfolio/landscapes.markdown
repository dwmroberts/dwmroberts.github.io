---
layout: default
title: Landscapes
permalink: /portfolio/landscapes
images:
  - image_path: /img/portfolio/baringo-teddy-bear.jpg
    title: Baringo
  - image_path: /img/portfolio/black-and-white.jpg
    title: Black and white
  - image_path: /img/portfolio/flowers.jpg
    title: Flowers
  - image_path: /img/portfolio/ink-stains.jpg
    title: Ink stains
  - image_path: /img/portfolio/ink-streaks.jpg
    title: Ink streaks
  - image_path: /img/portfolio/insects.jpg
    title: Insects
  - image_path: /img/portfolio/milgis.jpg
    title: Milgis
  - image_path: /img/portfolio/supporting-work.jpg
    title: Supporting work
  - image_path: /img/portfolio/tissue-and-ink.jpg
    title: Tissue and ink
---

<div class="slick">
  {% for image in page.images %}
    <div>
      <h3>{{ image.title }}</h3>
      <img class="slick-img" src="{{ image.image_path }}" alt="{{ image.title}}"/>
    </div>
  {% endfor %}
</div>
