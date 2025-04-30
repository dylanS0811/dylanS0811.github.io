'use strict';

let data = [];

export function get_items() {
  return data;
}

export function add_item(new_item) {
  if (data.some((item) => item.id === new_item.id)) return false;
  data.push(new_item);
  return true;
}

export function update_item_title_by_id(id, new_title) {
  const item = data.find((i) => i.id === id);
  if (!item) return false;
  item.title = new_title;
  return true;
}

export function delete_item_by_id(id) {
  const index = data.findIndex((i) => i.id === id);
  if (index === -1) return false;
  data.splice(index, 1);
  return true;
}

export function get_item_title_by_id(id) {
  const item = data.find((i) => i.id === id);
  return item ? item.title : null;
}
