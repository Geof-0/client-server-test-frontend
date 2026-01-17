console.log("js paired");


backendURL = 'http://127.0.0.1:5500'




// testing

document.getElementById("send").onclick = async () => {
    const res = await fetch(`${backendURL}/api/data`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ test: "hello" })
    });

    console.log(await res.json());
};








// main script

let clientKey = null
let clientKeyID = null

async function initKey(){
    const res = await fetch(`${backendURL}/sec/genKey`,)
    const data = await res.json()
    clientKey = data['key']
    clientKeyID = data['keyId']
    console.log(clientKey, clientKeyID)
}

initKey()
