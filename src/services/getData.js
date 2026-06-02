import api from "./api"


export async function getMovies () {
        const{
        data:{ results } 
        }= await api.get('/movie/popular')
        return results

}

export async function getTopMovies () {
      const {
  data: { results }
} = await api.get('/movie/top_rated')   

return results
 }

export async function getTopSeries () {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

    return results
}

export async function getPopularSeries () {
  const {
    data: { results }
  } = await api.get('/tv/popular')          
    return results
}   

export async function getTopPeople () { 
    const {
        data: { results }
  } = await api.get('/person/popular')
    return results
}


export async function getMovieCredits(movieId) {
  const  {data: { cast }} = await api.get(`/movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const { 
    data : { results }
  } = await api.get(`/movie/${movieId}/similar`)

  return results 
}

export async function getMovieById(movieId) {
  const  {data}  = await api.get(`/movie/${movieId}`)

  return data 
}

export async function getRecentMovies() {
  const { data } = await api.get('/movie/now_playing', {
    params: {
      language: 'pt-BR',
      page: 1
    }
  })

  return data.results
}

export async function getOnAirSeries() {
  const { data } = await api.get('/tv/on_the_air', {
    params: {
      language: 'pt-BR',
      page: 1
    }
  })

  return data.results
}


export async function getSeriesById(id) {
  const { data } = await api.get(`/tv/${id}`)
  return data
}

export async function getSeriesCredits(id) {
  const {
    data: { cast }
  } = await api.get(`/tv/${id}/credits`)

  return cast
}

export async function getSeriesSimilar(id) {
  const {
    data: { results }
  } = await api.get(`/tv/${id}/similar`)

  return results
}

export async function searchMulti(query) {
  const {
    data: { results }
  } = await api.get('/search/multi', {
    params: {
      query,
      language: 'pt-BR'
    }
  })

  return results
}

export async function getMovieProviders(movieId) {
  const { data } = await api.get(
    `/movie/${movieId}/watch/providers`
  )

  return data.results
}

export async function getSeriesProviders(id) {
  const { data } = await api.get(`/tv/${id}/watch/providers`)

  return data.results
}

export async function getMovieCertification(movieId) {
  const { data } = await api.get(
    `/movie/${movieId}/release_dates`
  )

  return data.results
}

export async function getSeriesCertification(id) {
  const { data } = await api.get(`/tv/${id}/content_ratings`);

  return data.results;
}

export async function getMovieVideos(movieId) {
  const { data } = await api.get(`/movie/${movieId}/videos`, {
    params: {
      language: "pt-BR",
    },
  });

  if (data.results.length > 0) {
    return data.results;
  }

  const { data: dataEnglish } = await api.get(`/movie/${movieId}/videos`, {
    params: {
      language: "en-US",
    },
  });

  return dataEnglish.results;
}

export async function getSeriesVideos(id) {
  const { data } = await api.get(`/tv/${id}/videos`, {
    params: {
      language: "pt-BR",
    },
  });

  if (data.results.length > 0) {
    return data.results;
  }

  const { data: dataEnglish } = await api.get(`/tv/${id}/videos`, {
    params: {
      language: "en-US",
    },
  });

  return dataEnglish.results;
}

