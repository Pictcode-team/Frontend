import React, { useEffect, useState } from 'react';

import GalleryItem from '../GalleryItem/index';
import Loader from '../Loader/index';

import folder from '../../assets/img/folder.svg';
import logo from '../../assets/img/logo-pictcode.png';
import './styles.scss';
import { UseImages } from '../../utils/customHooks/useImages';

interface localImageInterface {
  image: undefined | string;
}

const WorkspaceModal = (props: any) => {
  const [localImages, setLocalImages] = useState([]);
  const [localImage, setLocalImage] = useState<localImageInterface>({
    image: undefined,
  });
  const { upload, images, isLoading } = UseImages();

  console.log(isLoading);

  useEffect(() => {
    setLocalImages((prevImages) => prevImages.concat(images));
  }, [images]);

  useEffect(() => {
    setLocalImages(props.files);
  }, [props.files]);

  const deleteItem = (entryUrl: string): void => {
    setLocalImages((localImages) =>
      localImages.filter((url) => url !== entryUrl)
    );
  };

  const setImage = (entryUrl: string) => {
    setLocalImage({ image: entryUrl });
  };

  const backToModal = () => {
    setLocalImage({ image: undefined });
  };

  const handleUpload = async (e: any) => {
    await upload(e);
  };

  let { image } = localImage;

  return (
    <div className="workspace">
      {image ? (
        <>
          <header className="workspace_header__image">
            <div>
              <button
                onClick={backToModal}
                className="workspace_header__image--close"
              >
                X
              </button>
            </div>
          </header>
          <figure className="workspace_figure">
            <img src={localImage.image} alt="full size image" />
          </figure>
        </>
      ) : (
        <>
          <header className="workspace_header">
            <div className="workspace_header__left">
              <input
                type="text"
                name="gallery name"
                placeholder="Your Folder Name"
                id=""
                className="workspace_header__left--name"
              />
              <img
                src={folder}
                alt="folder"
                className="workspace_header__left--folder"
              />
            </div>
            <div className="workspace_header__right">
              <input
                className="workspace_header__right--input"
                accept="image/*"
                multiple
                onChange={handleUpload}
                type="file"
              />
              <button
                onClick={props.onClose}
                className="workspace_header__right--close"
              >
                X
              </button>
            </div>
          </header>
          <div className="workspace_gallery">
            {!!localImages.length ? (
              localImages.map((item, index) => (
                <GalleryItem
                  deleteItem={deleteItem}
                  setImage={setImage}
                  key={index}
                  ImageUrl={item}
                />
              ))
            ) : isLoading ? (
              <Loader />
            ) : (
              <h2>You dont have any item yet</h2>
            )}
          </div>
          <button
            className="workspace_footer"
            onClick={(e) => props.handleEvent(true)}
          >
            <span>Get your</span>
            <img src={logo} alt="" />
          </button>
        </>
      )}
    </div>
  );
};

export default WorkspaceModal;
