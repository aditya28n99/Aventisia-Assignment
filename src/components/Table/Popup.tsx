import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import FormComponent from "../Form/Form";

interface PopupComponentProps {
    isOpen: boolean;
    onClose: () => void;
}

const PopupComponent: React.FC<PopupComponentProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[439px] p-0"> 
                <DialogHeader>
                    <DialogTitle className=" border-b py-4 px-5" >Create new model</DialogTitle>
                    <div className="pb-4 px-5">
                        <FormComponent onClose={onClose}/>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default PopupComponent;
