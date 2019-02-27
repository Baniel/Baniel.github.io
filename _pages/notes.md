---
title: Notes
layout: collection
permalink: /notes/
paginate: 5
paginate_path: /page:num/
---

<div class="grid__wrapper">
{% for post in site.categories.notes %}
  {% include archive-single.html type="list" %}
{% endfor %}
</div>
