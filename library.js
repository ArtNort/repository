const customNumber = {
    NaN: NaN,
    EPSILON: 2.22044604 ** -16,
    isFinite: function(param){
        return param !== Infinity || param !== -Infinity ? true : false;
    },
    isNaN: function(param){
        return param === NaN ? true : false;
    },
    isInteger: function(param){
        param += "";

        let checker = true;

        for (const iterator of param) {
            if(iterator == "."){
                checker = false;
                break;
            }
        }
        return checker ? true : false;
    },
    toString: function(param){
      return param + "";
    },
    parseInt: function(param){

             if(typeof(param) != NaN && typeof(param) != undefined){
            param += "";
            let result = "";
            for (const iterator of param) {
                if(iterator != '.' && iterator != " "){
                    result += iterator;
                }
                else{ break;}
              }
              return +result;
       }
    },

    parseFloat: function(param){
        if(typeof(param) != NaN && typeof(param) != undefined){
            param += "";
            let result = "";
            for (const iterator of param) {
                if(iterator != " "){
                    result += iterator;
                }
                else{ break;}
              }
              return +result;
       }
    },
}





