import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import styled from 'styled-components';
import { useMemo, useState } from 'react';



const CompaniesDataTable = ({ data }) => {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const columns = [
        {
            name: 'Company Name',
            selector: row => row['Name'],
            sortable: true,
        },
        {
            name: 'Role',
            selector: row => row['Role'],
            sortable: true,
            right: true,
        }, {
            name: 'Matches',
            selector: row => row['Matches'],
            sortable: true,
            right: true,
        },
        {
            name: 'Meetings',
            selector: row => row['Meetings'],
            sortable: true,
            right: true,
        },
        {
            name: 'Poster Button',
            cell: () => <div>
                <Button className="btn-border-orange">Edit</Button>
                <Button variant="light" className="btn-border-gray">Remove</Button>
            </div>,
        },
    ];

    let companies = [];
    if (data && data.Companies) {
        companies = data.Companies;
    }
    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
    }, [filterText, resetPaginationToggle]);

    const filteredItems = companies.filter(item => item.Name && item.Name.toLowerCase().includes(filterText.toLowerCase()));
    return (
        <DataTable
            pagination
            columns={columns}
            data={filteredItems}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
        />
    )
}

export default CompaniesDataTable;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField id="search" type="text" placeholder="Search" aria-label="Search Input"

            value={filterText} onChange={onFilter} />


        <div className="d-flex justify-content-end align-items-center ml-auto">
            <Dropdown className="deals-time-range-selector">
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                    Last 12 months
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="">Last Month</Dropdown.Item>
                    <Dropdown.Item href="">Last Day</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        {/* <ClearButton type="button" onClick={onClear}>X</ClearButton> */}
    </>
);

const TextField = styled.input`
  height: 32px;
  width: 320px;
  border-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
background-color:#F6F8F9;
  &:hover {
    cursor: pointer;
  }
`;

