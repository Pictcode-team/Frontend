import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import { useUpload } from '../../UploadContext/'
import { GalleryItem } from '../GalleryItem/index'
import './styles.scss'
import folder from '../../assets/img/folder.svg'
import plus from '../../assets/img/plus.svg'
import logo from '../../assets/img/logo-pictcode.png'

export const WorkspaceModal = (props : any) => {
  const { selectedFiles } : any = useUpload();

  useEffect(() => {
  }, [selectedFiles])

  return (
    <div className="workspace">
      <header className="workspace_header">
        <div className="workspace_header__left">
          <input type="text" name="gallery name" placeholder='Your Folder Name' id="" className="workspace_header__left--name"/>
          <img src={folder} alt="" className="workspace_header__left--folder"/>
        </div>
        <div className="workspace_header__right">
          <div className="workspace_header__right--add">
            <span>Add</span>
            <button className="workspace_header__right--plus">
              <img src={plus} alt=""/>
            </button>
          </div>
          <button onClick={props.onClose} className="workspace_header__right--close">X</button>
        </div>
      </header>
      <div className="workspace_gallery">
        {selectedFiles.map((item, index) =>
          <GalleryItem key={index} ImageUrl={item}/>
        )}
      </div>
      <button className="workspace_footer" onClick={e => props.handleEvent(true)}>
        <span>Get your</span>
        <img src={logo} alt=""/>
      </button>
    </div>
  )
}