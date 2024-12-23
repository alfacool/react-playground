import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

export function CodeSelector({ label, val, opt, onChange }) {
    return (
        <div className="field col-12 lg:col-4">
            <label htmlFor={label}>{label}</label>
            <Dropdown filter id={label} value={val} onChange={onChange} options={opt} optionLabel="full_name" placeholder="Select Country" />
        </div>
    );
}
