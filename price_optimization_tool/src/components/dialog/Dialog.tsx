import React from "react";
import { Dialog } from "primereact/dialog";

import './Dialog.css';
import ButtonField from "../button/ButtonField";

interface CustomDialogProps {
    visible: boolean;
    onHide: () => void;
    title: string;
    children: React.ReactNode;
    onSubmit?: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = ({ visible, onHide, title, children, onSubmit }) => {
    const footer = (
        <div className="dialog-footer">
            <ButtonField label="Cancel" onClick={onHide} />
            <ButtonField label="Add" onClick={onSubmit} isPrimary={true}/>
        </div>
    );

    return (
        <Dialog
            header={title}
            visible={visible}
            style={{ minWidth: "35vw", maxHeight: "80vh", minHeight: '40vh' }}
            onHide={onHide}
            footer={footer}
            className="custom-dialog"
            maskStyle={{ backgroundColor: "rgba(108, 104, 104, 0.7)" }} // Slightly gray overlay
        >
            {children}
        </Dialog>
    );
};

export default CustomDialog;