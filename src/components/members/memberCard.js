import React from 'react'

import memberCardStyles from './memberCard.module.scss'

import UserIcon from '../../images/placeholder.inline.svg'
import GitHubIcon from '../../images/github.inline.svg'
import TwitterIcon from '../../images/twitter.inline.svg'
import WebsiteIcon from '../../images/website.inline.svg'

const MemberCard = ({ name, image, github, twitter, website }) => {
    return (
        <div className={memberCardStyles.memberCard}>
            {image ?
                <img src={image} alt={name} className={memberCardStyles.memberImage} />
                : <UserIcon className={memberCardStyles.svgProfile} />
            }

            <div className={memberCardStyles.info}>
                <h3>{name}</h3>

                <div className={memberCardStyles.links}>
                    {github ? <a href={`https://github.com/${github}`}
                        aria-label={`Link to ${name}'s GitHub Profile`}>
                        <GitHubIcon className={memberCardStyles.svgColor} /></a> : ``}

                    {twitter ? <a href={`https://twitter.com/${twitter}`}
                        aria-label={`Link to ${name}'s Twitter Profile`}>
                        <TwitterIcon className={memberCardStyles.svgColor} /></a> : ``}

                    {website ? <a href={website}
                        aria-label={`Link to ${name}'s Website`}>
                        <WebsiteIcon className={memberCardStyles.svgColor} /></a> : ``}
                </div>
            </div>
        </div>
    )
}

export default MemberCard