---
title: Scale
---

{% extends '../../../../../project/templates/default/default.html.swig' %}
{% block content %}

{% for scale in scale %}
  <aside class="aside">
    <h3 class="aside__title">{{ scale.name | capitalize }}</h3>
    <div class="box">
      <dl class="scale--{{ scale.name }}">
        <dt>{{ scale.description }}</dt>
        {% for property in scale.properties %}
          <dd>{{ property.name }}: {{ property.value }}</dd>
        {% endfor %}
      </dl>
    </div>
  </aside>
{% endfor %}

{% endblock %}
