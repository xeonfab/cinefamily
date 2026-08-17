import client from '../index.js';

const { data: results, error } = await client.search.byName('Breaking Bad');

if (error) {
  console.error(`Error ${error.statusCode}: ${error.statusMessage}`);
} else {
  console.log(results?.title_results);
}
