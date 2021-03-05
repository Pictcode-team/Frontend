import React from 'react';
import ReactDOM from 'react-dom';
import { GalleryItem } from '../GalleryItem/index'
import './styles.scss'
import folder from '../../assets/img/folder.svg'
import plus from '../../assets/img/plus.svg'
import logo from '../../assets/img/logo-pictcode.png'

export const WorkspaceModal = (props: any) => {
  const portalDiv = document.getElementById("modal")
  portalDiv ? ReactDOM.createPortal : null;

  const imagesurls: string[] = [
    'https://www.gettyimages.es/gi-resources/images/frontdoor/editorial/Velo/GettyImages-Velo-1088643550.jpg',
    'https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg',
    'https://cdn.eso.org/images/thumb300y/eso1907a.jpg',
    'https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg',
    'https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg',
    'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg',
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://i.blogs.es/594843/chrome/450_1000.jpg',
    'https://i1.wp.com/esferacreativa.com/wp-content/uploads/2020/05/imagenes-para-redes-sociales-medidas-MadridNYC.png?resize=702%2C459&ssl=1',
    'https://los40es00.epimg.net/los40/imagenes/2020/01/08/cinetv/1578441173_946780_1578441736_noticia_normal.jpg'
  ]


  if (!props.isOpen) {
    return null;
  }
  return portalDiv ? ReactDOM.createPortal(
    <div className="modal QRGenerated">
      <div className="modal_container">
        <header className="modal_header">
          <div className="modal_header__left">
            <input type="text" name="gallery name" placeholder='Your Folder Name' id="" className="modal_header__left--name"/>
            <img src={folder} alt="" className="modal_header__left--folder"/>
          </div>
          <div className="modal_header__right">
            <div className="modal_header__right--add">
              <span>Add</span>
              <button className="modal_header__right--plus">
                <img src={plus} alt=""/>
              </button>
            </div>
            <button onClick={props.onClose} className="modal_header__right--close">X</button>
          </div>
        </header>
        <div className="modal_gallery">
          {imagesurls.map((item, index) =>
            <GalleryItem key={index} ImageUrl={item}/>
          )}
        </div>
        <button className="modal_footer">
          <span>Get your</span>
          <img src={logo} alt=""/>
        </button>
      </div>
    </div>
    , portalDiv) : null;
}