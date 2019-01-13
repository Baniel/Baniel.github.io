---
title: Algorithm
layout: collection
permalink: /algorithm/
collection: algorithm
entries_layout: list
---

<div class="grid__wrapper">
{% for post in site.categories.algorithm %}
  {% include archive-single.html type="list" %}
{% endfor %}
</div>
