import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Axios from 'axios'

export default class Journals extends React.Component {
  static navigationOptions = {
    title: 'Journals'
  }

  constructor () {
    super()
    this.state = {
      articles: [],
    }
  }

  componentDidMount () {
    this.getArticles()
  }

  getArticles () {
    Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
      params: {
        'api-key': "6bfa079ba439477ead940b11ec70b476",
        'fq': 'indonesia',
        'sort': 'newest'
      }
    })
      .then((response) => {
        this.setState({
          articles: response.data.response.docs
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.articles)
    return (
      <View>
        {this.state.articles.map((article, index) => (
          <Text key={index}>
            {article.headline.main}
          </Text>
          ))}
      </View>
    )
  }
}
