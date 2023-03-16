import React from 'react';
import Card from './Card';
import { FaCheckCircle } from 'react-icons/fa';
import { IoIosSpeedometer } from 'react-icons/io';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { RiExchangeFundsLine } from 'react-icons/ri';
import styles from '@/styles/Features.module.css';

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.featuresWrapper}>
        <Card
          title="Longitudinal Data"
          icon={<IoIosSpeedometer />}
          bulletPoints={[
            'Conduct longitudinal analysis of digital asset adoption behavior',
            'Track changes in adoption over time and space',
            'Identify trends and patterns in adoption behavior'
          ]}
        />
        <Card
          title="Machine Learning"
          icon={<AiOutlineSecurityScan />}
          bulletPoints={[
            'Train algorithms and models on the latest data to make more accurate predictions',
            'Identify new opportunities through data-driven insights',
            'Reduce risk and uncertainty in decision making models and algorithms'
          ]}
        />
        <Card
          title="Large and Growing"
          icon={<BsGraphUp />}
          bulletPoints={[
            'Largest and fastest growing dataset on digital asset adoption',
            'Over 200 unique data points',
            'Over 5,000 unique and randomly sampled respondents'
          ]}
        />
        <Card
          title="Interoperability"
          icon={<RiExchangeFundsLine />}
          bulletPoints={[
            'Cross-platform compatibility',
            'Wide-ranging app integration',
            'RESTful architecture'
          ]}
        />
        <Card
          title="Community Engagement"
          icon={<FaCheckCircle />}
          bulletPoints={[
            'Community driven data collection and analysis',
            'Community driven survey design and development',
            'Community driven data visualization'
          ]}
        />
      </div>
    </section>
  );
};

export default Features;
