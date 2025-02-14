import React, { useState, useEffect } from 'react';
import './List.css';
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
    // const url = "http://localhost:4000";
    const [list, setList] = useState([]);

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data.success) {
                setList(response.data.data || []);
            } else {
                toast.error("Error fetching data");
                setList([]);
            }
        } catch (error) {
            toast.error("Network error");
            setList([]);
        }
    };

    const removeFood = async (foodId) => {
        try {
            const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
            if (response.data.success) {
                toast.success("Removed successfully");

                // Update state correctly by filtering out the removed item
                setList((prevList) => prevList.filter((item) => item._id !== foodId));
            } else {
                toast.error("Error removing food item");
            }
        } catch (error) {
            toast.error("Network error");
        }
    };

    useEffect(() => {
        fetchList();
    }, []); // Fetch the list once when component mounts

    return (
        <div className='list flex-col'>
            <p>All Foods List</p>
            <div className="list-table">
                <div className='list-table-format title'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.length > 0 ? (
                    list.map((item) => (
                        <div key={item._id} className='list-table-format'>
                            <img src={`${url}/images/${item.image}`} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
                        </div>
                    ))
                ) : (
                    <p>No food items available</p>
                )}
            </div>
        </div>
    );
};

export default List;
