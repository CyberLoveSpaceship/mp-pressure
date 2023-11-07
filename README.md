# MP Pressure

A tool to ease barriers on reaching out to local representatives. It takes a user's postal code and provides contact info of local representatives, along with a scripts and letter templates for responses.

[Website]()

## Roadmap

### mvp

- [x] postal code input
- [x] retrieve results from API
- [ ] debugging/error handling input
- [ ] styling results (prob could refactor into comps)
- [ ] adding email/script templates
- [ ] sticky nav bar

### nice to have

- [ ] locale switching (for french)
- [ ] second page with links to other resources
- [ ] read content from markdown for links
- [ ] cms (brrrrrr)

## Development

The tool uses the [Represent API](https://represent.opennorth.ca/) to gather info on representatives based on a postal code.

The site is built with [Next.js](https://nextjs.org/).

To start, run:

```sh
npm install
npm run dev
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/`     |

---

## Represent API Info

The following is retrieved from the [ Represent API homepage ](https://represent.opennorth.ca/) and added here for reference.

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
