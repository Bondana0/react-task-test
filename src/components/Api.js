import axios from 'axios';

const fetchData = () => {
  return axios.get('https://raw.githubusercontent.com/LightOfTheSun/front-end-coding-task-db/master/db.json')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
      return [];
    });
};

export default fetchData;
