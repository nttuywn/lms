import React from 'react';

class Pagination extends React.Component {
    render() {
        return (
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="">Prev</a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="">1</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="">2</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="">3</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="">4</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="">Next</a>
                </li>
            </ul>
        );
    }
}

export default Pagination;