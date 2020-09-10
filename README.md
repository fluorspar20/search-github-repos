# search-github-repos

Get a list of Github repositories of specified username sorted by the last updated time

## Installation

```js
# using npm
npm i search-github-repos

# using yarn
yarn add search-github-repos
```

## Usage

```js
# using require
const { getRepos } = require('search-github-repos');

# using import
import { getRepos } from 'search-github-repos';
```

## Example

### Using promises:

```js
getRepos({
  username: 'fluorspar20', // provide GitHub username here
  page: 1, // optional property: default value is 1
  per_page: 50 // optional property: default value is 40
}).then((repositories) => console.log(repositories));
```

### Using async/await:

```js
const getRepositories = async function () {
  const repositories = await getRepos({
    username: 'fluorspar20', // provide GitHub username here
    page: 1, // optional property: default value is 1
    per_page: 50 // optional property: default value is 40
  });
  console.log(repositories);
};

getRepositories();
```