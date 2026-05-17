import { Player } from '@lottiefiles/react-lottie-player'
import { useNavigate } from 'react-router-dom'

export function Error404() {
  const navigate = useNavigate()

  return (
    <div className="image404">
      <div className="centered-image404">
        <Player
          autoplay
          loop
          src="/lottie/boysearching.json"
          style={{
            width: '50%',
            height: '50%',
            maxWidth: '800px',
            maxHeight: '800px',
          }}
        />
        <h1 className="not-found-title404">404 - Page Not Found</h1>
        <p className="not-found-text404">
          Oops! It seems like you have stumbled upon a non-existent page on my portfolio website.
        </p>
        <button type="button" className="go-back-button404" onClick={() => navigate('/')}>
          Go Back to Homepage
        </button>
      </div>
    </div>
  )
}
