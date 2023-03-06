import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FeedbackQuestion = ({ open, handleClose, dialogText }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogTitle id="alert-dialog-title" sx={{ textAlign: "left" }}>
            {dialogText.title}
          </DialogTitle>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "black", textAlign: "justify" }}
          >
            {dialogText.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Tentar novamente!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedbackQuestion;
