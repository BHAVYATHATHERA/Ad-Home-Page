// src/components/EditBannerTemplateBs.tsx
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { Banner } from '@/types/Banner';

interface EditBannerTemplateBsProps {
    open: boolean;
    onClose: () => void;
    banner: Banner;
    onSave: (banner: Banner) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ open, onClose, banner, onSave }) => {
    const [editedBanner, setEditedBanner] = useState<Banner>(banner);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedBanner({ ...editedBanner, [name]: value });
    };

    const handleSave = () => {
        onSave(editedBanner);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Banner</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    name="title"
                    label="Title"
                    type="text"
                    fullWidth
                    value={editedBanner.title}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    value={editedBanner.description}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="cta"
                    label="CTA"
                    type="text"
                    fullWidth
                    value={editedBanner.cta}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="image"
                    label="Image URL"
                    type="text"
                    fullWidth
                    value={editedBanner.image}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    name="background"
                    label="Background URL"
                    type="text"
                    fullWidth
                    value={editedBanner.background}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditBannerTemplateBs;
