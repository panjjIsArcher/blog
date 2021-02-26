const zIndexCount:( length:number, index:number ) => number = function ( length:number, index:number ) :number{
    const max = Math.ceil(length/2);
    let z_index = max - index;
    if( !length ){
        return 1
    }else if(length % 2 === 1) {
        //奇数
        if(z_index === 1){
            return max
        }else{
            return z_index >= 0? index+1: index-1;
        }
    }else{
        // 偶数
        if(z_index === 1){
            return max + 1
        }else{
            return max > index? z_index:length - index ;
        }
    }

    return 1
}
export {
    zIndexCount
}
