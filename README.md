## Represent API Info

[API](https://www.assnat.qc.ca/Media/Process.aspx?asset=ANQ.Vigie.Bll.Image_26027&process=Original&token=ZyMoxNwUn8ikQ+TRKYwPCjWrKwg+vIv9rjij7p3xLGTZDmLVSmJLoqe/vG7/YWzz)

### Paginate

Results are paginated 20 per page by default. Set the number of results per page by adding a `limit` query parameter. Change pages using the `offset` query parameter or using the `next` and `previous` links under the `meta` field in the response to navigate to the next and previous pages (if any). Under the `meta` field, `total_count` is the number of results.

### Filter results

Filter results with query parameters. Each endpoint below lists the fields on which you can filter results. To filter for representatives whose first name is “Rodney”, for example, request `/representatives/?first_name=Rodney`. To filter for MPs whose first name is "Rodney", request `/representatives/house-of-commons/?last_name=Rodney`.

Perform substring searches by appending `__querytype` to the parameter name, where `querytype` is one of `iexact`, `contains`, `icontains`, `startswith`, `istartswith`, `endswith`, `iendswith` or `isnull`. A leading `i` makes the match case-insensitive. For example, to find representatives whose last name starts with “M” or “m”, request `/representatives/?last_name__istartswith=m`.

### Download in bulk

To download all representatives, send a request to [https://represent.opennorth.ca/representatives/?limit=1000](https://represent.opennorth.ca/representatives/?limit=1000) and follow the `next` link under the `meta` field until you reach the end. We host the shapefiles and postal code concordances on [GitHub](https://github.com/opennorth/represent-canada-data).

### Rate limits

Represent is free up to 60 requests per minute (86,400 queries/day). If you need to make more queries, [contact us](mailto:represent@opennorth.ca); otherwise, you may get HTTP 503 errors.

### Debugging

For a browsable, HTML version of the JSON response, add a `format=apibrowser` query parameter. Add `pretty=1` to just indent the raw JSON.

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
