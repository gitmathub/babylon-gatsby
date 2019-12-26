# Babylon Metropolis Verlag Homepage

The Babylon Metropolis homepage is a static site that is generated by the [Gatsby](https://www.gatsbyjs.org) and with [Strapi](https://strapi.io) as CMS.

## Under Construction

This site is under construction. Currently we have a staffholding with strapi hooked in.

## Development

http://localhost:8000

http://localhost:8000/___graphql

### Browser Testing

Test in different browsers on Windows:
https://www.browserling.com

## Build

### Prefix Path

https://www.gatsbyjs.org/docs/recipes/deploying-your-site

Test deploy under the path prefix: `/next`

```js
module.exports = {
  pathPrefix: `/next`,
}
```

```bash
npm run build -- --prefix-paths
```

test

```bash
npm run serve -- --prefix-paths
```

http://localhost:9000/next

## Maintenaince

### Database dump

```bash
cd babylon-strapi/data
sqlite3 sqlite.db .dump > 20191226-02-strapi-babylon-dump.sql
```

### Todos

Must have

- [x] Footer navigation
- [x] Page with all items (Verlagsprogramm)
- [ ] Author pages
- [ ] SSL certificate
- [ ] CMS installation
- [ ] Deployment automation

Good to have

- [ ] Coloring
- [ ] Publication images
- [ ] Author images
- [ ] Meta tags

Goodies

- [ ] Hamburger menu: collapse when click outside
- [ ] Margin on windows internet explorer

- checkout https://github.com/staylor/react-helmet-async for resolving the warning about the _SideEffect(NullComponent)_: https://github.com/gatsbyjs/gatsby/issues/17865
