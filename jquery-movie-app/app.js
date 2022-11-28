function renderMovieData(e) {
  e.preventDefault()
  let movieTitle = $('#title-input').val()
  let movieRating = $('#rating-input').val()
  $('section').append(
    `
    <div class="movie-data" id="movie-data">
    <p>${movieTitle}</p>
    <p>${movieRating}</p>
    </div>
    `
  )
  $('#title-input').val('')
  $('#rating-input').val('')
}

$('#add-btn').on('click', renderMovieData)
$('section').on('click', '#movie-data', function () {
  $(this).remove()
})
