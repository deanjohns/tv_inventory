import './App.css';
import API from './api';
import Box from '@mui/material/Box';
import ItemsTable from './ItemsTable';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Dashboard = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    setIsLoading(true);
    API.get('/')
      .then(res => {
        console.log("res GET", res);
        setItems(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log("AXIOS ERROR:", err);
        setIsLoading(false);
      })
  }

  return (
    <div className="dashboard-main">
      {isLoading &&
        <Box sx={{ display: 'flex' }} className="circular-progress-box">
          <CircularProgress className="circular-progress" />
        </Box>
      }
      <div className="dashboard-body">
        <div className="dashboard-table-main">
          <div className="dashboard-table">
            <ItemsTable
              items={items}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;