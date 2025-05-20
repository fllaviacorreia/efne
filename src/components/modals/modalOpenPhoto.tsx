import React from 'react';
import { Modal, Card, Button } from '@ui-kitten/components';
import { Image } from 'expo-image';

interface OpenPhotoProps {
    uri: string;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const ModalOpenPhoto: React.FC<OpenPhotoProps> = ({ uri, visible, setVisible }) => {
    return (
        <Modal
            visible={visible}
            backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onBackdropPress={() => setVisible(false)}
        >
            <Card disabled={true}>
                <Image
                    source={{ uri }}
                    style={{ width: 400, height: 600, resizeMode: 'contain', }}
                />
                <Button onPress={() => setVisible(false)} style={{ marginTop: 50, borderRadius: 25 }}>
                    Fechar
                </Button>
            </Card>
        </Modal>
    );
};

export default ModalOpenPhoto;