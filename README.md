# RavenSpace Hub Site

## Overview

This repository contains the source code and content used for generating RavenSpace Publishing's Hub Site. The build process has been automated through Cloudflare Pages, so whenever a commit is made to this repository, the site automatically gets rebuilt and updated. While content can be edited by authorized editors through the attached content management system, both content and source code can be edited by authorized contributors in this repository.

## Technology

The site is built on the following technologies:

- Static Site Generator: [Next.js](https://nextjs.org/docs)
- Content Management System: [Tina CMS](https://tina.io/docs/)
- JS Framework: [React](https://react.dev/learn)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com/docs)
- Deployment: [Cloudflare Pages](https://developers.cloudflare.com/pages)

Familiarizing oneself with these technologies can be extraordinarily helpful for navigating this repository and making complex changes to the source code and configuration files. For those seeking to make minor tweaks to the source code, just having Next.js and Tailwind's documentation available for reference should be more than enough.

## Installation (Development)

Because this package is built as a Node package, the installation process is quite simple:

1. Install [Node.js](https://nodejs.dev/)
2. Clone this repository and open your terminal at the repository
3. Run the following command `npm install` to install all the dependencies listed in /package.json
4. Once the package and its dependencies have been installed, run `npm run dev` in the terminal

The last step will run the Next.js in development mode, which intakes the source code found in the /src directory and outputs the static HTML while providing a simple server, where the site can be previewed in your browser at http://localhost:3000. Any changes made to the source code or content will cause the Next.js to rebuild the site and reload your browser to reflect the changes.

## Managing Content

The safest and most effective way to manage content is through Tina CMS, which can be accessed by authorized users [here](https://www.ravenspacepublishing.org/admin/index.html).

Alternatively, content can be managed directly through this repository by editing the front matter and markdown in the associated markdown or MDX files. For example, to modify the content in the /about-us page, go to /content/about-us/index.mdX and either adjust the values in the YAML front matter or the markdown content in the body of the file. To adjust the content in the sites navigation header or footer, go to /content/site.config.json, where you can update the navigation links, copyright, and support note.

## Changing Page Styling and Structure

To make more complex changes to the site, find the corresponding page that you would like to edit in the /src/pages/ directory. For example, if you would like to add an element to the site's home page, first open /src/pages/index.js in a code editor. Then find spot within the page's HTML (JSX) where you would like to add/modify an element. Elements that appear on all pages, like the header or footer, can be modified in /src/pages/\_app.js. Modify styling using Tailwind utility classes in each element's className.
