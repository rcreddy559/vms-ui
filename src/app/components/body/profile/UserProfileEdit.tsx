import React, { useState } from "react";

const UserProfileEdit = () => {
    const [user, setUser] = useState({
        name: "Arjun Reddy",
        email: "arjun.reddy@example.com",
        phone: "+91 98765 43210",
        address: "123 Main St, Thalapula Palli, Puthalapattu, Chittoor, Andhra Pradesh. PIN: 517124",
    });

    const [avatar, setAvatar] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAvatar(file);
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Updated user data:", user);
        console.log("Avatar file:", avatar);
        // Handle backend update logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white px-4 py-10 flex justify-center items-start">
            <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center">Edit Profile</h2>

                {/* Avatar Upload */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                        <img
                            src={
                                preview ||
                                "https://ui-avatars.com/api/?name=Alex+Johnson&background=random"
                            }
                            alt="avatar"
                            className="w-24 h-24 rounded-full border-4 border-purple-500 object-cover"
                        />
                        <label className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 p-2 rounded-full cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M4 3a2 2 0 012-2h4.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V17a2 2 0 01-2 2H6a2 2 0 01-2-2V3z" />
                            </svg>
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleAvatarChange}
                            />
                        </label>
                    </div>
                    <p className="text-sm text-gray-400">Click icon to change photo</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold">Full Name</label>
                        <input
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold">Phone</label>
                        <input
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold">Address</label>
                        <textarea
                            name="address"
                            rows={3}
                            value={user.address}
                            onChange={handleChange}
                            className="w-full mt-1 px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-300"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfileEdit;
