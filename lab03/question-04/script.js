'use strict';

import {
  get_items,
  add_item,
  update_item_title_by_id,
  delete_item_by_id,
  get_item_title_by_id
} from './data.js';

// Testing
console.log(add_item({ id: 1, title: 'Book One' })); // true
console.log(add_item({ id: 2, title: 'Book Two' })); // true
console.log(get_items());
console.log(update_item_title_by_id(1, 'Updated Book One')); // true
console.log(delete_item_by_id(2)); // true
console.log(get_item_title_by_id(1)); // "Updated Book One"
