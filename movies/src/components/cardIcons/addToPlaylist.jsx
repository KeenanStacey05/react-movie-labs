import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Tooltip from "@mui/material/Tooltip";
const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };

  return (
    <Tooltip title="Add to Must Watch">
      <IconButton aria-label="Add to Must Watch" onClick={handleAddToMustWatch}>
        <PlaylistAddIcon color="secondary" fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};

export default AddToPlaylistIcon;
