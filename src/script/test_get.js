let url = "./src/php/test_get.php";

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => (console.log(e)));