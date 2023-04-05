export function getSearch ( 
    input : string,
    array : object[],
    properties : string[] | null
) {

    array.forEach( obj => {
        if(properties !== null){
            //search in specific properties
            properties.forEach( prop => {
                console.log(obj[prop])
            });
        } else {
            //search in each properties
            const objKeys = Object.keys(obj);
            if(objKeys){
                objKeys.forEach(key => {
                    console.log(obj[key])
                });
            }
        }
    });
}