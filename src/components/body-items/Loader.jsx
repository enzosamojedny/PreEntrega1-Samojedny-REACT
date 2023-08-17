import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Loader() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Stack spacing={3} style={{ display: 'flex', flexDirection: 'column', margin: '0' }}>
                <Skeleton variant="rectangular" width={210} height={210} />
                <Skeleton variant="rectangular" width={210} height={210} />
                <Skeleton variant="rectangular" width={210} height={210} />
            </Stack>
        </div>
    );
}

export default Loader;
