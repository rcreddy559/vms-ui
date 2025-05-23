import React, {useContext, useState} from 'react';
import {validatePhone} from "@/app/components/utils/VmsUtils";
import {VmsContext} from "@/app/components/hooks/context/VmsProvider";

export default function WhatsAppLogin() {
    const {
        setIsAuthenticated,
    } = useContext(VmsContext);
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const handleLogin = () => {

        if (!phone.trim()) {
            setPhoneError('Phone number is required');
            return;
        }

        if (!validatePhone(phone)) {
            setPhoneError('Please enter a valid phone number');
            return;
        }
        setIsAuthenticated(true)
        // You would integrate with your backend or WhatsApp API (via Twilio, etc.)
        const whatsappLink = `https://wa.me/${phone.replace(/\D/g, '')}`;
        window.open(whatsappLink, '_blank'); // TODO: Uncomment this line to open WhatsApp link
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-xl">
                <h2 className="text-center text-2xl font-bold">Login with WhatsApp</h2>
                <input
                    type="tel"
                    placeholder="+91 9876543210"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                        setPhoneError('');
                    }}
                    className="w-full px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {phoneError && (
                    <p className="mt-2 text-sm text-red-500">{phoneError}</p>
                )}
                <button
                    onClick={handleLogin}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition duration-300"
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.818.738 5.546 2.135 7.957L0 32l8.232-2.162A15.914 15.914 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.823-1.875l-.489-.285-4.888 1.284 1.305-4.769-.317-.499A13.272 13.272 0 1129.333 16c0 7.347-5.986 13.333-13.333 13.333zm7.271-10.5c-.4-.2-2.367-1.167-2.736-1.3-.367-.134-.635-.2-.902.2s-1.034 1.3-1.267 1.567c-.234.267-.467.3-.867.1-.4-.2-1.688-.623-3.214-1.987-1.188-1.06-1.99-2.367-2.222-2.767-.234-.4-.025-.617.175-.817.179-.179.4-.467.6-.7.2-.234.267-.4.4-.667.134-.267.067-.5-.033-.7-.1-.2-.901-2.169-1.235-2.967-.325-.8-.655-.7-.902-.7h-.768c-.233 0-.6.1-.9.467s-1.176 1.15-1.176 2.8 1.205 3.244 1.372 3.467c.167.223 2.376 3.63 5.771 5.08.807.35 1.437.558 1.926.713.808.258 1.542.221 2.123.134.648-.096 1.992-.814 2.273-1.6.28-.787.28-1.463.2-1.6-.067-.134-.234-.2-.5-.333z" />
                    </svg>
                    Continue with WhatsApp
                </button>


            </div>
        </div>
    );
}
