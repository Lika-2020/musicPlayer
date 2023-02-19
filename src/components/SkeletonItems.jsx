import Skeleton from 'react-loading-skeleton'
import React from 'react'

function SkeletonItems() {
  return (
    <div className="skeleton-items">
      <div
        className="left-col"
        style={{
          display: 'block',

          marginBottom: '10px',
          marginRight: '15px',
        }}
      >
        <Skeleton width={51} height={51} />
      </div>
      <div
        className="long-col"
        style={{
          display: 'block',

          marginBottom: '10px',
          lineHeight: 3,
          marginRight: '15px',
          marginLeft: '15px',
        }}
      >
        <Skeleton width={100} height={19} />
      </div>
      <div
        className="long-col"
        style={{
          display: 'block',

          marginBottom: '10px',
          lineHeight: 3,
          // marginRight: '15px',
          marginLeft: '200px',
        }}
      >
        <div>
          <Skeleton width={206} height={19} />
        </div>
      </div>
      <div
        className="long-col"
        style={{
          display: 'block',
          marginBottom: '10px',
          lineHeight: 3,

          marginLeft: '200px',
        }}
      >
        <Skeleton width={206} height={19} />
      </div>
      <div
        className="long-col"
        style={{
          display: 'block',
          marginBottom: '10px',
          lineHeight: 3,

          marginLeft: '50px',
        }}
      >
        <Skeleton width={40} height={19} />
      </div>
    </div>
  )
}

export default SkeletonItems
