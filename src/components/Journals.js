import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Axios from 'axios'
import { connect } from 'react-redux'

import { badNews } from '../actions'

class Journals extends React.Component {
  static navigationOptions = {
    title: 'Journals'
  }

  constructor (props) {
    super(props)
    this.state = {
      articles: props.articles,
    }
  }

  componentDidMount () {
    this.props.badNews()
  }

  //getArticles () {
  //  Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
  //    params: {
  //      'api-key': "6bfa079ba439477ead940b11ec70b476",
  //      'fq': 'indonesia',
  //      'sort': 'newest'
  //    }
  //  })
  //    .then((response) => {
  //      this.setState({
  //        articles: response.data.response.docs
  //      })
  //    })
  //    .catch((error) => {
  //      console.log(error)
  //    })
  //}

  getNews () {
    const news = []
    this.props.articles.map((article, index) => {
      news.push(
      <Text key={index}>
        {article.headline.main}
      </Text>
      )
    })
    return news
  }

  render() {
    console.log(this.props.articles.length)
    if (this.props.articles.length > 0) {
      return (
        <View style={{flex: 1}}>
          {this.getNews()}
        </View>
      )
    }
    else {
      return (
        <View style={{flex:1}}>
          <Text>loading....</Text>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state.articles.articles)
  return {
    articles: state.articles.articles,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    badNews: () => dispatch(badNews()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journals)
