const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

function getData(callback) {
  axios.get(apiUrl)
    .then(response => {
      const completedData = response.data.filter(todo => todo.completed);
      const completedData10 = completedData.slice(0, 10);
      callback(null, completedData10);
    })
    .catch(error => {
      callback(error, null);
    });
}

getData((error, data) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(data);
  }
});
