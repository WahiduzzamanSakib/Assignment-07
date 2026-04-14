import React, { use } from 'react';

const Homepage = ({ dataPromise }) => {
    const data = use(dataPromise)
    return (
        <div>
            <div className='container mx-auto flex flex-col justify-center items-center mt-8 mb-4 space-y-4'>
                <h2 className='text-4xl font-bold'>Friends to keep close in your life</h2>
                <h4 className='text-gray-600'> Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</h4>
                <button className='btn btn-success text-white font-bold'>+ Add a Friend</button>
            </div>

            
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">

                        <div className=" bg-base-200 shadow flex flex-col items-center justify-center">
                                <h2 className="text-3xl font-bold">{data.length}</h2>
                                <p>Total Friends</p>
                        </div>

                        <div className=" bg-base-200 shadow flex flex-col items-center justify-center p-6">
                         
                                <h2 className="text-3xl font-bold">3</h2>
                                <p>On Track</p>
                            
                        </div>

                        <div className=" bg-base-200 shadow flex flex-col items-center justify-center p-6">
                                <h2 className="text-3xl font-bold flex flex-col items-center justify-center">6</h2>
                                <p>Need Attention</p>
                        </div>

                        <div className=" bg-base-200 shadow flex flex-col items-center justify-center">
                                <h2 className="text-3xl font-bold">12</h2>
                                <p>Interactions This Month</p>
                        </div>

                    </div>

                </div>
        </div>
    );
};

export default Homepage;