import './App.css';
import {Box, Tab, Tabs, Typography} from "@mui/material";
import {useState} from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import Tables from "./Tables";
import Modals from "./Modals";
import BottomNavigationComponent from "./BottomNavigationComponent";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function getProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function App() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
  <div className={'cont'}>
      <h1>{'Material Design'}</h1>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Buttons" {...getProps(0)} />
              <Tab label="Inputs" {...getProps(1)} />
              <Tab label="Tables" {...getProps(2)} />
              <Tab label="Modals" {...getProps(3)} />
              <Tab label="Bottom Navigation" {...getProps(4)} />
          </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <Buttons/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Inputs/>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Tables/>
      </TabPanel>
      <TabPanel value={value} index={3}>
          <Modals/>
      </TabPanel>
      <TabPanel value={value} index={4}>
          <BottomNavigationComponent/>
      </TabPanel>
  </div>
  );
}

export default App;
