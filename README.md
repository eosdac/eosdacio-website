# eosDAC Website
This is the static website for <https://eosdac.io>! It is based on the [Jekyll](https://jekyllrb.com/) framework and everybody is invited to help with keeping this website up to date and translated in many languages. It is structured in a way, that everybody can easily modify the markdown files for the different pages of this website and create a pull request to this repository for review and approval. Find a markdown reference here: <https://kramdown.gettalong.org/quickref.html>

## How to update a page?
The website is structured in a way to have the code (HTML/CSS) separated from the content (Markdown), so that contributors only need to edit simple markdown files and not touch any program code.

If you want to update a page, find the page and section of your content. Usually they are located in `_i18n/en/PAGE/SECTION.md`, news posts are located in `_i18n/en/_posts/DATE-POST.md`. Assets, such as images, are located in `assets/PAGE/IMAGE.png`.

Once you found the relevant section, you can use any text or Markdown editor of your liking and modify the file. You can even use the integrated Github Markdown online-editor, for example if you would like to change the first paragraph/section of the [how-to-vote](https://github.com/eosdac/eosdacio-website/blob/master/_i18n/en/how-to-vote/section1.md) page, you could edit it [directly on Github](https://github.com/eosdac/eosdacio-website/edit/master/_i18n/en/how-to-vote/section1.md).

![Find file](assets/readme/edit1.jpg)
<hr>

![Change it](assets/readme/edit2.jpg)

## How to translate?
The default language of this website is English [en], content in this language shall always be the primary source of truth.

Translating a page or section is very similar to updating a page, the only difference is that you have to create a file of the same name as in the english version in the sub-folder of your target language. So if you would like to translate `section1` of the `how-to-vote` page ([_i18n/en/how-to-vote/section1.md](https://github.com/eosdac/eosdacio-website/blob/master/_i18n/en/how-to-vote/section1.md)) into chinese, you would create the file `_i18n/zh-hans/how-to-vote/section1.md` and fill it with the translated content. That's it!

Some general translations, such as site title, header or footer content, are done in a YAML file, located at `_i18n/LANGUAGE.yml`, please refer to [_i18n/en.yml](https://github.com/eosdac/eosdacio-website/blob/master/_i18n/en.yml) for all translateable keys.

## How to suggest changes for discussion to the eosDAC Website?
 1. Fork to your own github account: https://github.com/eosdac/eosdacio-website
 2. Use tools you're familiar with to edit pages (Github website, Github Windows Client, etc)
 3. Create pull request back to the original upstream repository for your changes.

Since I'm using the command line tools, I go about it like so:
`git clone git@github.com:lukestokes/eosdacio-website.git`

Then I add an upstream so I can easily update my forked repo following the instructions here: <https://help.github.com/articles/configuring-a-remote-for-a-fork/>
```
# git remote add upstream https://github.com/eosdac/eosdacio-website.git
# git remote -v
origin    git@github.com:lukestokes/eosdacio-website.git (fetch)
origin    git@github.com:lukestokes/eosdacio-website.git (push)
upstream    https://github.com/eosdac/eosdacio-website.git (fetch)
upstream    https://github.com/eosdac/eosdacio-website.git (push)
```