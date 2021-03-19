import React from 'react';
import trash from '../../assets/img/delete.svg';
import eye from '../../assets/img/view.svg';
import './styles.scss'

const GalleryItem = ({ImageUrl}: any) => {
  return (
    <div className="galleryItem">
      <img src={ImageUrl} alt="" height='100px'/>
      <div className="galleryItem_inside">
        <div className="galleryItem_inside-item">
          <img src={trash} alt=""/>
        </div>
        <div className="galleryItem_inside-item">
          <img src={eye} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default GalleryItem;