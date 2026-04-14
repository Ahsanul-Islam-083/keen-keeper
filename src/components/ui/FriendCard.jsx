import Image from "next/image";

const statusStyles = {
    "overdue": "badge badge-error text-white",
    "almost due": "badge badge-warning text-white",
    "on-track": "badge badge-success text-white",
};


const FriendCard = ({ friend }) => {
    const { name, picture, days_since_contact, status, tags } = friend;

    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow duration-200 items-center text-center p-6 gap-3">

            {/* Image */}
            <div className="avatar">
                <div className="w-16 rounded-full ring ring-base-200 ring-offset-2">
                    <Image
                        src={picture}
                        alt={name}
                        width={64}
                        height={64}
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Name */}
            <div className="card-body p-0 items-center gap-2">
                <h3 className="card-title text-base font-semibold text-gray-900">
                    {name}
                </h3>

                {/* Days since contact */}
                <p className="text-sm text-gray-400">{days_since_contact}d ago</p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-1">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="badge badge-soft badge-success text-xs capitalize"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Status badge */}
                <span className={`${statusStyles[status]} text-xs mt-1 capitalize`}>
                    {status}
                </span>
            </div>
        </div>
    );
};

export default FriendCard;