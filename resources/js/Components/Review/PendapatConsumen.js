import React from 'react';
import Carausel from '../Carausel/Carausel';

const PendapatConsumen = ({ className = '' }) => {
  return (
    <div className={"" + className}>
      <div className="head mb-[22px]">
        <h3 className="text-center font-bold text-lg sm:text-[60px]">What our customer says</h3>
      </div>
      <div className="body clear-both py-[27px]">
        <Carausel />
      </div>
    </div>
  );
};

export default PendapatConsumen;