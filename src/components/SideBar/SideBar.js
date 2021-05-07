import React from 'react';
import './SideBar.css';

const SideBar = ({ handleYear, handleLaunch, handleLanding, handleClearFilter}) => {
    return (
        <div className="side-bar">
            <div className="d-flex justify-content-between">
                <h5>Filters</h5>
                <button onClick={handleClearFilter} className='btn btn-secondary btn-sm'>Clear Filter</button>
            </div>
            <div className="year">
                <p>Launch Year</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2006)}>2006</button>
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2007)}>2007</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2008)}>2008</button>
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2009)}>2009</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2010)}>2010</button>
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2011)}>2011</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2012)}>2012</button>
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2013)}>2013</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2014)}>2014</button>
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2015)}>2015</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2016)}>2016</button>
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2017)}>2017</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2018)}>2018</button>
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2019)}>2019</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleYear(2020)}>2020</button>
                </div>
            </div>
            <div className="launch">
                <p>Successfully Launch</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleLaunch(true)}>True</button>
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleLaunch(false)}>False</button>
                </div>
            </div>
            <div className="landing">
                <p>Successfully Landing</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleLanding(true)}>True</button>
                    <button className="btn btn-secondary btn-sm mb-1" onClick={() => handleLanding(false)}>False</button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;