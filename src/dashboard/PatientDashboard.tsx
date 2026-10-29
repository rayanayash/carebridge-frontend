import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Activity,
    ArrowRight,
    Bell,
    CalendarCheck,
    CalendarDays,
    ChevronRight,
    Clock3,
    HeartPulse,
    LayoutDashboard,
    LogOut,
    Menu,
    Search,
    Settings,
    ShieldCheck,
    Stethoscope,
    UserRound,
    Users,
    X,
    ArrowLeft,
} from "lucide-react";
import "./PatientDashboard.css";

type Appointment = {
    id: number;
    doctor: string;
    specialty: string;
    date: string;
    time: string;
    status: "Confirmed" | "Pending";
};

const appointments: Appointment[] = [
    {
        id: 1,
        doctor: "Dr. Sarah Mitchell",
        specialty: "Cardiology",
        date: "Nov 4, 2026",
        time: "10:30 AM",
        status: "Confirmed",
    },
    {
        id: 2,
        doctor: "Dr. Michael Adams",
        specialty: "General Medicine",
        date: "Nov 12, 2026",
        time: "2:00 PM",
        status: "Pending",
    },
];

const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Mitchell",
        specialty: "Cardiology",
        initials: "SM",
    },
    {
        id: 2,
        name: "Dr. Michael Adams",
        specialty: "General Medicine",
        initials: "MA",
    },
    {
        id: 3,
        name: "Dr. Emily Carter",
        specialty: "Dermatology",
        initials: "EC",
    },
];

const navigation = [
    { label: "Overview", icon: LayoutDashboard, section: "overview" },
    { label: "Appointments", icon: CalendarDays, section: "appointments" },
    { label: "Find Doctors", icon: Stethoscope, section: "doctors" },
    { label: "My Profile", icon: UserRound, section: "profile" },
];

export default function PatientDashboard() {
    const [activeSection, setActiveSection] = useState("overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [search, setSearch] = useState("");

    const filteredDoctors = doctors.filter(
        (doctor) =>
            doctor.name.toLowerCase().includes(search.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(search.toLowerCase())
    );

    function selectSection(section: string) {
        setActiveSection(section);
        setSidebarOpen(false);
    }

    return (
        <div className="patient-layout">
            {sidebarOpen && (
                <button
                    className="patient-overlay"
                    aria-label="Close navigation"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside className={`patient-sidebar ${sidebarOpen ? "open" : ""}`}>
                <div className="patient-sidebar-top">
                    <Link to="/" className="patient-logo">
                        <HeartPulse size={29} />
                        <span>CareBridge</span>
                    </Link>

                    <button
                        className="patient-sidebar-close"
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close sidebar"
                    >
                        <X size={21} />
                    </button>
                </div>

                <div className="patient-sidebar-label">PATIENT PORTAL</div>

                <nav className="patient-navigation" aria-label="Patient navigation">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={item.section}
                                className={`patient-nav-item ${activeSection === item.section ? "active" : ""
                                    }`}
                                onClick={() => selectSection(item.section)}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                <div className="patient-sidebar-bottom">
                    <div className="patient-sidebar-note">
                        <ShieldCheck size={21} />
                        <div>
                            <strong>Privacy-focused</strong>
                            <span>Your care, your information.</span>
                        </div>
                    </div>

                    <button
                        className="patient-nav-item"
                        onClick={() => selectSection("settings")}
                    >
                        <Settings size={20} />
                        <span>Settings</span>
                    </button>

                    <Link to="/login" className="patient-nav-item">
                        <LogOut size={20} />
                        <span>Exit Demo</span>
                    </Link>
                </div>
            </aside>

            <div className="patient-main">
                <header className="patient-header">
                    <div className="patient-header-left">
                        <button
                            className="patient-menu-button"
                            aria-label="Open navigation"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu size={23} />
                        </button>

                        <div>
                            <span className="patient-header-eyebrow">PATIENT PORTAL</span>
                            <h2>My Dashboard</h2>
                        </div>
                    </div>

                    <div className="patient-header-right">
                        <button
                            className="patient-notification-button"
                            aria-label="Notifications are not available in this demo"
                            title="Notifications coming soon"
                        >
                            <Bell size={21} />
                        </button>

                        <div className="patient-user">
                            <div className="patient-avatar">RA</div>
                            <div className="patient-user-info">
                                <strong>Rayan Ayash </strong>
                                <span>Demo Patient</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="patient-content">
                    <div className="patient-demo-banner">
                        Demo dashboard — all names and appointments are fictional.
                        No account or hospital record is connected.
                    </div>
                    {activeSection !== "overview" && (
                        <button
                            type="button"
                            className="patient-back-button"
                            onClick={() => selectSection("overview")}
                        >
                            <ArrowLeft size={18} />
                            Back to Overview
                        </button>
                    )}
                    {activeSection === "overview" && (
                        <>
                            <section className="patient-welcome">
                                <div>
                                    <span>WELCOME TO CAREBRIDGE</span>
                                    <h1>Good to see you, Rayan!</h1>
                                    <p>
                                        Manage your appointments and explore healthcare services
                                        from one convenient place.
                                    </p>
                                    <button
                                        className="patient-primary-button"
                                        onClick={() => selectSection("doctors")}
                                    >
                                        Find a Doctor <ArrowRight size={18} />
                                    </button>
                                </div>

                                <div className="patient-welcome-icon">
                                    <HeartPulse size={88} strokeWidth={1.3} />
                                </div>
                            </section>

                            <section className="patient-stats">
                                <div className="patient-stat-card">
                                    <div className="patient-stat-icon blue">
                                        <CalendarDays size={23} />
                                    </div>
                                    <span>Upcoming Appointments</span>
                                    <strong>2</strong>
                                    <small>Scheduled visits</small>
                                </div>

                                <div className="patient-stat-card">
                                    <div className="patient-stat-icon green">
                                        <CalendarCheck size={23} />
                                    </div>
                                    <span>Confirmed Appointments</span>
                                    <strong>1</strong>
                                    <small>Ready for your visit</small>
                                </div>

                                <div className="patient-stat-card">
                                    <div className="patient-stat-icon purple">
                                        <Users size={23} />
                                    </div>
                                    <span>Available Doctors</span>
                                    <strong>3</strong>
                                    <small>Demo directory</small>
                                </div>
                            </section>

                            <section className="patient-section">
                                <div className="patient-section-heading">
                                    <div>
                                        <h2>Upcoming Appointments</h2>
                                        <p>Keep track of your scheduled visits.</p>
                                    </div>
                                    <button
                                        className="patient-text-button"
                                        onClick={() => selectSection("appointments")}
                                    >
                                        View All <ChevronRight size={17} />
                                    </button>
                                </div>

                                <AppointmentList />
                            </section>

                            <section className="patient-section">
                                <div className="patient-section-heading">
                                    <div>
                                        <h2>Quick Actions</h2>
                                        <p>Access commonly used features.</p>
                                    </div>
                                </div>

                                <div className="patient-actions">
                                    <button onClick={() => selectSection("doctors")}>
                                        <Stethoscope size={25} />
                                        <strong>Find a Doctor</strong>
                                        <span>Explore medical specialties</span>
                                        <ArrowRight size={18} />
                                    </button>

                                    <button onClick={() => selectSection("appointments")}>
                                        <CalendarDays size={25} />
                                        <strong>My Appointments</strong>
                                        <span>Review upcoming visits</span>
                                        <ArrowRight size={18} />
                                    </button>

                                    <button onClick={() => selectSection("profile")}>
                                        <UserRound size={25} />
                                        <strong>My Profile</strong>
                                        <span>View account information</span>
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </section>
                        </>
                    )}

                    {activeSection === "appointments" && (
                        <section className="patient-section">
                            <div className="patient-section-heading">
                                <div>
                                    <h2>My Appointments</h2>
                                    <p>Your upcoming scheduled visits.</p>
                                </div>
                                <button
                                    className="patient-primary-button"
                                    onClick={() => selectSection("doctors")}
                                >
                                    Find a Doctor <ArrowRight size={17} />
                                </button>
                            </div>

                            <AppointmentList />
                        </section>
                    )}

                    {activeSection === "doctors" && (
                        <section className="patient-section">
                            <div className="patient-section-heading">
                                <div>
                                    <h2>Find Doctors</h2>
                                    <p>Explore our sample healthcare directory.</p>
                                </div>
                            </div>

                            <div className="patient-search">
                                <Search size={20} />
                                <input
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Search by doctor or specialty..."
                                    aria-label="Search doctors"
                                />
                            </div>

                            <div className="patient-doctor-grid">
                                {filteredDoctors.map((doctor) => (
                                    <div className="patient-doctor-card" key={doctor.id}>
                                        <div className="patient-doctor-avatar">
                                            {doctor.initials}
                                        </div>
                                        <h3>{doctor.name}</h3>
                                        <p>{doctor.specialty}</p>
                                        <span className="patient-coming-soon">
                                            Booking coming soon
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {filteredDoctors.length === 0 && (
                                <p className="patient-empty">
                                    No doctors match your search.
                                </p>
                            )}
                        </section>
                    )}

                    {activeSection === "profile" && (
                        <section className="patient-section">
                            <div className="patient-section-heading">
                                <div>
                                    <h2>My Profile</h2>
                                    <p>Sample patient account information.</p>
                                </div>
                            </div>

                            <div className="patient-profile-card">
                                <div className="patient-profile-avatar">RA</div>
                                <h3>Rayan Ayash</h3>
                                <p>Demo Patient Account</p>

                                <div className="patient-profile-info">
                                    <div>
                                        <span>First name</span>
                                        <strong>Rayan</strong>
                                    </div>
                                    <div>
                                        <span>Last name</span>
                                        <strong>Ayash</strong>
                                    </div>
                                    <div>
                                        <span>Email</span>
                                        <strong>rayan@example.com</strong>
                                    </div>
                                    <div>
                                        <span>Record linking</span>
                                        <strong>Not connected (demo)</strong>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {activeSection === "settings" && (
                        <section className="patient-section">
                            <div className="patient-section-heading">
                                <div>
                                    <h2>Account Settings</h2>
                                    <p>Account preferences and security settings.</p>
                                </div>
                            </div>

                            <div className="patient-placeholder">
                                <Settings size={38} />
                                <h3>Settings coming soon</h3>
                                <p>
                                    We'll add account management and security settings
                                    when we connect the backend.
                                </p>
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}

function AppointmentList() {
    return (
        <div className="patient-appointment-list">
            {appointments.map((appointment) => (
                <div className="patient-appointment" key={appointment.id}>
                    <div className="patient-appointment-icon">
                        <Activity size={24} />
                    </div>

                    <div className="patient-appointment-details">
                        <h3>{appointment.doctor}</h3>
                        <p>{appointment.specialty}</p>
                    </div>

                    <div className="patient-appointment-date">
                        <span>
                            <CalendarDays size={16} />
                            {appointment.date}
                        </span>
                        <span>
                            <Clock3 size={16} />
                            {appointment.time}
                        </span>
                    </div>

                    <span
                        className={`patient-status ${appointment.status.toLowerCase()}`}
                    >
                        {appointment.status}
                    </span>
                </div>
            ))}
        </div>
    );
}