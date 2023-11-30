import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, PlayButton, Progress } from "keep-react";
import {
  ArrowsOutSimple, Bed, Heart, MapPinLine, Play, Rows, ShoppingCart, Shower, SkipBack, SkipForward, SpeakerHigh, Users,
} from "phosphor-react";
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const SixCamp = () => {
  const axiosPublic = useAxiosPublic()
  const { isLoading, data: datas = [] } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await axiosPublic.get('/six-camps/')
      return res.data
    }
  })
  if (isLoading == true) {
    return <div className='text-center'><span className="loading loading-spinner loading-lg"></span></div>
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
    <div className='grid md:grid-cols-3 gap-3 '>
      {
        datas?.map(data => <div key={data._id}>
          <Card
            className="max-w-xs  rounded-md"
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
                <div className='flex justify-around items-center'>
                  <Link to={`/camp-details/${data._id}`}>
                    <Button size="sm" type="outlineGray">Detils</Button>
                  </Link>
                  <p>{data?.count}</p>
                </div>

              </Card.Container>
            </Card.Container>
          </Card>
        </div>)
      }
    </div>
  );
};

export default SixCamp;