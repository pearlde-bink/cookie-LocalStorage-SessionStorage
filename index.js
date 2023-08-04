document.cookie = `name = Bink; expires=${new Date('2023-08-04 15:15:00').toUTCString()}`;
document.cookie = `age = 19; expires=${new Date('2023-08-04 15:15:00').toUTCString()}`;

console.log(document.cookie);

localStorage.setItem("name", "Bink");
localStorage.setItem("age", "19");

console.log(localStorage.getItem("name"));

localStorage.removeItem("age");

localStorage.clear();

//same as localStorage
sessionStorage.setItem()
