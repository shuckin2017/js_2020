const url = 'https://jsonplaceholder.typicode.com/todos';
const myRequest = new XMLHttpRequest();



function sendTest(){
  return new Promise((resolve, regect) => {
    console.log('Старт');
    myRequest.open('GET', url);
    myRequest.send();
    myRequest.onload = ()=> {
      const status = myRequest.status;
      if(status < 400) {
        // resolve - callback внути then
        resolve(myRequest.response);
      } else {
        console.log('Ошибка запроса');
      }
      
      // const responseJSON = JSON.parse( myRequest.response );
      // console.log('Загрузка завершена');
      // console.log( typeof responseJSON );
      // console.log( responseJSON );
    };
  });
}


const testPromise = sendTest();

testPromise.then((data) => {
  const newObj = {};
  JSON.parse(data).forEach((key) => {
      Object.keys(key).forEach((item) => {
        item = item[0].toUpperCase() + item.slice(1);
        newObj[item] = Object.keys(key)[item];
      });  
      console.log(newObj); 
      
  });
});

// в ключах оъекта сделать заглаыне буквы
  // Реализовать  метод сортировки "пузырек"
  // Регистрация  задачник

console.log('Окончание');


