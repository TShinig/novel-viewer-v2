import { useState } from 'react';
import { Button, CardWrapper, Content, Image, Menu, Modal, Title, Volume } from "./styled";
import { dataNovels } from '../data/data';


const Card = () => {
    const [modalData, setModalData] = useState(null);

    const handleOpenModal = (volume) => {
        setModalData(volume);
    };

    const handleCloseModal = () => {
        setModalData(null);
    };

    return (
        <>
            {dataNovels.map((volume, index) => (
                <CardWrapper key={index}>
                    <Image src={volume.image} alt={volume.title} />
                    <Content>
                        <Title className="title">{volume.title}</Title>
                        <Volume className="volume">{volume.description}</Volume>
                        <Button onClick={() => handleOpenModal(volume)}>Abrir Volume</Button>
                    </Content>
                </CardWrapper>
            ))}

            {modalData && (
                <Modal open>
                    <Menu>
                        <Button onClick={handleCloseModal}>Close</Button>
                    </Menu>
                    <iframe src={modalData.volume} width="100%" height="100%" />
                </Modal>
            )}
        </>
    );
};

export default Card;