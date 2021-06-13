import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() => ({
  fab: {
    position: 'fixed',
    bottom: '2em',
    right: '2em',
  },
}));

const AddBtn = ({ onClick }) => {
  const classes = useStyles();
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddBtn;
