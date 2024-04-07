import React from 'react'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';

const Sub_category = () => {
    const { id } = useParams();
    const { data } = useFetch(
        `/products?populate=*&[filters][sub-category][id]=${id}`
    );
    console.log(data,"cat data not found")
  return (
    <div>
      
        {data?.map((item) => (
        
            <Card item={item} key={item.id} />
         
        ))}
     
    </div>
  )
}

export default Sub_category
