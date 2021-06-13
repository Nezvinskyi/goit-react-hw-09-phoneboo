import { IconButton } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteBtn = ({ id, onDeleteContact }) => (
  <IconButton aria-label="delete" onClick={() => onDeleteContact(id)}>
    <DeleteIcon />
  </IconButton>
);

export default DeleteBtn;
