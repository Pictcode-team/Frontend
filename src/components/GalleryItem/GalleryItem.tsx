import React, { useState } from 'react'
import './styles.scss'

export const GalleryItem = ({ImageUrl}: any) => {
  return (
    <div className="galleryItem">
      <img src={ImageUrl} alt="" height='100px'/>
    </div>
  )
}