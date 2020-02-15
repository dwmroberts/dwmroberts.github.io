---
layout: default
title: Exhibitions
permalink: /exhibitions
---
<div class="latest-posts">
  <ul>
    {% for post in site.posts %}
      <li>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt }}</p>
      </li>
    {% endfor %}
  </ul>
</div>
