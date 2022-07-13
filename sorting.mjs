import {myjson} from './csv.mjs' 



let keys = Object.keys(myjson).forEach(function(key, values){
    let both = myjson[key, values];
    let keys = myjson[key]
    
    for(let allKeys in keys){
        let values = keys[allKeys];
    

        if(values === 'Europe'){
            console.log(values)
        }
    }

    

});









