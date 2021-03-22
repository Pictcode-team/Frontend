import React, { useContext, useEffect, useState } from 'react';
import WorkspaceModal from '../../components/WorkspaceModal/index';
import QRModal from '../../components/QRModal';
import './styles.scss';
import { useNotification } from '../../utils/customHooks/useNotification';
import { useImages } from '../../utils/customHooks/useImages';
import { imagesContext } from '../../utils/context/imagesContext.jsx';

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { setGeneratedQR, generatedQR, setRawData, setImages } = useContext(
    imagesContext
  );

  const { infoNotification } = useNotification();

  const { upload } = useImages();

  useEffect(() => {
    infoNotification('Remember you can only upload 10 images at the time');
  }, []);

  const handleUpload = (e) => {
    setShowModal(true);
    const files: never[] = Array.from(e.target.files);
    setRawData((prevState) => [...prevState, ...files]);
    upload();
  };

  const handleCloseModal = (e: boolean) => {
    setShowModal(false);
    setGeneratedQR((bool) => (bool = false));
    setRawData([]);
    setImages([]);
  };

  const handleOpenQRModal = (e: boolean) => {
    setGeneratedQR((bool) => (bool = true));
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
        />
        {showModal && (
          <div className="modal fadeIn">
            <WorkspaceModal
              isOpen={handleUpload}
              onClose={handleCloseModal}
              handleEvent={handleOpenQRModal}
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
