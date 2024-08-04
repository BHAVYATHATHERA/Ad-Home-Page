// src/app/page.tsx
"use client";  // Add this line

import { useState } from 'react';
import { Container, Grid } from '@mui/material';
import BannerImageComp from '@/components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import bannersData from '../data/banners';
import { Banner } from './Banner';

const HomePage = () => {
    const [banners, setBanners] = useState<Banner[]>(bannersData);
    const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const handleEdit = (id: number) => {
        const banner = banners.find(b => b.id === id) || null;
        setSelectedBanner(banner);
        setIsEditOpen(true);
    };

    const handleSave = (updatedBanner: Banner) => {
        setBanners(banners.map(b => (b.id === updatedBanner.id ? updatedBanner : b)));
        setIsEditOpen(false);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                {banners.map(banner => (
                    <Grid item xs={12} sm={6} md={4} key={banner.id}>
                        <BannerImageComp {...banner} onEdit={handleEdit} />
                    </Grid>
                ))}
            </Grid>
            {selectedBanner && (
                <EditBannerTemplateBs
                    open={isEditOpen}
                    onClose={() => setIsEditOpen(false)}
                    banner={selectedBanner}
                    onSave={handleSave}
                />
            )}
        </Container>
    );
};

export default HomePage;
