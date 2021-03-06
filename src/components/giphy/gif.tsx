import React from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';  
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './index.scss';

function TabPanel(props:any) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index:any) { 
    return {
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

  function process(){
      console.log()
  }

export const Hello =  function () { 
    const gf = new GiphyFetch("EU96dEA1VGFKXPnlbuEvBzEkUg19K9ze"); 
    const fetchGifs = (offset: number) => gf.emoji({ offset, limit: 10 })
    const fetchTreding = (offset: number) => gf.trending({ offset, limit: 10 })
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event:any, newValue:any) => {
      setValue(newValue);
      console.log(event);
    };

    return ( 
        <div>  
            <div id="tabPanel" className={classes.root}>
                <AppBar position="static">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="off"
                    aria-label="scrollable prevent tabs example"
                    >
                    <Tab icon={<PhoneIcon />} aria-label="phone" {...a11yProps(0)} />
                    <Tab icon={<FavoriteIcon />} aria-label="favorite" {...a11yProps(1)} />
                    {/* <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(2)} />
                    <Tab icon={<HelpIcon />} aria-label="help" {...a11yProps(3)} />
                    <Tab icon={<ShoppingBasket />} aria-label="shopping" {...a11yProps(4)} />
                    <Tab icon={<ThumbDown />} aria-label="up" {...a11yProps(5)} />
                    <Tab icon={<ThumbUp />} aria-label="down" {...a11yProps(6)} /> */} 
                    </Tabs>
                </AppBar>
                <TabPanel  value={value} index={0}>
                    <Grid width={300} columns={5} gutter={2} noLink={true}  fetchGifs={fetchGifs} /> 
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid  width={300} columns={5} gutter={2} noLink={true} fetchGifs={fetchTreding} /> 
                </TabPanel>
                {/* <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel> */}
            </div>
        </div>
     )
}