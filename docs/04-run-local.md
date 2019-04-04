# Run the website locally
You can run a local copy of this website on your computer, this way you see the changes you make to the code or content of the website documents in real time, after reloading the local website. This is very helpful for translations or generic working on the website, as your can directly verify your changes before submitting them to the upstream/original git repository of this website.

### How run the website in live-mode?
1. Install the [Ruby](https://jekyllrb.com/docs/installation/) and [Jekyll](https://jekyllrb.com/docs/) development tools
  `gem install jekyll bundler`
2. Change into the eosdacio-website/ directory
  `cd eosdacio-website/`
3. Install the Ruby Gem dependencies, used by the Jekyll Gem (e.g. for new pagination, translation, ...)
  `bundler install`
4. Run the website on your local computer
  `jekyll serve`

Steps 1.-3. are setup commands and are usually not needed, only for the first time you run the website (or if the dependencies changed). Normally, it is enough to run `jekyll s` inside the website's root directory.

After the compilation (generation of the HTML/CSS code) finished successfuly, you will see an output similar to this and will be able to access your local copy of the website at <http://localhost:4000>. After you changed a file, **Jekyll** will automatically re-generate the latest code and you can refresh your browser (using the **F5** key), to see your latest changes.
```
                    done in 10.603 seconds.
 Auto-regeneration: enabled for '/home/user/eos/eosdacio-website'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

#### Troubleshooting
If you are trying to run the site locally and get the below encoding error on windows
`Liquid exception : incompatible character encodings : UTF - 8 ad IMB437`

Run `chcp 65001` before running `jekyll serve`

Follow the detailed guide on the link below to learn how to run Jekyll on Windows. 
https://jekyllrb.com/docs/installation/windows/

### How to build and deploy the website?
Deploying the website is usually done manually by one of the webmasters (@lukestokes, @MichaelY, @RobAllen in [Discord](https://discord.io/eosdac)), as they have the access rights to the web-server where eosdac.io is hosted. In the future the website might be hosted on IPFS, using an automatic process.

Building the website is very similar to running it locally, you need to execute the same setup steps from above (e.g. `gem install jekyll bundler` and `bundler install`), but then execute `jekyll build` to generate the static website.

To deploy the website:
1. Fetch the latest changes from the `upstream` git repository
  `git fetch upstream`
2. Merge the latest changes into the `deploy` branch
  `git checkout deploy`
  `git merge upstream/deploy`
3. Re-build the latest HTML/CSS code for the website
  `jekyll build`
4. Commit the generated files inside the `_site/` folder
  `git add _site/`
  `git commit -m "Re-build website`
5. Push the changes to the upstream/deploy branch
  `git push upstream deploy`
6. Manually copy the files from the `_site/` folder inside the `upstream/deploy` branch to the web-server, e.g. via a `git pull` command


