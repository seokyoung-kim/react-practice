import React from 'react';

const data = {
    ganada: {
        name : '가나다',
        description: '나는 가나다입니다.'
    },
    mabasa: {
        name : '마바사',
        description: '나는 마바사입니다.'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];

    if (!profile) {
        return <div>존재하지 않는 사용자.</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;