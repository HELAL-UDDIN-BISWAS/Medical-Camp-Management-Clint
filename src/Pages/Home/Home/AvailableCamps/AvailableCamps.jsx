import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge,  Button,  Card,  PlayButton, Progress } from "keep-react";
    import {    ArrowsOutSimple,    Bed,    Heart,    MapPinLine,    Play,    Rows,    ShoppingCart,    Shower,  SkipBack,  SkipForward,  SpeakerHigh,  Users,
    } from "phosphor-react";
import useTenstak from '../../../../Hooks/useTenstak';

const AvailableCamps = () => {
    const [datas, setdata] = useState([])
    const [cart]=useTenstak()
    useEffect(() => {
        axios('http://localhost:5000/availableCamps')
            .then(res => {
                console.log(res.data)
                setdata(res.data)
            })
            .catch(error => console.error(error))
    }, [])
    
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
                datas?.map(data => <div key={data._id}>
                         <Card
          className="max-w-xs overflow-hidden rounded-md"
          imgSrc={data.image}
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
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