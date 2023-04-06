import React from 'react';
import styles from '@/styles/Terminal.module.css';

function Terminal() {
    return (
        <div className={styles.terminal}>
          <div className={styles.titlebar}>
            <div className={styles.buttons}>
              <div className={styles.button + ' ' + styles['button-close']}></div>
              <div className={styles.button + ' ' + styles['button-minimize']}></div>
              <div className={styles.button + ' ' + styles['button-expand']}></div>
            </div>
            <div className={styles.title}>Python 3.8</div>
          </div>
          <div className={styles.output}>
        <p>&gt;&gt;pip install offchain-cli</p>
        <p>&gt;&gt;offchain-cli --help</p>
        <p>Usage: offchain-cli [OPTIONS] COMMAND [ARGS]...</p>
      </div>
          <div className={styles.input}></div>
        </div>
      );
    }

export default Terminal;
