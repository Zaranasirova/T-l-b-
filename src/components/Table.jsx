import React from 'react';

import { universities } from '../data';

const tableHeaders = [
    { key: 'name', label: 'Universitet' },
    { key: 'city', label: 'Şəhər' },
    { key: 'major', label: 'İxtisas' },
    { key: 'duration', label: 'Müddət' },
    { key: 'fee', label: 'Application fee' },
];

const Table = () => {
    return (
        <div className="table-section">
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th
                                    key={index}
                                    className={`
  ${['name', 'city', 'major'].includes(header.key) ? 'col-wide' : 'col-narrow'}
  ${header.key === 'duration' ? 'text-right' : ''}
`}

                                >
                                    {header.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                </table>

                <div className="scrollable-body">
                    <table>
                        <tbody>
                            {universities.map((item, index) => (
                                <tr key={index}>
                                    <td className="col-wide">{item.name}</td>
                                    <td className="col-wide">{item.city}</td>
                                    <td className="col-wide">{item.major}</td>
                                    <td className="col-narrow text-right">{item.duration}</td>
                                    <td className="col-narrow">{item.fee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
