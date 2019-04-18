let url = "./src/php/test_post.php";

let student = {
    "name":"hello",
    "age":"11"
}

let opts ={
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(student),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

console.log(url);

fetch(url,opts)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => (console.log(e)));