import React, { useEffect, useState } from 'react';
import WorkspaceModal from '../../components/WorkspaceModal/index';
import QRModal from '../../components/QRModal';
import { useImages } from '../../utils/customHooks/useImages';
import './styles.scss';
import { useNotification } from '../../utils/customHooks/useNotification';

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
    upload,
    setGeneratedQR,
    setImages,
    images,
    generatedQR,
  } = useImages();

  const { infoNotification } = useNotification();

  useEffect(() => {
    infoNotification('Remember you can only upload 10 images at the time')
  }, []);

  const handleUpload = async (e: any) => {
    setShowModal(true);
    await upload(e);
  };

  const handleCloseModal = (e: boolean) => {
    setShowModal(false);
    setGeneratedQR(false);
    setImages([]);
  };

  const handleOpenQRModal = (e: boolean) => {
    setGeneratedQR(true);
  };

  return (
    <section className="upload">
      <div className="upload__form">
        <input
          accept="image/*"
          className="upload__files"
          multiple
          onChange={handleUpload}
          type="file"
          // text="Upload your files"
        />
        {showModal && (
          <div className="modal fadeIn">
            <WorkspaceModal
              isOpen={handleUpload}
              onClose={handleCloseModal}
              handleEvent={handleOpenQRModal}
              files={images}
            />
            {generatedQR === true && (
              <QRModal
                isOpen={generatedQR}
                GeneratedUrl="here must be the url"
              />
            )}
          </div>
        )}
      </div>
      <p>Only jpg, png, gif, svg</p>
    </section>
  );
};

export default Home;
