 const getArgs = args => {

    const res = {}
    const [executer , file, ...rest] = args
    rest.forEach((value, index, array) =>{



        // console.log(index);
        // console.log(array);

        console.log( 'value',value);
        console.log('index',index);
        console.log('array',array);
        console.log(value.substring(1));
        


        if(value.charAt(0) == "-"){
            if(index == array.length -1 ){
                res[value.substring(1)] = true
            }else if(array[index + 1].charAt(0) != '-'){
                res[value.substring(1) ]= array[index + 1 ];
            }else{
                res[value.substring(1)] = true
            }
        }

    })

    return res;
     



 }

 module.exports = getArgs;