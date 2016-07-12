---
layout: archive
permalink: /DesignPattern/
title: "Design Pattern"
author_profile: true
---

{% include base_path %}


{% for category in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ category | slugify }}" class="archive__subtitle">{{ category }} Daniel</h2>
  <h1>Daniel</h1>
  {% for post in posts.DesignPattern %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
