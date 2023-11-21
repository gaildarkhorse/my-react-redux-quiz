import React, { useState } from 'react';
import '../css/CautionDlg.css'; 

const CautionDlg = ({ isOpen, message, onClose }) => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <div className={`custom-alert-dialog ${open ? 'show' : 'hide'}`}>
      <div className="dialog-box">
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default CautionDlg;