// Write your code here
import {
  PrimeContainer,
  SliderHeading,
  TopImage,
  MoviesContainer,
} from './styledComponents'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionList = moviesList.filter(
    eachValue => eachValue.categoryId === 'ACTION',
  )
  const comedyList = moviesList.filter(
    eachValue => eachValue.categoryId === 'COMEDY',
  )
  return (
    <PrimeContainer>
      <TopImage
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer>
        <SliderHeading>Action Movies</SliderHeading>
        <MoviesSlider moviesList={actionList} />
        <SliderHeading>Comedy Movies</SliderHeading>
        <MoviesSlider moviesList={comedyList} />
      </MoviesContainer>
    </PrimeContainer>
  )
}

export default PrimeVideo
