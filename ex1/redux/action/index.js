import $ from 'jquery';

export const decrement = () => ({
  type: 'DECREMENT'
});
export const increment = () => ({
  type: 'INCREMENT'
});
export const clear = () => ({
  type: 'CLEAR'
});
export const getSum = (a, b) => ({
  type: 'SUM',
  a:a,
  b:b
});

export const asyncIncrease = (dispach, state) => {
  dispach({type: 'INCREMENT_LOADING'});
  _fakeServerApi.increaseCount(state.count.result,
    data => dispach({type: 'INCREMENT'}));
}

export const getRandomImage = (dispatch, state) => {
  dispatch({type: 'IMAGES_LOADING'});
  var imgurAPI = 'https://api.imgur.com/3/gallery/random/random/1';
  $.getJSON(imgurAPI).done(data => dispatch({type: 'IMAGES', data:data.data}));
}
