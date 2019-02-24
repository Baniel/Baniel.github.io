---
title: Notes
layout: collection
permalink: /notes/
collection: notes
entries_layout: list
---

<div class="grid__wrapper">
{% for post in site.categories.notes %}
  {% include archive-single.html type="list" %}
{% endfor %}
</div>
