import styles from './TeamCard.module.css';
import starActive from '../../assets/star-active.svg';
import starDefault from '../../assets/star-default.svg';
import { IconCampaign, IconLeads } from '../../icon';
import PropTypes from 'prop-types';

export function TeamCard({
      isArchived,
      isFavorited,
      description,
      leadsCount,
      campaignsCount,
      name,
      createdAt,
      image
}) {

      return (
            <div className={styles.teamcard}
                  style={{
                        background: isArchived ? "#EBEEF2" : "white"
                  }}>
                  <div className={styles.header}>
                        <img src={image}
                              width={36}
                              height={36}
                              className={styles.image} />
                        <div className={styles.info}>
                              <div className={styles.name}>{name}</div>
                              <div className={styles.createdAt}>{createdAt}
                              </div>
                        </div>
                        {isArchived ? null : <div className={styles.star}>
                              {isFavorited ? <img src={starActive} /> : <img src={starDefault} />}
                        </div>}
                  </div>
                  <div className={styles.body}>
                        {description}
                  </div>
                  <div className={styles.footer}>
                        <div className={styles.countAndType}>
                              <IconCampaign isActive={false}
                                    width={16}
                                    height={15}
                                    opacity="0.3" fill="black" />
                              <div>{campaignsCount}</div>
                              <div>Campaigns</div>
                        </div>
                        <div className={styles.countAndType}>
                              <IconLeads isActive={false}
                                    width={16}
                                    height={14}
                                    opacity="0.3"
                                    fill="black" />
                              <div>{leadsCount}</div>
                              <div>Leads</div>
                        </div>
                  </div>
            </div>
      );
}

TeamCard.propTypes = {
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      leadsCount: PropTypes.number.isRequired,
      campaignsCount: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      isArchived: PropTypes.bool.isRequired,
      isFavorited: PropTypes.bool.isRequired
}