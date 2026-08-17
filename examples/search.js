import client from '../index.js';

const { data: results } = await client.search.byName('Breaking Bad');

console.log(results?.title_results);
