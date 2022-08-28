import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import AddServies from './ServicesForms'

const ServiceModal = ({ show, Setshow, ServiceType }) => {

    const onOpenModal = () => Setshow(true);
    const onCloseModal = () => Setshow(false);

    return (
        <div>
            <Modal open={show} onClose={onCloseModal} center>
                <AddServies ServiceType={ServiceType} onCloseModal={onCloseModal} />
            </Modal>
        </div>
    );
};

export default ServiceModal;

