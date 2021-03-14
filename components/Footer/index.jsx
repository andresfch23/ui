import CardLink from '../CardLink';
import { DATA_OPTIONS, NETWORK_INFO } from './dataFooter';
import Icon from '../Icon';

const Footer = () => (
    <div className="footer">
        <div className="footer__container">
            <div className="footer__main">
                {DATA_OPTIONS.map(option => <CardLink key={option.key} {...option} /> )}
            </div>

            <div className="footer__secondary">
                <span className="footer__copyright">&copy; Copyright 2010 - 2021 Toptal, LLC</span>

                <div>
                    {NETWORK_INFO.map(({ name, link }) => (
                        <a 
                            href={link}
                            className="footer__network"
                            target="_blank"
                            rel="noreferrer"
                            key={`network-${name}`}
                        >
                            <Icon name={name} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Footer;