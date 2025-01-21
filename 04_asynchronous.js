let a = 10;
let b = 20;

const data = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

data.then((value) => console.log(a + value)).catch((err) => console.error(err));
