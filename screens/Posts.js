import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';

import { fetchApiData, getPosts } from '../API';

const Posts = ({ navigation }) => {

  const getPosts = () => {
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
  }

  return (
    <FlatList
      data={this.state.posts}
      renderItem={({ item }) => (
        <News
          navigation={this.props.navigation}
          title={item.title.rendered}
          image={item.acf.author_photo}
          day={item.date}
          data={item}
        />
      )}
      keyExtractor={item => item.id.toString()}
      onEndReached={this.handleLoadMore}
      onEndReachedThreshold={1}
    />
  );
};

export default Posts;