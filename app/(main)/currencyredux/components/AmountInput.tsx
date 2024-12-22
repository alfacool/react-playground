import React, { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';

export function AmountInput({ amount, onChange }) {
    return (
        <div className="field col-12 lg:col-4">
            <label htmlFor="AmountInput">Amount</label>
            <InputNumber inputId="AmountInput" value={amount} onValueChange={onChange} minFractionDigits={0} maxFractionDigits={100} />
        </div>
    );
}
