# Translate a page
The default language of this website is English [en], content in this language shall always be the primary source of truth.

After [creating a fork](https://help.github.com/articles/fork-a-repo) of this git repository, translating a page or section is very similar to updating a page, the only difference is that you have to create a file of the same name as in the english version in the sub-folder of your target language. All translateable content can be found inside the `_i18n/` folder.

So if you would like to translate `section1` of the `how-to-vote` page ([_i18n/en/how-to-vote/section1.md](https://github.com/eosdac/eosdacio-website/blob/master/_i18n/en/how-to-vote/section1.md)) into chinese, you would create the file `_i18n/zh-hans/how-to-vote/section1.md` and fill it with the translated content. That's it!

Some general translations, such as site title, header menu or footer content, are done in a YAML file, located at `_i18n/LANGUAGE.yml`, please refer to [_i18n/en.yml](https://github.com/eosdac/eosdacio-website/blob/master/_i18n/en.yml) for all translateable keys.

### Translate a blog posts
Translation of blog posts inside `_i18n/en/_posts/` is very similar to the translation of pages. Each blog posts is contained in a separate file, e.g. `2019-02-11-eosdac-dactivation-day-is-here-feb-11th-2019.md`.
* Create a file of the same name inside `_i18n/LANGUAGE/_posts/`
* Copy the english post's meta-data ([front matter](https://jekyllrb.com/docs/front-matter/)) and translate the `title` field.
* If there is a fully translated version of this posts, adopt the `external_link` field to point to the translated version, otherwise keep the link to the english version.
* Translate the first paragraph (up to 400 characters) of the blog post into your LANGUAGE. We only show the abstract (first paragraph), so you do not need to translate the whole article.

### Checking translation status
We are providing a scripts, which help to identify content in need of a (updated) translation.
* `show_files_to_be_translated.sh` inside the `_i18n/` folder
  * Can be run via `./show_files_to_be_translated.sh` from within the `_i18n` folder
  * Prints files in need of an update to the console output
* `check_all.sh` inside the `scripts/translation-status/` folder
  * Can be run via `scripts/translation-status/check_all.sh` from within the root folder of this website's git repository.
  * Prints it's output into the [translation_status](../translation_status) folder, one file per language (e.g. ko.txt, zh-hans.txt, ...)
  * The text files inside `translation_status/` display website documents which are still **TODO**, need an **UPDATE** or are a **DUPLICATE** of the english version (and thus should be deleted from the translation)

The `check_all.sh` script should be run from time to time and the results inside `translation_status/` should be commited to the git repository, so everybody can see the current translation status, without needing to run the script himself.