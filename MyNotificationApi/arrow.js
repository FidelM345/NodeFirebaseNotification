// var club=(a)=>{
//     return"The best club is England is "+a;
// }

// console.log(club("chelsea"))


let cleanRoomPromise=()=>
{
  return  new Promise((resolve,reject)=>{

        cleanRoom=true;
    
        if(cleanRoom){
            resolve("clean")
        }else{
            reject("Dirty")
        }
    
    });
}


cleanRoomPromise().then((a)=>{
 console.log("The room is "+a);
}).catch((b)=>{
    console.log("The room is "+b);
})


