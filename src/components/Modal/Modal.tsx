import React from 'react';
import ReactDOM from 'react-dom';
import { ModalItem } from '../ModalItem/ModalItem'
import './styles.scss'
import image1 from '../../assets/img/background1.jpg'
import image2 from '../../assets/img/background2.jpg'
import image3 from '../../assets/img/background3.jpg'

export const Modal = (props: any) => {
  const portalDiv = document.getElementById("modal")
  portalDiv ? ReactDOM.createPortal : null;

  const imagesurls: string[] = [
    image1,
    image2,
    image3,
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
    <div className="modal">
      <div className="modal__container">
        <button onClick={props.onClose} className="modal__close">X</button>
        <div className="modal__gallery">
          {imagesurls.map((item, index) =>
            <ModalItem key={index} ImageUrl={item}/>
          )}
        </div>
      </div>
    </div>
    , portalDiv) : null;
}