import { useState } from 'react';
import './FollowCard.css'


export const FollowCard = ({userName, name}) => {

    const [isFollowing, setIsFollowing] = useState(false)
    
    const text = isFollowing? 'Siguiendo' : 'Seguir';
    const buttonClassName = 'app-aside-button'.concat(isFollowing? ' following' : '')

    const avatar_url = `https://unavatar.io/${userName}`;

    const updateIsFollowing = () => {
        setIsFollowing(!isFollowing)
    }

    return ( 
        <article className='app'>
            <header className='app-header'>
                <img className='app-header-img' src={avatar_url} alt="avatar" />
                <div className='app-header-block'>
                    <strong className='app-header-blockName'>{name}</strong>
                    <span className='app-header-blockUser'>@{userName}</span>
                </div>

            </header>
            <aside className='app-aside'>
                <button onClick={updateIsFollowing} className={buttonClassName}>
                    <span className='app-aside-baseText'>{text}</span>
                    <span className='app-aside-conditionalText'>Dejar de seguir</span>
                    </button>
            </aside>
        </article>
    )
}