import React from 'react';
import { Skeleton } from "keep-react";


const Skeletons = () => {
    return (
        <div className="max-w-3xl py-5">
        <Skeleton>
          <div className="full">
            <Skeleton.Line height="h-[200px]" />
          </div>
          <div className="w-11/12 text-right">
            <Skeleton.Line height="h-4" />
          </div>
          <div className="w-9/12">
            <Skeleton.Line height="h-4" />
          </div>
          <div className="w-10/12">
            <Skeleton.Line height="h-4" />
          </div>
          <div className="w-7/12">
            <Skeleton.Line height="h-4" />
          </div>
          <div className="w-3/12">
            <Skeleton.Line height="h-[46px]" />
          </div>
        </Skeleton>
      </div>
    );
};

export default Skeletons;