import axios from 'axios';
import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge,  Button,  Card,  PlayButton, Progress } from "keep-react";
    import {    ArrowsOutSimple,    Bed,    Heart,    MapPinLine,    Play,    Rows,    ShoppingCart,    Shower,  SkipBack,  SkipForward,  SpeakerHigh,  Users,
    } from "phosphor-react";
import useTenstak from '../../../../Hooks/useTenstak';
import { useQuery } from '@tanstack/react-query';
import Skeletons from '../../skeleton/Skeleton';

const AvailableCamps = () => {
    // useEffect(() => {
    //     axios('https://y-tau-one.vercel.app/availableCamps')
    //         .then(res => {
    //             console.log(res.data)
    //             setdata(res.data)
    //         })
    //         .catch(error => console.error(error))
    // }, [])
    
    const { isLoading, data = [] } = useQuery({
      queryKey: [],
      queryFn: async () => {
        const res = await axios.get('https://y-tau-one.vercel.app/availableCamps')
        return res.data
      }
    })
    if (isLoading == true) {
      return  <div className='grid md:grid-cols-3 gap-3'>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
         <Skeletons></Skeletons>
      </div>
    }

        const formatDateTime = dateTimeString => {
          const options = {
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            year: 'numeric',
            month: '2-digit',
          };
      
          const formattedDateTime = new Date(dateTimeString).toLocaleString('en-US', options);
          return formattedDateTime;
        };
    return (

        <div className='grid md:grid-cols-3 gap-3'>
            {
                data?.map(data => <div key={data._id}>
                         <Card
          className="max-w-xs overflow-hidden rounded-md"
          imgSrc={data.image}
          imgSize="md">
          <Card.Container className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
            <Heart size={20} weight="bold" color="white" />
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="flex items-center justify-between">
              <Badge size="xs" colorType="light" color="gray">
                
              </Badge>
              <Card.Title>{formatDateTime(data.scheduledDateTime)}</Card.Title>
            </Card.Container>
            <Card.Container className="my-3">
              <p className='xl'> {data.campName}</p>
              <Card.Description>
              Location: {data.venueLocation}
              </Card.Description>
            </Card.Container>
            <Card.Container className="flex items-center justify-start gap-5">
             
              <Link to={`/camp-details/${data._id}`}>
              <Button size="sm" type="outlineGray">Detils</Button>
              </Link>
            </Card.Container>
          </Card.Container>
        </Card>
                </div>)
            }
        </div>
    );
};

export default AvailableCamps;