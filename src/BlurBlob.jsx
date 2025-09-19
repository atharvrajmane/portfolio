import React from 'react'
import PropTypes from 'prop-types'

const BlurBlob = ({ position, size }) => {

    const { top, left } = position
    const { width, height } = size

  return (
    <div className='absolute'
    style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
    }}
    >
        
        <div className='w-full h-full bg-[#006666] rounded-full opacity-40 blur-3xl animate-blob z-0'></div>
    </div>
  )
}

//Prop types part
BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
};

export default BlurBlob
