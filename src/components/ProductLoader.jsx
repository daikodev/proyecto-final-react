import React from 'react'
import Skeleton from 'react-loading-skeleton'

function ProductLoader() {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
                <div className="card">
                    <span className='px-3 pt-3'>
                        <Skeleton height={298.42} />
                    </span>

                    <div className="card-body">
                        <h5 className="w-50 m-0"><Skeleton /></h5>
                        <h4 className="m-0"><Skeleton /></h4>
                        <h4 className="m-0"><Skeleton /></h4>
                        <p className="m-0"><Skeleton /></p>
                        <p className="m-0"><Skeleton /></p>

                        <div className='d-flex align-items-center justify-content-between mt-2'>
                            <h4 className='w-50 me-1 m-0'><Skeleton /></h4>
                            <h4 className='w-50 ms-1 m-0'><Skeleton /></h4>
                        </div>

                        <div className='d-flex align-items-center w-100 justify-content-between mt-2'>
                            <h2 className='w-50 me-1 m-0'><Skeleton /></h2>
                            <h2 className='w-50 ms-1 m-0'><Skeleton /></h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductLoader