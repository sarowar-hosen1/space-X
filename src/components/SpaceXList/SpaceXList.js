import React from 'react';
import {ScaleLoader} from 'react-spinners';
import './SpaceXList.css';

const SpaceXList = ({currentSpaceX}) => {

    

    return (
        <div className="spaceX-list">
            <div className="row">
                {
                    currentSpaceX.length ? 
                    currentSpaceX.map(spaceX =>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card">
                                <div className="card-img-top">
                                    <img src={spaceX.links.mission_patch_small} alt="" />
                                </div>
                                <div className="card-content">
                                    <h6><a href={spaceX.links.article_link} target="_blank">{`${spaceX.mission_name}#${spaceX.flight_number}`}</a></h6>
                                    <h6>Mission Ids:</h6>
                                    {
                                        spaceX.mission_id.map(id => <li>{id}</li>)
                                    }
                                    <h6>Launch Year: <span className='text-sm'>{spaceX.launch_year}</span></h6>
                                    <h6>Successfully Lanunch: <span>{spaceX.launch_success ? "true" : "false"}</span></h6>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <div className='d-flex justify-content-center'>
                        <ScaleLoader></ScaleLoader>
                    </div>
                }
            </div>
        </div>
    );
};

export default SpaceXList;