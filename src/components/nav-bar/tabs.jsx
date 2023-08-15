import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className="body-items"
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="span" className='body-items'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function BasicTabs() {
    const [value, setValue] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                let category = '';
                if (value === 1) {
                    category = "men's clothing";
                } else if (value === 2) {
                    category = "women's clothing";
                } else if (value === 3) {
                    category = "jewelery";
                } else if (value === 4) {
                    category = "electronics";
                }
                category = encodeURIComponent(category);
                const response = await fetch(
                    `https://fakestoreapi.com/products/category/${category}`
                );
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        if (value > 0) {
            fetchProductsByCategory();
        }
    }, [value]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='header-bottom'>
                <Button>
                    <MenuSharpIcon style={{ color: 'white' }} />
                </Button>
                <Tabs value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="All Products" {...allProps(0)} style={{ color: 'white' }} />
                    <Tab label="Men's Clothing" {...allProps(1)} style={{ color: 'white' }} />
                    <Tab label="Women's Clothing" {...allProps(2)} style={{ color: 'white' }} />
                    <Tab label="Jewelry" {...allProps(3)} style={{ color: 'white' }} />
                    <Tab label="Technology" {...allProps(4)} style={{ color: 'white' }} />
                    <Tab label="Flash Sale" {...allProps(5)} style={{ color: 'white' }} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Body />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {items.map(item => (
                    <ProductItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        item={item}
                    />
                ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {items.map(item => (
                    <ProductItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        item={item}
                    />
                ))}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {items.map(item => (
                    <ProductItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        item={item}
                    />
                ))}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {items.map(item => (
                    <ProductItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        item={item}
                    />
                ))}
            </TabPanel>
            <TabPanel value={value} index={5}>
            </TabPanel>
        </Box>
    );
}
