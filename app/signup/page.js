"use client";

import {
    signUp as amplifySignUp,
    confirmSignUp as amplifyConfirmSignUp,
} from "@aws-amplify/auth"; // Updated import
import { useState } from "react";

import { Amplify } from "aws-amplify";
import awsConfig from "@/lib/aws-exports";

Amplify.configure(awsConfig);

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [step, setStep] = useState("signup");

    const handleSignUp = async () => {
        try {
            await amplifySignUp({
                username: email.trim(), // Ensure no spaces
                password,
                attributes: { email: email.trim() }, // Ensure email is passed in attributes
            });
            setStep("confirm");
        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    const handleConfirmSignUp = async () => {
        try {
            await amplifyConfirmSignUp({
                username: email,
                confirmationCode: code,
            });
            alert("Signup successful! Please log in.");
            setStep("login");
        } catch (error) {
            console.error("Error confirming signup:", error);
        }
    };

    return (
        <div>
            {step === "signup" && (
                <>
                    <h2>Sign Up</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleSignUp}>Sign Up</button>
                </>
            )}

            {step === "confirm" && (
                <>
                    <h2>Confirm Account</h2>
                    <input
                        type="text"
                        placeholder="Confirmation Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button onClick={handleConfirmSignUp}>Confirm</button>
                </>
            )}
        </div>
    );
};

export default Signup;
