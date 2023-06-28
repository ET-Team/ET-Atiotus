onEvent('recipes', event => {

//有序

    const craft1 = [
        {
            output: '4x kubejs:can',
            recipe: [' Q ','Q Q',' Q '],
            input: {
                Q:'thermal:tin_plate'   
            }
        }

    ];




//无序

    const craft2 = [

    ];







    craft1.forEach((recipe) => {event.shaped(recipe.output, recipe.recipe, recipe.input)});
    craft2.forEach((shapeless) => {event.shapeless(shapeless.output, shapeless.input)});

  


});


/* 有序合成的模板
{
    output: '???',
    recipe: ['QQQ','EEE','WWW'],
    input: {
        Q:???   
        E:???
        W:???
    }
}
*/

/*无序合成的模板
{
    output:???,
    input: [???,???]
}
*/








