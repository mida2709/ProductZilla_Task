const axios = require('axios');

async function getDataAsyncAwait() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const data = response.data;
    const completedTrueData = data.filter(item => item.completed === true).slice(0, 10);
    const completedFalseData = data.filter(item => item.completed === false).slice(0, 10);
    const combinedData = [...completedTrueData, ...completedFalseData];
    return combinedData;
  } catch (error) {
    console.error(error);
  }
}

getDataAsyncAwait().then(data => {
  console.log(data);
});
// "try catch"  untuk menangkap error yang terjadi saat melakukan request data dari API.
