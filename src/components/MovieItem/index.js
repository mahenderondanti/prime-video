import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

import {
  ImageTrigger,
  ModalContainer,
  MoviePlayerContainer,
  CloseButton,
} from './styledComponents'

const MovieItem = props => {
  const {movieItem} = props
  return (
    <div>
      <Popup
        modal
        trigger={<ImageTrigger src={movieItem.thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <ModalContainer>
            <CloseButton
              type="button"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </CloseButton>
            <MoviePlayerContainer>
              <ReactPlayer url={movieItem.videoUrl} controls />
            </MoviePlayerContainer>
          </ModalContainer>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
