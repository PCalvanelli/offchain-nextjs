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
          title="Fast Transactions"
          icon={<IoIosSpeedometer />}
          bulletPoints={[
            'High performance distributed system',
            'Low-latency data delivery',
            'Supports 10,000+ transactions per second'
          ]}
        />
        <Card
          title="Secure Data"
          icon={<AiOutlineSecurityScan />}
          bulletPoints={[
            'End-to-end encryption',
            'Private key management',
            'Auditing and compliance'
          ]}
        />
        <Card
          title="Data Visualization"
          icon={<BsGraphUp />}
          bulletPoints={[
            'Customizable dashboards',
            'Real-time data updates',
            'Interactive charts and graphs'
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
          title="Decentralization"
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
