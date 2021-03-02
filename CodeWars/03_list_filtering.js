function filter_list(list) {
    return list.filter(item => Number.isInteger(item));
}

console.log(filter_list([1, 2, 'a', 'b']))