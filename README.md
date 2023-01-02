# Fragrantica clone

Deploy: https://fragrantica-clone.netlify.app/
The project aims to create an alternative layout for the [**Fragrantica**](https://www.fragrantica.com/) - with simplified features. Fragrantica is an online encyclopedia of perfumes.

**Stack:**

- Frontend: 		  <br/>- HTML + CSS
		  <br/>-  JavaScript + Typescript
		  <br/>- React.js
		  <br/>- RWD
- [Backend](https://github.com/a-szczepan/json-server-test): 
      <br/> - server mocked with [_json-server_](https://github.com/typicode/json-server)

The following list provides a description of the pages and functionality.
|page | description |
|--|--|
|/| landing page, general information about the project|
| /search | - browse the perfume database (with pagination) <br/> - product cards with image, name and brand of the perfume <br/> - search by perfume name <br/> - filter by gender, brand and olfactory group |
|/product/:id|product page - information about: <br/> - name and brand <br/> - gender <br/> - main accords <br/> - notes <br/> - rating|

**Todo:**
Implementation of a scraper and a proper backend
