import React, { useState, useEffect } from 'react';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';

export function RatesTable({ amount, rates, from }) {
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
    const [filters, setFilters] = useState<DataTableFilterMeta>({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
    });
    const resultTemplates = (rowData) => {
        let rateBase = rowData.rate / from.rate;
        let result = amount * rateBase;
        return result.toFixed(5) || '-';
    };

    const rateBase = (rowData) => {
        let rateBase = rowData.rate / from.rate;
        return rateBase.toFixed(6) || '-';
    };
    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let _filters = { ...filters };

        // @ts-ignore
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="block mt-2 md:mt-0 p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" value={globalFilterValue} onInput={onGlobalFilterChange} placeholder="Search..." />
                </span>
            </div>
        );
    };
    const header = renderHeader();
    return (
        <>
            <DataTable value={rates} stripedRows tableStyle={{ minWidth: '50rem' }} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} filters={filters} globalFilterFields={['name', 'full_name']} header={header}>
                <Column field="name" header="Code"></Column>
                <Column field="full_name" header="Name"></Column>
                <Column body={rateBase} header="Rate"></Column>
                <Column body={resultTemplates} header="Result"></Column>
            </DataTable>
        </>
    );
}
