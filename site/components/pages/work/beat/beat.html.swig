---
title: Beat
klass: work-single
---

{% extends '../../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set work = beat %}
  {% include '../../../project/work/work.html.swig' %}

{% endblock %}
