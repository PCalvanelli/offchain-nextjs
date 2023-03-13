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
            'Conduct longitudinal analysis of digital asset adoption',
            'Track changes in adoption over time',
            'Identify trends and patterns'
          ]}
        />
        <Card
          title="Machine Learning"
          icon={<AiOutlineSecurityScan />}
          bulletPoints={[
            'Train algorithms and models on the latest data to make more accurate predictions',
            'Identify new opportunities',
            'Reduce risk'
          ]}
        />
        <Card
          title="Large and Growing"
          icon={<BsGraphUp />}
          bulletPoints={[
            'Largest and fastest growing dataset',
            'Over 200 unique data points',
            'Over 5,000 unique respondents'
          ]}
        />
        <Card
          title="Interoperability"
          icon={<RiExchangeFundsLine />}
          bulletPoints={[
            'Connect to other blockchain networks',
            'Cross-chain asset exchange',
            'Seamless integration with existing systems'
          ]}
        />
        <Card
          title="Community Engagement"
          icon={<FaCheckCircle />}
          bulletPoints={[
            'Fully decentralized architecture',
            'Resilient to attacks',
            'Redundant data storage and retrieval'
          ]}
        />
      </div>
    </section>
  );
};

export default Features;
