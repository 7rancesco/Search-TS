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
                output.push(obj)
            });
        } else {
            //search in each properties
            const objKeys = Object.keys(obj);
            if(objKeys){
                objKeys.forEach(key => {
                    if(compare(obj[key], input))
                    output.push(obj)
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
    prop = prop.toLowerCase();
    input = input.toLowerCase();

    const isFound = prop.search(input);
    if(isFound >= 0){
        return true
    }
    return false
}