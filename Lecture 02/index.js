const devs =[
    {
        id : 1,
        name : "Jabed",
        Skill : "Ios Developer"
    },
    {
        id : 2,
        name : "Saki Salman",
        Skill : "Web Developer"
    },
    {
        id : 3,
        name : "Imran Ali",
        Skill : "Mern Stack Developer"
    },
    {
        id : 4,
        name : "Fahad",
        Skill : "Ios Developer"
    }
]


console.log(devs.find((data)=>{
    return data.id==3
}));

//Filter
console.log(devs.filter((data)=>{
    return data.id==3  
}));

