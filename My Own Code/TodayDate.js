const date = new Date().getTime() / 1000

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

let todasy = yyyy + '-' + mm + '-' + dd;