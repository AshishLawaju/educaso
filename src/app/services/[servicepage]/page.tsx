import React from "react";

const ServicePage = ({ params }: { params: { servicename: string } }) => {

    console.log({params});
     
  return <div>ServicePage {params.servicename} s </div>;
};

export default ServicePage;
