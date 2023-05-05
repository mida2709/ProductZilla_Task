const axios = require('axios');

function getIncompleteTodosPromise() {
    return axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          completed: false,
          _limit: 10
        }
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
  getIncompleteTodosPromise()
  .then(data => {
    console.log(data);
  });
  