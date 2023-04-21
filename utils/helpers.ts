export const camelCaseToNormal = ( text='' ) => 
 text.replace(/([A-Z])/g, " $1").charAt(0).toUpperCase() + text.replace(/([A-Z])/g, " $1").slice(1) 


export const makePlain = ( arr : string[] ) => {

    const lastPosition = arr[arr.length - 1]
    const slicedArry = arr.slice(0, -1);
    let str = ' '

    slicedArry.map( city => str += `${city} , ` )

    return str+lastPosition+' . '
}


export const getRandomImg = (  ) => `url(https://source.unsplash.com/160${Math.floor(0 + Math.random()*(9 - 0 + 1))}x90${Math.floor(0 + Math.random()*(9 - 0 + 1))}/?travel)`