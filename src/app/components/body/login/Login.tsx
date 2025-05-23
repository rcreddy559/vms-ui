import React, { useState } from 'react';
import {validatePhone} from "@/app/components/utils/VmsUtils";

export const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhoneNumber(value);
        if (phoneError) setPhoneError('');
    };

    const handleSendOtp = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (!phoneNumber.trim()) {
            setPhoneError('Phone number is required');
            return;
        }

        if (!validatePhone(phoneNumber)) {
            setPhoneError('Please enter a valid phone number');
            return;
        }

        // Send OTP logic would go here
        console.log('Sending OTP to', phoneNumber);
        setIsOtpSent(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!phoneNumber.trim()) {
            setPhoneError('Phone number is required');
            return;
        }

        if (!validatePhone(phoneNumber)) {
            setPhoneError('Please enter a valid 10-digit phone number');
            return;
        }

        // Form submission logic
        console.log('Logging in with phone:', phoneNumber, 'and OTP:', otp);
    };

    return <div className="min-h-screen flex items-center justify-center bg-gray-800">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-center text-white">Login with Phone</h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="phone" className="sr-only">Phone Number</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            required
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Phone Number"
                        />
                    </div>
                    {phoneError && (
                        <p className="mt-2 text-sm text-red-500">{phoneError}</p>
                    )}
                    <div className="text-right">
                        <a href="#"
                           onClick={handleSendOtp}
                           className="text-sm font-medium text-purple-400 hover:text-purple-300">
                            {isOtpSent ? 'Resend OTP' : 'Send OTP'}
                        </a>
                    </div>
                    <div>
                        <label htmlFor="otp" className="sr-only">OTP</label>
                        <input
                            id="otp"
                            name="otp"
                            type="text"
                            autoComplete="one-time-code"
                            required
                            value={otp}
                            className="appearance-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Enter OTP"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
};
