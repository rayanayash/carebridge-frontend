import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
    HeartPulse,
    Mail,
    LockKeyhole,
    Eye,
    EyeOff,
    ArrowRight,
    ArrowLeft,
} from "lucide-react";
import "./Login.css";

export default function Login() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        if (!identifier.trim() || !password) {
            setError("Please enter your email or phone number and password.");
            return;
        }

        // Frontend-only for now.
        // We'll connect this to the backend authentication API later.
        setError("Login is not available yet. Backend integration is pending.");
    }

    return (
        <div className="login-page">
            <section className="login-brand-panel">
                <Link to="/" className="login-brand">
                    <HeartPulse size={32} />
                    <span>CareBridge</span>
                </Link>

                <div className="login-brand-content">
                    <span className="login-eyebrow">CONNECTED HEALTHCARE</span>
                    <h1>
                        Your health.
                        <br />
                        Your journey.
                        <br />
                        <span>One platform.</span>
                    </h1>
                    <p>
                        A simpler way to connect with your healthcare team and manage
                        appointments.
                    </p>
                </div>

                <div className="login-brand-footer">
                    Designed for better healthcare experiences.
                </div>
            </section>

            <section className="login-form-panel">
                <div className="login-form-container">
                    <Link to="/" className="login-back">
                        <ArrowLeft size={17} />
                        Back to home
                    </Link>

                    <div className="login-mobile-brand">
                        <HeartPulse size={28} />
                        <span>CareBridge</span>
                    </div>

                    <div className="login-heading">
                        <span className="login-welcome">WELCOME BACK</span>
                        <h2>Sign in to your account</h2>
                        <p>Enter your credentials to continue to CareBridge.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="login-field">
                            <label htmlFor="identifier">Email or phone number</label>
                            <div className="login-input-wrapper">
                                <Mail size={19} />
                                <input
                                    id="identifier"
                                    type="text"
                                    placeholder="Enter your email or phone"
                                    value={identifier}
                                    onChange={(event) => setIdentifier(event.target.value)}
                                    autoComplete="username"
                                    required
                                />
                            </div>
                        </div>

                        <div className="login-field">
                            <div className="login-password-label">
                                <label htmlFor="password">Password</label>
                                <Link to="/forgot-password">Forgot password?</Link>
                            </div>

                            <div className="login-input-wrapper">
                                <LockKeyhole size={19} />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    autoComplete="current-password"
                                    required
                                />

                                <button
                                    type="button"
                                    className="login-password-toggle"
                                    onClick={() => setShowPassword((value) => !value)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="login-error" role="alert">
                                {error}
                            </div>
                        )}

                        <button type="submit" className="login-submit">
                            Sign In
                            <ArrowRight size={19} />
                        </button>
                    </form>

                    <p className="login-register">
                        Don't have an account? <Link to="/register">Create an account</Link>
                    </p>

                    <p className="login-security-note">
                        CareBridge is a healthcare platform. Never share your password
                        with anyone.
                    </p>
                </div>
            </section>
        </div>
    );
}