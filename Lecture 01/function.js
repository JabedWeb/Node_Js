
/**
 //Commonjs Type
const func={};

const ageCal =(name,year)=>{
    let age =new Date().getFullYear()-year;
    return `Hi ${name},You are ${age} Years old`;
}
const info=(name,skill)=>{
    return `Hi ${name}, You are ${skill}`
}

const devs =[
    {
        id : 1,
        name : "JABED"
    },
    {
        id : 2,
        name : "JABED"
    }
]

func.ageCal=ageCal;
func.info=info;
func.devs=devs;
module.exports=func
 */


/**
//module ES6 syntex
export const ageCal =(name,year)=>{
    let age =new Date().getFullYear()-year;
    return `Hi ${name},You are ${age} Years old`;
}
export const info=(name,skill)=>{
    return `Hi ${name}, You are ${skill}`
}
 */