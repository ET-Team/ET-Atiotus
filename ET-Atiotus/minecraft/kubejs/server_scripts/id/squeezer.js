onEvent('recipes', event => {


    const plate = [

        {
            input: 'minecraft:gold_ingot',
            output: 'thermal:gold_plate'
        },

        {
          input: 'minecraft:iron_ingot',
          output: 'thermal:iron_plate'
        },

        {
          input: '#forge:ingots/copper',
          output: 'thermal:copper_plate'
        },

        {
          input: '#forge:ingots/tin',
          output: 'thermal:tin_plate'
        }


    ];



    plate.forEach((squeezer) => {event.custom({
        "type": "integrateddynamics:squeezer",
        "item": squeezer.input,
        "result": {
          "items": [
            {
              "item": {
                "item": squeezer.output,
              }
            }
          ]
        }})});






});