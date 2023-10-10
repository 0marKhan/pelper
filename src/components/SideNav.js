import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const useStyles = {
  button: {
    background: "transparent",
  },
  icon: {
    fontSize: "28px",
    color: "white",
  },
  sideNav: {
    width: 250,
    backgroundColor: "#373737",
    color: "white",
  },
  listItem: {
    textAlign: "center",
  },
};

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <List sx={styles.sideNav}>
      {[
        "Home",
        "About",
        "Adoption Nonprofits",
        "Afghanistan Nonprofits",
        "Animal Nonprofits",
        "Art Nonprofits",
        "Autism Nonprofits",
        "Islam Nonprofits",
        "Buddism Nonprofits",
        "Cancer Nonprofits",
        "Christianity Nonprofits",
        "Disease Nonprofits",
        "Hinduism Nonprofits",
        "Health Nonprofits",
        "Immigrants Nonprofits",
        "Justice Nonprofits",
        "Refugees Nonprofits",
        "Religion Nonprofits",
      ].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} sx={styles.listItem} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  const styles = useStyles;

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={styles.button}>
            <MenuIcon sx={styles.icon} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
