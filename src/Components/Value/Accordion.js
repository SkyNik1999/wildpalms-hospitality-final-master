import React from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { FaWifi } from 'react-icons/fa';
import { PiCookingPotBold } from 'react-icons/pi';
import {
  MdOutlineCleaningServices,
  MdOutlineDryCleaning,
} from 'react-icons/md';
import { TbAirConditioningDisabled } from 'react-icons/tb';
import { BsLightning } from 'react-icons/bs';
import { IoCheckmarkCircle } from 'react-icons/io5';

const AccordionTab = ({ icon = 'check', title, content }) => {
  const iconMap = {
    wifi: <FaWifi className='value__accordion-icon' />,
    cooking: <PiCookingPotBold className='value__accordion-icon' />,
    cleaning: <MdOutlineCleaningServices className='value__accordion-icon' />,
    laundary: <MdOutlineDryCleaning className='value__accordion-icon' />,
    ac: <TbAirConditioningDisabled className='value__accordion-icon' />,
    power: <BsLightning className='value__accordion-icon' />,
    check: <IoCheckmarkCircle className='value__accordion-icon' />,
  };
  return (
    <AccordionItem className="value__accordion-item">
      {}
      <header className="value__accordion-header">
        {icon && iconMap[icon]}
        <AccordionButton
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3 className="value__accordion-title">{title}</h3>
          <AccordionIcon fontSize='2rem' />
        </AccordionButton>
      </header>
      <AccordionPanel className="value__accordion-content" pb={4}>
        <p className="value__accordion-description">{content}</p>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionTab;