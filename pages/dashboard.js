import * as React from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Apps from "@mui/icons-material/Apps";
import Notifications from "@mui/icons-material/Notifications";
import Search from "@mui/icons-material/Search";
import Shield from "@mui/icons-material/Shield";
import PieChart from "@mui/icons-material/PieChart";
import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import FolderOutlined from "@mui/icons-material/FolderOutlined";
import ReplyOutlined from "@mui/icons-material/ReplyOutlined";
import FlagOutlined from "@mui/icons-material/FlagOutlined";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import Refresh from "@mui/icons-material/Refresh";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const purple = {
  50: "#FAF8FE",
  100: "#F0EBFD",
  200: "#DDD1FA",
  300: "#C3B2F6",
  400: "#8E7AEE",
  500: "#5F54E7",
  600: "#3536BD",
  700: "#302D97",
  800: "#1F1944",
  900: "#151025",
};

const green = {
  50: "#F3FCF3",
  100: "#DAF5DB",
  200: "#A5E7A8",
  300: "#5BD360",
  400: "#419E44",
  500: "#317934",
  600: "#235625",
  700: "#1D461E",
  800: "#0F2410",
  900: "#09160A",
};

const grey = {
  50: "#F9F9F9",
  100: "#EEEEEE",
  200: "#D7D7D7",
  300: "#BBBBBB",
  400: "#8B8B8B",
  500: "#6A6A6A",
  600: "#4B4B4B",
  700: "#3E3E3E",
  800: "#1F1F1F",
  900: "#131313",
};

const LightIconButton = styled(IconButton)({
  border: "1px solid",
  borderColor: purple[700],
  color: "#DDD1FA",
  backgroundColor: purple[800],
  "&:hover": {
    borderColor: purple[500],
    backgroundColor: purple[700],
  },
});

const SelectButton = styled(Button)({
  padding: "0px 8px",
  borderColor: "transparent",
  backgroundColor: purple[100],
  "&:hover": {
    borderColor: purple[300],
    backgroundColor: purple[100],
  },
});

export default function Dashboard() {
  return (
    <ThemeProvider
      theme={createTheme({
        typography: {
          button: {
            textTransform: "initial",
          },
        },
        shape: {
          borderRadius: 8,
        },
        palette: {
          primary: {
            main: "#5F54E7",
            dark: "#151025",
          },
        },
        components: {
          MuiAvatar: {
            defaultProps: {
              variant: "rounded",
            },
            styleOverrides: {
              root: {
                backgroundColor: grey[200],
                color: grey[500],
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                // borderRadius: "8px",
              },
              outlined: {
                borderColor: grey[200],
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                borderRadius: "8px",
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                "&.Mui-selected": {
                  backgroundColor: "transparent",
                  "& *": {
                    color: purple[500],
                  },
                  "& .MuiListItemText-primary": {
                    fontWeight: 500,
                  },
                },
              },
            },
          },
          MuiListItemIcon: {
            styleOverrides: {
              root: {
                minWidth: 40,
              },
            },
          },
          MuiChip: {
            variants: [
              {
                props: { variant: "filled", color: "success" },
                style: {
                  backgroundColor: green[100],
                  color: green[500],
                },
              },
            ],
          },
        },
      })}
    >
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            size="small"
            sx={{
              ml: "-8px",
              border: "1px solid",
              borderColor: "rgba(255,255,255,0.4)",
              "&:hover": {
                borderColor: "rgba(255,255,255,0.8)",
              },
            }}
          >
            <Shield fontSize="small" />
          </IconButton>
          <Divider />
          <Box
            sx={{
              width: "1px",
              bgcolor: "rgba(255,255,255,0.2)",
              alignSelf: "stretch",
              mx: 2,
            }}
          />
          <Typography sx={{ mx: 2 }}>Email</Typography>
          <Box
            sx={{
              width: "1px",
              bgcolor: "rgba(255,255,255,0.2)",
              alignSelf: "stretch",
              mx: 2,
            }}
          />
          <InputBase
            placeholder="Search..."
            startAdornment={<Search sx={{ mr: 1, opacity: 0.6 }} />}
            sx={{ color: "inherit" }}
          />
          <Box
            sx={{
              width: "1px",
              bgcolor: "rgba(255,255,255,0.2)",
              alignSelf: "stretch",
              mx: 2,
              ml: "auto",
            }}
          />
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <Apps />
          </IconButton>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "calc(100vh - 64px)", display: "flex" }}>
        <Box
          sx={{
            bgcolor: "primary.dark",
            width: 64,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            px: 1,
            py: 2,
            flexShrink: 0,
          }}
        >
          <LightIconButton>
            <PieChart fontSize="small" />
          </LightIconButton>
          <LightIconButton>
            <Person fontSize="small" />
          </LightIconButton>
          <Avatar
            src="https://avatars.githubusercontent.com/u/18292247?s=128&v=4"
            sx={{ mt: "auto" }}
          />
          <LightIconButton>
            <Settings fontSize="small" />
          </LightIconButton>
        </Box>
        <Box
          sx={{
            width: 200,
            bgcolor: "common.white",
            borderRight: "1px solid",
            borderColor: "divider",
            flexShrink: 0,
          }}
        >
          <List subheader={<ListSubheader>BROWSE</ListSubheader>}>
            <ListItemButton selected>
              <ListItemIcon>
                <FolderOutlined />
              </ListItemIcon>
              <ListItemText>Inbox</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ReplyOutlined />
              </ListItemIcon>
              <ListItemText>Sent</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <FolderOutlined />
              </ListItemIcon>
              <ListItemText>Draft</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <FlagOutlined />
              </ListItemIcon>
              <ListItemText>Flagged</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <DeleteOutlined />
              </ListItemIcon>
              <ListItemText>Trash</ListItemText>
            </ListItemButton>
          </List>
          <br />
          <List subheader={<ListSubheader>TAGS</ListSubheader>}>
            <ListItemButton>
              <ListItemText>Personal</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Work</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Friends</ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText>Travel</ListItemText>
            </ListItemButton>
          </List>
        </Box>
        <Box
          sx={{
            width: 320,
            bgcolor: "common.white",
            borderRight: "1px solid",
            borderColor: "divider",
            flexShrink: 0,
          }}
        >
          <List
            subheader={
              <ListSubheader sx={{ display: "flex", alignItems: "center" }}>
                INBOX{" "}
                <IconButton
                  size="small"
                  sx={{
                    ml: "auto",
                    bgcolor: purple[100],
                    color: purple[500],
                    "&:hover": {
                      color: purple[700],
                      bgcolor: purple[200],
                    },
                  }}
                >
                  <Refresh fontSize="small" />
                </IconButton>
              </ListSubheader>
            }
          >
            <Divider />
            {[...Array(5)].map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <ListItemButton
                    sx={{
                      py: 2,
                      alignItems: "flex-start",
                      ...(index === 0 && {
                        bgcolor: purple[50],
                        "&:hover": { bgcolor: purple[50] },
                      }),
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar src="https://avatars.githubusercontent.com/u/18292247?s=128&v=4" />
                    </ListItemAvatar>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="caption">
                          Janet Erickson
                        </Typography>
                        <Typography variant="caption">14 Oct 2016</Typography>
                      </Box>
                      <ListItemText
                        primary="Blank slates for new website"
                        secondary="Hi, Thomas, You don't have..."
                      />
                      {index === 0 && (
                        <Chip label="Travel" color="success" size="small" />
                      )}
                    </Box>
                  </ListItemButton>
                  <Divider />
                </React.Fragment>
              );
            })}
          </List>
        </Box>
        <Box sx={{ p: 2, flexGrow: 1 }}>
          <Paper>
            <Box
              sx={{
                p: 2,
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
              }}
            >
              <Avatar src="https://avatars.githubusercontent.com/u/18292247?s=128&v=4" />
              <ListItemText
                primary="Janet Erickson"
                secondary="Today at 15:45"
                sx={{ m: 0 }}
              />
              <Button variant="outlined">Reply</Button>
              <Button
                variant="outlined"
                sx={{ minHeight: 36, minWidth: 36, px: "5px" }}
              >
                <ReplyOutlined fontSize="small" />
              </Button>
              <Button
                variant="outlined"
                sx={{ minHeight: 36, minWidth: 36, px: "5px" }}
              >
                <DeleteOutlined fontSize="small" />
              </Button>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Blank slates for new website
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption">From</Typography>
                <SelectButton
                  variant="outlined"
                  size="small"
                  endIcon={<KeyboardArrowDown fontSize="small" />}
                >
                  janet@email.com
                </SelectButton>
                <Typography variant="caption">To</Typography>
                <SelectButton
                  variant="outlined"
                  size="small"
                  endIcon={<KeyboardArrowDown fontSize="small" />}
                >
                  janet@email.com
                </SelectButton>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography>
                Hi, Thomas, <br />
                <br />
                You don’t have to be a designer to appreciate good typography –
                just check out this student-made device that can detect and
                name fonts just by looking at it.
                <br />
                <br />
                While the pop culture world obsesses over the latest Snapchat
                filter fads and Instagram friending, skilled photographers are
                taking the shots that transcend social media Share Quote. Take
                advantage of an incredible offer to become a skilled and
                certified photographer, taking frame-worthy shots every time
                with The Hollywood Art Institute Photography Course and
                Certification.
                <br />
                <br />
                Regards, <br />
                Janet Erickson
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="caption">Attachments</Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}
              >
                <Avatar
                  src="https://avatars.githubusercontent.com/u/18292247?s=200&v=4"
                  sx={{ width: 61, height: 61 }}
                />
                <Avatar
                  src="https://avatars.githubusercontent.com/u/18292247?s=200&v=4"
                  sx={{ width: 61, height: 61 }}
                />
                <Paper variant="outlined" sx={{ display: "flex" }}>
                  <Avatar
                    sx={{
                      width: 61,
                      height: 61,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <FolderOutlined />
                  </Avatar>
                  <Box sx={{ py: 1, px: 2 }}>
                    <Typography color="primary.main">
                      blank_slates.doc
                    </Typography>
                    <Typography variant="body2">345 Kb</Typography>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
