import React from 'react';

const date = new Date();
export const Header = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '6px', fontSize: '14px', color: 'whitesmoke', fontWeight: 'bold' }}>Ngày {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</div>
    )
}