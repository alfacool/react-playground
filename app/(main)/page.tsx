/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useContext, useEffect } from 'react';
import { LayoutContext } from '@layout/context/layoutcontext';

const MyPage = () => {
    const { layoutConfig } = useContext(LayoutContext);

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
        } else {
        }
    }, [layoutConfig.colorScheme]);

    return (
        <div className="grid">
            <div className="col-12 lg:col-12 xl:col-12">
                <div className="card mb-0">Welcome !!</div>
            </div>
        </div>
    );
};

export default MyPage;
