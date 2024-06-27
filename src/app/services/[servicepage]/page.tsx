interface ServicePageProps {
  params: {
    servicename: string;
  };
}

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
  return <div>ServicePage {params.servicename}</div>;
};

export default ServicePage;
