
const basic_url = "http://localhost:8000/api";

export const getApiAllEmployee = ()=>{
    return fetch(basic_url).then(respond=> respond.json()).catch(err=> console.log(err));
}
