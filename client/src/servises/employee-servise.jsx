
const basic_url = process.env.NODE_ENV === "production" ? -
"https://office-appliacion-mern.herokuapp.com/":
"http://localhost:8000/api";

export const getApiAllEmployee = ()=>{
    return fetch(basic_url).then(respond=> respond.json()).catch(err=> console.log(err));
}
