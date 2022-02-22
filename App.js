import React from 'react';
import {
ImageBackground,
StyleSheet,
Text,
ScrollView,
TouchableHighlight,
View,
} from 'react-native';

class App extends React.Component {
state = {
  posts: [],
};

componentDidMount() {
  fetch('https://www.reddit.com/r/pic/top.json?t=year')
    .then(response => response.json())
    .then(json => {
      const posts = json.data.children.map(child => child.data);
      this.setState({posts});
    });
}

render() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
{this.state.posts.map(post => (
  <View style={styles.tile} key={post.id}>
    <TouchableHighlight
      style={{borderRadius: 20, padding: 6}}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
    >
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={{ uri: post.thumbnail }}
        imageStyle={styles.background}
      />
    </TouchableHighlight>
    <Text style={styles.title}>{post.title}</Text>
  </View>
))}
</ScrollView>
  );
}
}

const styles = StyleSheet.create({
container: {
  backgroundColor: '#000',
  flexDirection: 'row',
  color: "white",
  flexWrap: 'wrap',
},
tile: {
  flexBasis: '20%',
  color: "white",
  height: 370,
  marginTop: 10,
  marginBottom: 20,
  padding: 10,
},
background: {
  borderColor: '#000',
  borderRadius: 20,
  color: "white",
},
title: {
  fontSize: 20,
  textAlign: 'center',
  color: "white",
},
});

export default App;