/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
    if (remainingTime > 0) {
        return 'Not done, please wait.'
    } else if (remainingTime === 0) {
        return 'Lasagna is done.'
    } else {
        return 'You forgot to set the timer.'
    }
}

export function preparationTime(layers, time) {
    if (time == null) {
        return layers.length * 2;
    } else {
        return layers.length * time;
    }
}

export function quantities(layers) {
    const recipe = layers.filter(layer => {
        // 👇️ using AND (&&) operator
        return layer === 'noodles' || layer === 'sauce';
      });
    const counts = {noodles: 0, sauce: 0};

    for (const item of recipe) {
        if (item === 'noodles') {
            counts[item] = counts[item] ? counts[item] + 50 : 50;
        } else if (item === 'sauce') {
            counts[item] = counts[item] ? counts[item] + .2 : .2;
        }
    }
    return counts;
}

export function addSecretIngredient(friendsList, myList) {
    let secretIngredient = friendsList[friendsList.length - 1];
    myList.push(secretIngredient)
}

export function scaleRecipe(recipe, portion) {
    let scale = portion / 2;
    let scaledRecipe = Object.fromEntries(Object.entries(recipe).map(([k, v]) => [k, v * scale]));
    return scaledRecipe;
}