success = (item) => {

    let newItem = Object.assign({}, item)
    newItem.enhancement = Number(newItem.enhancement);
    if (newItem.enhancement < 15 && typeof newItem.enhancement === 'number') {
        newItem.enhancement = newItem.enhancement + 1;
        newItem.enhancement = `+${newItem.enhancement}`;
        newItem.name = `${newItem.enhancement} ${newItem.name}`
    }
    return newItem
}

fail = (item) => {
    let newItem = Object.assign({}, item);
    if ((Number(newItem.enhancement) <= 14 && newItem.durability < 25) || (Number(newItem.enhancement) > 15 && newItem.durability < 10) || (typeof newItem.enhancement === 'string' && newItem.durability < 10)) {
        throw new Error('Item cannot be enhanced!');
    }
    if (newItem.enhancement < 14 && newItem.enhancement > 0) {
        newItem.durability = newItem.durability - 5;
    } else if ((newItem.enhancement > 15) || (typeof newItem.enhancement === 'string')) {
        newItem.durability = newItem.durability - 10;
    } if (newItem.enhancement === 'PEN') {
        newItem.enhancement = 'TET';
        newItem.name = `[${newItem.enhancement}] ${newItem.name}`
    } else if (newItem.enhancement === 'TET') {
        newItem.enhancement = 'TRI';
        newItem.name = `[${newItem.enhancement}] ${newItem.name}`
    } else if (newItem.enhancement === 'TRI') {
        newItem.enhancement = 'DUO';
        newItem.name = `[${newItem.enhancement}] ${newItem.name}`
    } else if (newItem.enhancement === 'DUO') {
        newItem.enhancement = 'PRI';
        newItem.name = `[${newItem.enhancement}] ${newItem.name}`
    }
    return newItem
}

repair = (item) => {
    return newItem = Object.assign({}, item, { durability: 100 });
}

module.exports = {
    success,
    fail,
    repair
}