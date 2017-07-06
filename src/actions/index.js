import Axios from 'axios'

export const badNews = () => {
  Axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
    params: {
      'api-key': "6bf1079ba439477ead940b11ec70b476",
      'fq': "indonesia",
      'sort': "newest"
    }
  })
    .then ((response) => {
      dispatch({
        type: "BAD_NEWS",
        payload: response.data.reponse.docs
      })
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
}
