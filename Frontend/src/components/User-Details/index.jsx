import React, { useState } from 'react';
import './index.css';

const UserDetails = ({ onClose }) => {
    const [formData, setFormData] = useState({
        income: '',
        riskTolerance: '',
        interests: []
    });

    const [isIncomeOpen, setIsIncomeOpen] = useState(false);

    const incomeOptions = [
        { value: "under_50k", label: "Under ₹5,00,000" },
        { value: "50k_100k", label: "₹5,00,000 - ₹12,00,000" },
        { value: "100k_250k", label: "₹12,00,000 - ₹25,00,000" },
        { value: "over_250k", label: "Over ₹25,00,000" }
    ];

    const handleIncomeSelect = (val) => {
        setFormData({ ...formData, income: val });
        setIsIncomeOpen(false); // Close the dropdown after selecting
    };

    const interestOptions = [
        "Stock Market", "Mutual Funds", "SIPs",
        "Cryptocurrency", "Real Estate", "Fixed Deposits"
    ];

    const toggleInterest = (interest) => {
        setFormData((prev) => {
            const isSelected = prev.interests.includes(interest);
            if (isSelected) {
                return { ...prev, interests: prev.interests.filter(i => i !== interest) };
            } else {
                return { ...prev, interests: [...prev.interests, interest] };
            }
        });
    };

    const handleNext = (e) => {
        e.preventDefault();
        console.log("User Profile Data:", formData);
        // Close the modal after saving
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            {/* Prevent clicks inside the card from closing the modal */}
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="onboarding-header">
                    <h2>Let's build your profile</h2>
                    <p className="onboarding-para">
                        Personalize your Fin-Hub experience by sharing your financial goals.
                    </p>
                </div>

                <form className="onboarding-form" onSubmit={handleNext}>
                    <div className="form-group">
                        <label>Annual Household Income</label>
                        <div className="custom-dropdown-container">
                            {/* The clickable trigger that looks like an input */}
                            <div
                                className={`premium-input custom-dropdown-trigger ${isIncomeOpen ? 'open' : ''}`}
                                onClick={() => setIsIncomeOpen(!isIncomeOpen)}
                            >
                                <span className={formData.income ? "selected-text" : "placeholder-text"}>
                                    {formData.income
                                        ? incomeOptions.find(opt => opt.value === formData.income)?.label
                                        : "Select your income range"}
                                </span>
                                {/* Custom animated chevron arrow */}
                                <svg className={`dropdown-arrow ${isIncomeOpen ? 'rotate' : ''}`} width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L13 1" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            {/* The animated floating menu */}
                            <div className={`custom-dropdown-menu ${isIncomeOpen ? 'show' : ''}`}>
                                {incomeOptions.map((option) => (
                                    <div
                                        key={option.value}
                                        className={`custom-dropdown-item ${formData.income === option.value ? 'active-item' : ''}`}
                                        onClick={() => handleIncomeSelect(option.value)}
                                    >
                                        {option.label}
                                        {/* Add a tiny checkmark for the selected item */}
                                        {formData.income === option.value && (
                                            <span className="check-mark">✓</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>What is your risk tolerance?</label>
                        <div className="pill-group">
                            {['Low Risk', 'Moderate', 'High Risk'].map((risk) => (
                                <button
                                    type="button"
                                    key={risk}
                                    className={`choice-pill ${formData.riskTolerance === risk ? 'active' : ''}`}
                                    onClick={() => setFormData({ ...formData, riskTolerance: risk })}
                                >
                                    {risk}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>What are you interested in?</label>
                        <span className="subtitle">Select all that apply</span>
                        <div className="pill-group wrap mt-2">
                            {interestOptions.map((interest) => (
                                <button
                                    type="button"
                                    key={interest}
                                    className={`choice-pill ${formData.interests.includes(interest) ? 'active' : ''}`}
                                    onClick={() => toggleInterest(interest)}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-continue">
                            Save Details <span>→</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserDetails;