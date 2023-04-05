export function getSearch ( 
    input : string,
    array : object[],
    properties : string[] | null
) {
    const output : object[] = [];
    array.forEach( obj => {
        if(properties !== null){
            //search in specific properties
            properties.forEach( prop => {
                if(compare(obj[prop], input))
                output.push(obj[prop])
            });
        } else {
            //search in each properties
            const objKeys = Object.keys(obj);
            if(objKeys){
                objKeys.forEach(key => {
                    if(compare(obj[key], input))
                    output.push(obj[key])
                });
            }
        }
    });
    return output
}

function compare( a : any, b : string ){
    let prop = a;
    let input = b;
    const isNotString = typeof(a) !== 'string';
    if(isNotString){
        prop.toString();
    }
    prop.toLowerCase();
    input.toLowerCase();

    if(prop === input){//LIKE
        return true
    }
    return false
}