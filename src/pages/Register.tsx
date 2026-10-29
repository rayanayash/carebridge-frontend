import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
    HeartPulse,
    UserRound,
    Mail,
    Phone,
    LockKeyhole,
    Eye,
    EyeOff,
    ArrowRight,
    ArrowLeft,
    ShieldCheck,
} from "lucide-react";
import "./Register.css";

export default function Register() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        contactType: "email",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function updateField(name: string, value: string) {
        setForm((previous) => ({ ...previous, [name]: value }));
        setError("");
        setSuccess("");
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setSuccess("");

        if (!form.firstName.trim() || !form.lastName.trim()) {
            setError("Please enter your first and last name.");
            return;
        }

        if (form.contactType === "email") {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
                setError("Please enter a valid email address.");
                return;
            }
        } else {
            if (!/^\+?[1-9]\d{7,14}$/.test(form.phone.trim())) {
                setError("Enter a phone number in international format.");
                return;
            }
        }

        if (form.password.length < 12) {
            setError("Your password must contain at least 12 characters.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Frontend-only: no account is created or stored.
        setSuccess(
            "Your information passed frontend validation. Account creation will be available when the backend is connected."
        );
    }

    return (
        <div className="register-page">
            <section className="register-brand-panel">
                <Link to="/" className="register-brand">
                    <HeartPulse size={32} />
                    <span>CareBridge</span>
                </Link>

                <div className="register-brand-content">
                    <span className="register-eyebrow">WELCOME TO CAREBRIDGE</span>
                    <h1>
                        Better care
                        <br />
                        starts <span>here.</span>
                    </h1>
                    <p>
                        Create your patient account to begin your journey toward
                        simpler, more connected healthcare.
                    </p>

                    <div className="register-brand-feature">
                        <ShieldCheck size={23} />
                        <span>Designed with your privacy in mind</span>
                    </div>
                </div>

                <p className="register-brand-footer">
                    Connecting patients and healthcare professionals.
                </p>
            </section>

            <section className="register-form-panel">
                <div className="register-form-container">
                    <Link to="/" className="register-back">
                        <ArrowLeft size={17} />
                        Back to home
                    </Link>

                    <div className="register-mobile-brand">
                        <HeartPulse size={28} />
                        <span>CareBridge</span>
                    </div>

                    <div className="register-heading">
                        <span className="register-welcome">GET STARTED</span>
                        <h2>Create your account</h2>
                        <p>Register as a patient to get started with CareBridge.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="register-form">
                        <div className="register-name-row">
                            <div className="register-field">
                                <label htmlFor="firstName">First name</label>
                                <div className="register-input-wrapper">
                                    <UserRound size={18} />
                                    <input
                                        id="firstName"
                                        value={form.firstName}
                                        onChange={(e) =>
                                            updateField("firstName", e.target.value)
                                        }
                                        placeholder="First name"
                                        autoComplete="given-name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="register-field">
                                <label htmlFor="lastName">Last name</label>
                                <div className="register-input-wrapper">
                                    <UserRound size={18} />
                                    <input
                                        id="lastName"
                                        value={form.lastName}
                                        onChange={(e) =>
                                            updateField("lastName", e.target.value)
                                        }
                                        placeholder="Last name"
                                        autoComplete="family-name"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="register-field">
                            <label>Register using</label>
                            <div className="register-contact-switch">
                                <button
                                    type="button"
                                    className={
                                        form.contactType === "email" ? "selected" : ""
                                    }
                                    onClick={() => updateField("contactType", "email")}
                                >
                                    <Mail size={17} />
                                    Email
                                </button>

                                <button
                                    type="button"
                                    className={
                                        form.contactType === "phone" ? "selected" : ""
                                    }
                                    onClick={() => updateField("contactType", "phone")}
                                >
                                    <Phone size={17} />
                                    Phone
                                </button>
                            </div>
                        </div>

                        {form.contactType === "email" ? (
                            <div className="register-field">
                                <label htmlFor="email">Email address</label>
                                <div className="register-input-wrapper">
                                    <Mail size={18} />
                                    <input
                                        id="email"
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => updateField("email", e.target.value)}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="register-field">
                                <label htmlFor="phone">Phone number</label>
                                <div className="register-input-wrapper">
                                    <Phone size={18} />
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={form.phone}
                                        onChange={(e) => updateField("phone", e.target.value)}
                                        placeholder="+961XXXXXXXX"
                                        autoComplete="tel"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <div className="register-field">
                            <label htmlFor="registerPassword">Password</label>
                            <div className="register-input-wrapper">
                                <LockKeyhole size={18} />
                                <input
                                    id="registerPassword"
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    onChange={(e) =>
                                        updateField("password", e.target.value)
                                    }
                                    placeholder="At least 12 characters"
                                    autoComplete="new-password"
                                    required
                                    minLength={12}
                                />
                                <button
                                    type="button"
                                    className="register-password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={
                                        showPassword ? "Hide password" : "Show password"
                                    }
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="register-field">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <div className="register-input-wrapper">
                                <LockKeyhole size={18} />
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={form.confirmPassword}
                                    onChange={(e) =>
                                        updateField("confirmPassword", e.target.value)
                                    }
                                    placeholder="Repeat your password"
                                    autoComplete="new-password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="register-password-toggle"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    aria-label={
                                        showConfirmPassword
                                            ? "Hide confirmation password"
                                            : "Show confirmation password"
                                    }
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="register-error" role="alert">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="register-success" role="status">
                                {success}
                            </div>
                        )}

                        <button type="submit" className="register-submit">
                            Create Account
                            <ArrowRight size={18} />
                        </button>
                    </form>

                    <p className="register-login">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>

                    <p className="register-note">
                        Creating an account does not automatically provide access to
                        hospital medical records. Identity verification and secure
                        patient-record linking are required.
                    </p>
                </div>
            </section>
        </div>
    );
}