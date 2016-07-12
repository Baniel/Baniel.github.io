---
layout: archive
permalink: /Algorithm/
title: "Python Algorithm"
author_profile: true
---

{% include base_path %}

<div class="grid__wrapper">
  {% for post in posts.LeetCode %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
