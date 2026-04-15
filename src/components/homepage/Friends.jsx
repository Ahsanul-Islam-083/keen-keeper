import React from 'react';
import DataCard from '../ui/DataCard';
import FriendCard from '../ui/FriendCard';

const Friends = async () => {

    const res = await fetch("https://keen-keeper-zeta.vercel.app/data.json");
    const friends = await res.json();



    const totalFriends = friends.length;
    const onTrack = friends.filter(friend => friend.status === "on-track").length;
    const needsAttention = friends.filter(friend => friend.status === "overdue" || friend.status === "almost due").length;
    const interactionsThisMonth = friends.filter(friend => friend.days_since_contact <= 30).length;


    return (
        <div className='container mx-auto py-10'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 border-b pb-10 border-gray-200'>
                <DataCard number={totalFriends}>Total Friends</DataCard>
                <DataCard number={onTrack}>On Track</DataCard>
                <DataCard number={needsAttention}>Needs Attention</DataCard>
                <DataCard number={interactionsThisMonth}>Interactions This Month</DataCard>

            </div>
            <div>
                <h2 className='text-2xl font-semibold mb-4'>Your Friends </h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        friends.map((friend) => (
                            <FriendCard key={friend.id} friend={friend} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Friends;