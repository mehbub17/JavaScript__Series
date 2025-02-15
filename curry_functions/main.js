// currying takes a function that receives more than one parameter and breaks it into a series of unary functions

// Therefore currying function takes only one parameter at a time


//this is currying but nested and ugly

const samosa = (masala)=>{
    return (alu)=>{
        return (aata)=>{
            return `${masala}+${alu}+${aata} = samosa`;
        }
    }
}

const item = samosa("garam_masal")("aalu desi")("desi aata");

console.log(item);

