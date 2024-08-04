// src/components/BannerImageComp.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Banner } from '@/types/Banner';

interface BannerImageCompProps extends Banner {
    onEdit: (id: number) => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ id, title, description, cta, image, background, onEdit }) => {
    return (
        <Card style={{ backgroundImage: `url(${background})` }}>
            <CardMedia component="img" image={image} alt={title} />
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
                <IconButton onClick={() => onEdit(id)}>
                    <EditIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default BannerImageComp;
