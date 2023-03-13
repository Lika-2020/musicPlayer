import React from 'react'
import * as S from './MyTrack.styled'

function MyTrack({ favoriteTracks }) {
  if (!favoriteTracks) {
    return <p>No favorite tracks found.</p>
  }

  return (
    <div>
      <h2>Favorite Tracks</h2>
      {favoriteTracks.length > 0 ? (
        <ul>
          {favoriteTracks.map((track) => (
            <li key={track.id}>
              <S.TrackTitle>{track.name}</S.TrackTitle>
              <S.TrackAuthor>{track.author}</S.TrackAuthor>
              <S.TrackAlbum>{track.album}</S.TrackAlbum>
              <S.TrackDuration>{track.duration_in_seconds}</S.TrackDuration>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite tracks found.</p>
      )}
    </div>
  )
}

export default MyTrack
