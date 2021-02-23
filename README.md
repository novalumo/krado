# Krado - A New CSS Framework

[![GitHub issues](https://img.shields.io/github/issues/novalumo/krado?style=for-the-badge)](https://github.com/novalumo/krado/issues)
[![GitHub forks](https://img.shields.io/github/forks/novalumo/krado?style=for-the-badge)](https://github.com/novalumo/krado/network)
[![GitHub stars](https://img.shields.io/github/stars/novalumo/krado?style=for-the-badge)](https://github.com/novalumo/krado/stargazers)
[![GitHub license](https://img.shields.io/github/license/novalumo/krado?style=for-the-badge)](https://github.com/novalumo/krado)

**Latest version: 1.0.0b**

## How to compile SCSS to CSS

```bash
sass sass/:css/ --sourcemap=none --style compressed --watch
```

```bash
sass bootstrap.scss:../krado.css --sourcemap=none --style compressed --watch
```

### --style option

* expanded: default CSS style
* nested: default value, nested
* compressed: compressed

## Overview

This is Novalumo's CSS framework project. Krado means "Grid" or "Framework" in Esperanto. Krado is made based on [Bootstrap](https://getbootstrap.com/).

### Examples

Of course, you can use class names similar to Bootstrap.

```html
<div class="container">
    <div class="row">

        <div class="col-4">
            Hello, World!! How are you?
        </div>

        <div class="col-8">
            Bonan Tagon!! Kiel vi fartas?
        </div>

    </div>
</div>
```

## What's included

We provide the following CSS and JavaScript files:

```text
krado/
├── css/
│   ├── krado.css
│   ├── krado.min.css
│   └── and...
└── js/
    ├── krado.js
    ├── krado.min.js
    └── and...
```

---

## Creators

**Kento Shirasawa**

* CEO and Founder of Novalumo
* [https://www.novalumo.llc/](https://www.novalumo.llc/)
