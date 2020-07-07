
import Config from 'react-native-config';

export const getPosts = async route => {
  return fetch(
    "http://bluenoqta.com/wp-json/wp/v2/posts?per_page=10&page=" + this.state.page
  )
  .then(response => response.json())
  .then(responseJson => {
    this.setState(prevState => ({
      posts: [...prevState.posts, ...responseJson],
      isLoading: false
    }));
  })
  .catch(error => {
    console.error(error);
  });
  
};