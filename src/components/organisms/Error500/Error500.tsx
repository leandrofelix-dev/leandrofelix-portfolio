import { Player } from '@lottiefiles/react-lottie-player'

export function Error500() {
  return (
    <div className="image404">
      <div className="centered-image404">
        <Player
          autoplay
          loop
          src="/lottie/looking.json"
          style={{
            width: '50%',
            height: '50%',
            maxWidth: '800px',
            maxHeight: '800px',
          }}
        />
        <h1 className="not-found-title404">500 - Internal Server Error Occurred!</h1>
        <p className="not-found-text404">
          Oops! It seems like you have stumbled upon server error on my portfolio website.
        </p>
        <p style={{ fontSize: '14px' }}>
          If you think this is an issue or bug, please report them{' '}
          <a href="https://github.com/leandrofelix-dev/portfolio/issues/new">@leandrofelix-dev</a>
        </p>
        <button
          type="button"
          className="go-back-button404"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>
    </div>
  )
}
