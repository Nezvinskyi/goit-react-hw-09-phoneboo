import IconButton from '@material-ui/core/IconButton';
import CallIcon from '@material-ui/icons/Call';

const CallBtn = ({ number }) => (
  <a href={`tel:${number}`}>
    <IconButton aria-label="call">
      <CallIcon />
    </IconButton>
  </a>
);

export default CallBtn;
