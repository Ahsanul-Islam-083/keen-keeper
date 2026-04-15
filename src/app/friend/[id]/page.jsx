
import { notFound } from "next/navigation";
import { cache } from "react";
import Image from "next/image";
import { LuBellOff, LuArchive, LuTrash2, LuPhone, LuMessageSquare, LuVideo } from "react-icons/lu";
import DataCard from "@/components/ui/DataCard";
import VoiceCallBtn from "@/components/friend/VoiceCallBtn";
import VideoCallBtn from "@/components/friend/VideoCallBtn";
import TextBtn from "@/components/friend/TextBtn";

const getFriends = cache(async () => {
    const res = await fetch("https://keen-keeper-zeta.vercel.app/data.json");
    return res.json();
});

export async function generateMetadata({ params }) {
    const { id } = await params;
    const friends = await getFriends();
    const friend = friends.find(f => f.id === Number(id));
    if (!friend) return { title: "Friend Not Found | Keen Keeper" };
    return { title: `${friend.name} | Keen Keeper` };
}


const statusStyles = {
    "overdue": "badge badge-error text-white",
    "almost due": "badge badge-warning text-white",
    "on-track": "badge bg-[#2d5a4e] text-white",
};



const FriendDetailsPage = async ({ params }) => {
    const { id } = await params;
    const friends = await getFriends();
    const friend = friends.find(f => f.id === Number(id));
    if (!friend) notFound();

    const { name, picture, status, tags, bio, email,
        days_since_contact, goal, next_due_date } = friend;

    const formattedDate = new Date(next_due_date).toLocaleDateString("en-US", {
        month: "short", day: "numeric", year: "numeric",
    });


    return (
        <main className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">

                {/* ── LEFT PANEL ── */}
                <div className="space-y-3">

                   
                    <div className="card-body items-center text-center gap-3 border border-base-300 rounded-lg py-5 shadow">
                        <div className="avatar">
                            <div className="w-20 rounded-full ring ring-base-200 ring-offset-2">
                                <Image src={picture} alt={name} width={80} height={80} className="object-cover" />
                            </div>
                        </div>

                        <h2 className="card-title text-lg font-bold">{name}</h2>

                        <div className="flex flex-col items-center justify-center gap-2">
                            <span className={`${statusStyles[status]} capitalize`}>{status}</span>
                            <div className="space-x-1">
                                {tags.map(tag => (
                                    <span key={tag} className="badge badge-soft badge-success text-[#2d5a4e] capitalize">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {bio && <p className="text-sm text-gray-400 italic">"{bio}"</p>}

                        {email && (
                            <p className="text-sm text-gray-400">
                                Preferred: <span className="font-medium text-gray-600">{email}</span>
                            </p>
                        )}
                    </div>

                    <div className=" space-y-3">
                        <button className="w-full flex items-center justify-center gap-2 py-4 text-sm font-medium text-gray-700 hover:bg-base-200 transition-colors border border-base-300 rounded-lg shadow cursor-pointer">
                            <LuBellOff size={16} /> Snooze 2 Weeks
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 py-4 text-sm font-medium text-gray-700 hover:bg-base-200 transition-colors shadow border border-base-300 rounded-lg cursor-pointer">
                            <LuArchive size={16} /> Archive
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 py-4 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors shadow border border-base-300 rounded-lg cursor-pointer">
                            <LuTrash2 size={16} /> Delete
                        </button>
                    </div>
                </div>

                {/* ── RIGHT PANEL ── */}
                <div className="card bg-base-100 border border-base-200 shadow-sm">
                    <div className="card-body gap-6">

                       
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

                            <DataCard number={days_since_contact} >Days Since Contact</DataCard>
                            <DataCard number={goal} >Goal (Days)</DataCard>
                            <DataCard number={formattedDate} >Next Due</DataCard>
                        </div>

                        
                        <div className="border-t border-base-200 pt-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-xl text-[#244D3F]">Relationship Goal</h3>
                                <button className="btn btn-sm rounded-md">Edit</button>
                            </div>
                            <p className="text-sm text-gray-500">
                                Connect every <span className="font-bold text-gray-800">{goal} days</span>
                            </p>
                        </div>

    
                        <div className="border-t border-base-200 pt-4">
                            <h3 className="font-semibold text-xl text-[#244D3F] mb-3">Quick Check-In</h3>
                            <div className="grid sm:grid-cols-3 gap-3">

                                <VoiceCallBtn friend={friend} />
                                <TextBtn friend={friend} />
                                <VideoCallBtn friend={friend} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
};

export default FriendDetailsPage;