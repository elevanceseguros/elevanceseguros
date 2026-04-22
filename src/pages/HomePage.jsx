import React from 'react';
import Hero from '@/components/Hero';
import LeadFormSincero from '@/components/LeadFormSincero'; // Nome novo aqui
import InsuranceTypes from '@/components/InsuranceTypes';
import HealthPlans from '@/components/HealthPlans';
import VehicleProtection from '@/components/VehicleProtection';
import Consortiums from '@/components/Consortiums';
import ContactForm from '@/components/ContactForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="-mt-10 md:-mt-16 px-4 relative z-20">
        <LeadFormSincero />
      </div>
      <div className="pt-8">
        <InsuranceTypes />
      </div>
      <HealthPlans />
      <VehicleProtection />
      <Consortiums />
      <ContactForm />
    </>
  );
};

export default HomePage;
