import React from 'react';

const Pagination = ({ listPerPage, totalList, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalList / listPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers);


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center">
                {
                    pageNumbers.map(number =>
                        <li className="page-item">
                            <a onClick={() => paginate(number)} class="page-link" href="#">{number}</a>
                        </li>)
                }
            </ul>
        </nav>
    );
};

export default Pagination;