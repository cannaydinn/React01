import getData from "./index.js";

async function getUserInfo(){
    try{
        const userId = Number(promt("Enter user id:"));
        const userData = await getData(userId);
        console.log(userData);
    } catch(error){
        console.error(error.message);
    }
}

getUserInfo();
