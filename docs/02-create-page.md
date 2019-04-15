# Create a new page

To create a new page for the website, you need to

* Create a new HTML page frame inside the website's root directory, e.g. copy the `how-to-vote.html` file to `my-new-page.html`
* Adopt the [front matter](https://jekyllrb.com/docs/front-matter/) (meta-data) of this new page frame (inside the HTML file):
   * `layout` selects the header/footer frame from `_layouts/`
   * `title` is **optional** and should only be given, if this new page shall be visible in the main header- & footer-menus. It specifies the translation key for the new page's title -> this key needs to be added (translated) in `_i18n/en.yml` -> `pages:`
   * `namespace` is a unique id of this page (same for all languages), and can be used to link to this page via the `translate_link my-new-page` macro
   * `permalink` is the browser visible URL of this page, should be SEO friendly

```
---
layout: default
title: pages.myNewPage

namespace: my-new-page
permalink: /my-new-page/
---
```

* Create the file structure & markdown files needed for your page content, e.g. create a `_i18n/en/my-new-page` folder, which contains `section1.md` & `section2.md`
   * Include those markdown files inside the HTML page frame via the `translate_file my-new-page/section1.md` macro
   * Adopt the HTML structure/sections as needed (e.g. via Bootstrap CSS) and create corresponding markdown files inside your `_i18n/en/my-new-page/` folder, which you include into your HTML via the `translate_file` macro.
* Create an **optional** stylesheet inside `_sass/my-new-page.scss` and import it via `_sass/custom.scss` -> `@import 'my-new-page.scss';`
   * Also adopt the main CSS class of the `my-new-page.html` page frame (first line of HTML, directly after the front-matter): `<div class="my-new-page">`
   * This way you can write CSS rules inside `my-new-page.scss`, which only apply for this page, e.g.: `.my-new-page p { color: red }`