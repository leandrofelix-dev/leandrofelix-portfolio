import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="bottom-right-image">
        <Player
          autoplay
          loop
          src="/lottie/load.json"
          style={{
            width: '140px',
            height: '140px',
          }}
        />
      </div>
    </div>
  )
}

export default LoadingScreen
