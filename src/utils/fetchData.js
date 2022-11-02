export const exerciseOptions ={
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '9f5cb2a279mshb7a8c16a0f1bc27p1c31e4jsn8f6e0356a845',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9f5cb2a279mshb7a8c16a0f1bc27p1c31e4jsn8f6e0356a845',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


  export const fetchData =async(url ,options)=>{
    const response = await fetch(url ,options);
    const data =await response.json();
    //console.log(data);
    return data;
  }