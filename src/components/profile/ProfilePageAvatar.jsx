import { FiMail, FiPhone, FiMapPin, FiCalendar } from "react-icons/fi"

export const ProfilePageAvatar = () => {
    return (
        <>
            <div className="mx-auto bg-white rounded-xl shadow p-8 w-[95%] mt-3">

                <div className="flex justify-between items-start">
                    <div className="flex gap-6">
                        <img
                            src="https://i.pravatar.cc/150"
                            alt="avatar"
                            className="w-24 h-24 rounded-full object-cover"
                        />

                        <div>
                            <h2 className="text-2xl font-semibold">Sarah Johnson</h2>
                            <p className="text-gray-500">
                                Senior Product Designer at TechCorp Inc.
                            </p>

                            <div className="flex gap-2 mt-2">
                                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                                    Pro Member
                                </span>
                                <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                                    Verified
                                </span>
                            </div>
                        </div>
                    </div>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Edit Profile
                    </button>
                </div>

                <p className="mt-6 text-gray-600 max-w-3xl">
                    Senior Product Designer with 8+ years of experience in creating
                    user-centered designs for web and mobile applications.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-gray-600">
                    <div className="flex items-center gap-2">
                        <FiMail /> sarah.johnson@example.com
                    </div>
                    <div className="flex items-center gap-2">
                        <FiPhone /> +1 (555) 123-4567
                    </div>
                    <div className="flex items-center gap-2">
                        <FiMapPin /> San Francisco, CA
                    </div>
                    <div className="flex items-center gap-2">
                        <FiCalendar /> Joined January 2024
                    </div>
                </div>

            </div>
        </>
    )
}