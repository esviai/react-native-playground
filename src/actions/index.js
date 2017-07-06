import Axios from 'axios'

export const badNews = () => {
  return (dispatch) => {
    console.log('action')
    Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
      params: {
        'api-key': "6bfa079ba439477ead940b11ec70b476",
        'fq': "indonesia",
        'sort': "newest",
      }
    })
      .then ((response) => {
        console.log('suksesssssss', response.data.response.docs)
        dispatch({
          type: "BAD_NEWS",
          payload: response.data.response.docs,
        })
      })
      .catch((error) => {
        console.log('aaaaaaaaaaa', error)
        dispatch({
          type: "BAD_NEWS",
          payload: [],
        })
      })
  }
}
