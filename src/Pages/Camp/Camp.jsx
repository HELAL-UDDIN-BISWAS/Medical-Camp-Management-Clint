import React from 'react';

import { useLoaderData } from 'react-router-dom';

const Camp = () => {
  const campdata = useLoaderData();
  const { campName, category, image, longDescription, name, scheduledDateTime, shortDescription, specializedServices, specialty, targetAudience, venueLocation } = campdata || {}

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
    <div className='w-full my-5'>
      <div>
        <img className='h-[450px] w-full ' src={image} alt="" />
      </div>
      <div className='my-3 md:flex justify-between'>
        <h2 className='text-xl'>Location: {venueLocation}</h2>
        <p>{formatDateTime(scheduledDateTime)}</p>
      </div>
      <div>
        <p className='text-xl text-black'>category: {category}</p>
        <p className='text-xl text-black'>specialty: {specialty}</p>
        <p className='text-xl text-black'>Name: {name}</p>
        <p className='text-xl text-black'>Camp Name: {campName}</p>
        <p className='text-xl text-black'>Target Audience: {targetAudience}</p>
        <p className='text-xl text-black mb-4'>Specialized Services: {specializedServices}</p>
        <p className=''>{shortDescription}</p>
        <p className=''>{longDescription}</p>
      </div>





      {/* <Card
          className="max-w-xs overflow-hidden rounded-md"
          imgSrc={image}
          imgSize="md">
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
            <Heart size={20} weight="bold" color="white" />
          </Card.Container>
          <Card.Container className="space-y-4 p-6">
            <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
              <MapPinLine size={20} color="#5E718D" />
              <span>{venueLocation}</span>
            </Card.Title>
            <Card.Container className="flex items-center justify-between">
              <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                <Bed size={20} color="#5E718D" />
                <span>3 Bed Room</span>
              </Card.Title>
              <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                <Shower size={20} color="#5E718D" />
                <span>1 Bath</span>
              </Card.Title>
            </Card.Container>
            <Card.Container className="flex items-center justify-between">
              <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                <ArrowsOutSimple size={20} color="#5E718D" />
                <span>1,032 sqft</span>
              </Card.Title>
              <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                <Users size={20} color="#5E718D" />
                <span>Family</span>
              </Card.Title>
            </Card.Container>
            <Card.Container className="my-3 flex items-center justify-between">
              <Button type="primary" size="sm">
                Check Out
              </Button>
              <Card.Title className="text-body-3 font-medium text-metal-500">$649,00</Card.Title>
            </Card.Container>
          </Card.Container>
        </Card> */}
    </div>
  );
};

export default Camp;