# IEN Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/56d84c4e-fa75-4ccc-bf39-53d4d0091928/deploy-status)](https://app.netlify.com/sites/ienblog/deploys)

### Using Gatsby

### Step 1: Starter installation

##### With `git clone`:

```sh
git clone git@github.com:iotanetwork/blog

cd blog

yarn
```

### Step 2: Develop & Build

Once installed or cloned locally and all packages are installed you can begin developing your site.

```sh
# Run localhost
yarn dev

# Build your Gatsby site
yarn build
```

If wanting to use Netlify CMS as the content editor, then you need to be run the proxy in another terminal tab. Then visit
http://localhost:8000/admin to view the editor.

```sh
# Run proxy
yarn proxy
```
