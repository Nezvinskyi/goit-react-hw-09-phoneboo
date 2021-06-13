import { IconButton } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
// import { useState } from 'react';

const DeleteBtn = ({ id, onDeleteContact }) => {
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handlePopoverOpen = event => {
  //   setAnchorEl(event.currentTarget);
  //   console.log('open popover');
  // };

  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  //   console.log('close popover');
  // };

  // const open = Boolean(anchorEl);
  return (
    <>
      <IconButton
        aria-label="delete"
        onClick={() => onDeleteContact(id)}
        // onMouseEnter={handlePopoverOpen}
        // onMouseLeave={handlePopoverClose}
      >
        <DeleteIcon />
      </IconButton>
      {/* <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        Delete Btn
      </Popover> */}
    </>
  );
};

export default DeleteBtn;
