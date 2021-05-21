export const isEmpty = (chain) => {
    return chain.replace(/[\s]+/,'')==='';
}

export const areEmpty = (chains) =>{
    let flag = false;
    chains.forEach(chain => {
        if(isEmpty(chain)){
            flag = true;
        }
    });
    return flag;
}