import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
    HeartPulse,
    ArrowLeft,
    ArrowRight,
    Mail,
    ShieldCheck,
    KeyRound,
} from "lucide-react";
import "./Login.css";
import "./ForgotPassword.css";

export default function ForgotPassword() {
    const [identifier, setIdentifier] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!identifier.trim()) return;

        // Frontend demonstration only.
        // No reset request is sent until backend integration.
        setSubmitted(true);
    }

    return (
        <div className="login-page">
            <section className="login-brand-panel">
                <Link to="/" className="login-brand">
                    <HeartPulse size={32} />
                    <span>CareBridge</span>
                </Link>

                <div className="login-brand-content">
                    <span className="login-eyebrow">ACCOUNT SECURITY</span>

                    <h1>
                        Your account.
                        <br />
                        Your security.
                        <br />
                        <span>Our priority.</span>
                    </h1>

                    <p>
                        CareBridge is designed to help you securely manage
                        access to your healthcare account.
                    </p>
                </div>

                <div className="login-brand-footer">
                    Secure access to connected healthcare.
                </div>
            </section>

            <section className="login-form-panel">
                <div className="login-form-container">
                    <Link to="/login" className="login-back">
                        <ArrowLeft size={17} />
                        Back to login
                    </Link>

                    <div className="login-mobile-brand">
                        <HeartPulse size={28} />
                        <span>CareBridge</span>
                    </div>

                    {!submitted ? (
                        <>
                            <div className="forgot-icon">
                                <KeyRound size={28} />
                            </div>

                            <div className="login-heading">
                                <span className="login-welcome">PASSWORD RECOVERY</span>

                                <h2>Forgot your password?</h2>

                                <p>
                                    Enter your registered email address or phone number.
                                    Once password recovery is enabled, you can request
                                    instructions to reset your password.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="login-form">
                                <div className="login-field">
                                    <label htmlFor="recoveryIdentifier">
                                        Email or phone number
                                    </label>

                                    <div className="login-input-wrapper">
                                        <Mail size={19} />

                                        <input
                                            id="recoveryIdentifier"
                                            type="text"
                                            placeholder="Enter your email or phone"
                                            value={identifier}
                                            onChange={(event) =>
                                                setIdentifier(event.target.value)
                                            }
                                            autoComplete="username"
                                            required
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="login-submit">
                                    Continue
                                    <ArrowRight size={19} />
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="forgot-success">
                            <div className="forgot-icon">
                                <ShieldCheck size={30} />
                            </div>

                            <h2>Request preview complete</h2>

                            <p>
                                Your information was accepted by this demo form.
                                Password-reset delivery is not enabled yet.
                                No email or SMS has been sent.
                            </p>

                            <button
                                type="button"
                                className="forgot-try-again"
                                onClick={() => setSubmitted(false)}
                            >
                                Try another email or phone
                            </button>
                        </div>
                    )}

                    <p className="login-register">
                        Remember your password?{" "}
                        <Link to="/login">Sign in</Link>
                    </p>

                    <p className="login-security-note">
                        For your security, never share verification codes
                        or password-reset links with anyone.
                    </p>
                </div>
            </section>
        </div>
    );
}