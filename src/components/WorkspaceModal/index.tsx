import React from 'react';

import GalleryItem from '../GalleryItem/index';
import Loader from '../Loader/index';

import folder from '../../assets/img/folder.svg';
import plus from '../../assets/img/plus.svg';
import logo from '../../assets/img/logo-pictcode.png';
import './styles.scss';

const WorkspaceModal = (props : any) => {
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
        { !!props.files.length ? (
          props.files?.map((item, index) => <GalleryItem key={index} ImageUrl={item}/>))
          : <Loader/>
        }
      </div>
      <button className="workspace_footer" onClick={e => props.handleEvent(true)}>
        <span>Get your</span>
        <img src={logo} alt=""/>
      </button>
    </div>
  )
}

export default WorkspaceModal;