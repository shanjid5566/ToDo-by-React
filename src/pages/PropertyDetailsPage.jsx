

import React, { useState, useCallback, memo } from "react";
import { ChevronDown } from "lucide-react";

// Validation utilities
const validators = {
  email: (value) => {
    if (!value.trim()) return "Email or phone is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-+()]+$/;
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      return "Please enter a valid email or phone number";
    }
    return "";
  },
  required: (value, fieldName) => {
    return !value.trim() ? `${fieldName} is required` : "";
  },
  phone: (value) => {
    if (!value.trim()) return "Phone is required";
    const phoneRegex = /^[\d\s\-+()]{10,}$/;
    return !phoneRegex.test(value) ? "Please enter a valid phone number" : "";
  },
};

// Input component
const Input = memo(
  ({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    required = false,
    error,
    className = "",
  }) => (
    <div>
      <label className="block text-sm md:text-base font-medium text-[#002244]">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 w-full px-3 md:px-4 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md md:rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
      />
      {error && <p className="text-xs md:text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
);

// Select component
const Select = memo(
  ({ label, name, value, onChange, options, required = false, error }) => (
    <div>
      <label className="block text-sm md:text-base font-medium text-[#002244]">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 w-full px-3 md:px-4 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md md:rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-green-500`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs md:text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
);

// Main Setup Modal
const AssistProfileSetupModal = memo(({ isOpen, onClose, onOpenSubModal }) => {
  const [email, setEmail] = useState("");
  const [setupType, setSetupType] = useState("");
  const [notes, setNotes] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const setupOptions = [
    "Personal Information",
    "Verification Details",
    "Service Location",
  ];

  const handleSubmit = useCallback(() => {
    const newErrors = {
      email: validators.email(email),
      setupType: !setupType ? "Setup type is required" : "",
    };

    const hasErrors = Object.values(newErrors).some((err) => err);

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    onOpenSubModal(setupType, email, notes);
  }, [email, setupType, notes, onOpenSubModal]);

  const handleSelectOption = useCallback((option) => {
    setSetupType(option);
    setDropdownOpen(false);
    setErrors((prev) => ({ ...prev, setupType: "" }));
  }, []);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: "" }));
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 md:top-3 lg:top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-light"
          aria-label="Close"
        >
          ×
        </button>

        <div className="px-6 py-3 md:py-4 border-b border-gray-300">
          <h2 className="text-lg md:text-xl font-semibold text-[#002244]">
            Assist in Profile Setup
          </h2>
        </div>

        <div className="px-4 md:px-6 py-3 md:py-6 space-y-5">
          <div>
            <label className="block text-base font-medium text-[#002244] mb-1 md:mb-2">
              Customer email or phone
            </label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter customer email or phone"
              className={`w-full text-sm px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-[#002244] mb-2">
              Setup Type
            </label>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`w-full text-sm px-3 py-2 border ${
                  errors.setupType ? "border-red-500" : "border-gray-300"
                } rounded-md bg-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-black`}
                aria-haspopup="listbox"
                aria-expanded={dropdownOpen}
              >
                <span
                  className={setupType ? "text-[#002244]" : "text-gray-400"}
                >
                  {setupType || "Personal Information"}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                  {setupOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelectOption(option)}
                      className={`w-full text-sm px-4 py-2 text-left hover:bg-green-50 ${
                        setupType === option ? "bg-green-50" : "text-gray-700"
                      } first:rounded-t-md last:rounded-b-md transition-colors`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {errors.setupType && (
              <p className="text-sm text-red-500 mt-1">{errors.setupType}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium text-[#002244] mb-2">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes about the setup assistance needed..."
              rows={4}
              className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors"
          >
            Start Setup Assistance
          </button>
        </div>
      </div>
    </div>
  );
});

// Personal Information Modal
const PersonalInfoModal = memo(({ isOpen, onClose, email }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    alsoKnownAs: "",
    phone: "",
    email: "",
    geoLocation: "",
    district: "",
    mandal: "",
    village: "",
    registeredBy: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleSave = useCallback(() => {
    const newErrors = {
      firstName: validators.required(formData.firstName, "First Name"),
      lastName: validators.required(formData.lastName, "Last Name"),
      phone: validators.phone(formData.phone),
      geoLocation: validators.required(formData.geoLocation, "Geo Location"),
      registeredBy: validators.required(formData.registeredBy, "Registered By"),
    };

    const hasErrors = Object.values(newErrors).some((err) => err);

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    console.log("Personal Info:", { customerEmail: email, ...formData });
    onClose();
  }, [formData, email, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl z-10"
          aria-label="Close"
        >
          ×
        </button>

        <div className="px-6 pt-4 pb-2 flex-shrink-0 border-b">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Customer Information
          </h2>
          <p className="text-sm text-gray-500 mt-1">Customer: {email}</p>
        </div>

        <div className="px-6 py-4 overflow-y-auto flex-1">
          <div className="space-y-3">
            <Input
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              error={errors.firstName}
            />
            <Input
              label="Middle Name"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Middle Name"
            />
            <Input
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              error={errors.lastName}
            />
            <Input
              label="Also Known As"
              name="alsoKnownAs"
              value={formData.alsoKnownAs}
              onChange={handleChange}
              placeholder="Nickname"
            />
            <Input
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 9876543210"
              required
              error={errors.phone}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />
            <Input
              label="Geo Location"
              name="geoLocation"
              value={formData.geoLocation}
              onChange={handleChange}
              placeholder="Select on map"
              required
              error={errors.geoLocation}
            />
            <Input
              label="District"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter District"
            />
            <Input
              label="Mandal"
              name="mandal"
              value={formData.mandal}
              onChange={handleChange}
              placeholder="Enter Mandal"
            />
            <Input
              label="Village"
              name="village"
              value={formData.village}
              onChange={handleChange}
              placeholder="Enter Village"
            />
            <Select
              label="Registered By"
              name="registeredBy"
              value={formData.registeredBy}
              onChange={handleChange}
              required
              error={errors.registeredBy}
              options={[
                { value: "", label: "Select Agent" },
                { value: "agent1", label: "Field Agent" },
              ]}
            />
          </div>
        </div>

        <div className="px-6 py-4 flex-shrink-0 border-t">
          <button
            onClick={handleSave}
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors"
          >
            Save Personal Information
          </button>
        </div>
      </div>
    </div>
  );
});

// Verification Details Modal
const VerificationModal = memo(({ isOpen, onClose, email }) => {
  const [formData, setFormData] = useState({
    kycDocument: null,
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    industry: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleSave = useCallback(() => {
    const newErrors = {
      street: validators.required(formData.street, "Street"),
      city: validators.required(formData.city, "City"),
      state: validators.required(formData.state, "State"),
      postalCode: validators.required(formData.postalCode, "Postal Code"),
      country: validators.required(formData.country, "Country"),
      industry: validators.required(formData.industry, "Industry"),
    };

    const hasErrors = Object.values(newErrors).some((err) => err);

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    console.log("Verification Details:", { customerEmail: email, ...formData });
    onClose();
  }, [formData, email, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl z-10"
          aria-label="Close"
        >
          ×
        </button>

        <div className="px-6 py-4 border-b">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#002244]">
            Verification Details
          </h2>
          <p className="text-sm text-gray-500 mt-1">Customer: {email}</p>
        </div>

        <div className="px-6 py-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                KYC Documents
              </label>
              <input
                type="file"
                name="kycDocument"
                accept=".doc,.docx,.jpg,.pdf,.png"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <Input
              label="Street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Street address"
              required
              error={errors.street}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
                error={errors.city}
              />
              <Input
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                required
                error={errors.state}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="400020"
                required
                error={errors.postalCode}
              />
              <Input
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="India"
                required
                error={errors.country}
              />
            </div>
            <Select
              label="Industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              error={errors.industry}
              options={[
                { value: "", label: "Select industry" },
                { value: "agriculture", label: "Agriculture" },
                { value: "survey", label: "Survey & Mapping" },
              ]}
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full mt-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors"
          >
            Save Verification Details
          </button>
        </div>
      </div>
    </div>
  );
});

// Service Location Modal
const ServiceLocationModal = memo(({ isOpen, onClose, email }) => {
  const [locations, setLocations] = useState([
    { id: 1, lat: "", long: "" },
    { id: 2, lat: "", long: "" },
    { id: 3, lat: "", long: "" },
  ]);
  const [acres, setAcres] = useState("");

  const handleLocationChange = useCallback((id, field, value) => {
    setLocations((prev) =>
      prev.map((loc) => (loc.id === id ? { ...loc, [field]: value } : loc))
    );
  }, []);

  const addLocation = useCallback(() => {
    setLocations((prev) => [
      ...prev,
      { id: prev.length + 1, lat: "", long: "" },
    ]);
  }, []);

  const handleSave = useCallback(() => {
    const formData = {
      locations: locations.filter((loc) => loc.lat || loc.long),
      acres,
    };
    console.log("Service Location:", { email, ...formData });
    onClose();
  }, [locations, acres, email, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl z-10"
          aria-label="Close"
        >
          ×
        </button>

        <div className="px-6 py-4 border-b">
          <h2 className="text-lg md:text-xl font-semibold text-[#002244]">
            Service Location
          </h2>
          <p className="text-sm text-gray-500 mt-1">Customer: {email}</p>
        </div>

        <div className="px-6 py-6">
          <div className="space-y-4">
            {locations.map((loc, idx) => (
              <div key={loc.id}>
                <label className="text-sm font-medium mb-1 flex justify-between items-center">
                  {idx === locations.length - 1 && idx >= 2 ? (
                    <>
                      <span>{idx + 1}th Latitude/Longitude</span>
                      <button
                        type="button"
                        onClick={addLocation}
                        className="text-green-600 text-xl font-bold px-2 hover:bg-green-50 rounded"
                        aria-label="Add location"
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <span>
                      {idx + 1}
                      {idx === 0
                        ? "st"
                        : idx === 1
                        ? "nd"
                        : idx === 2
                        ? "rd"
                        : "th"}{" "}
                      Latitude/Longitude
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  value={`${loc.lat}${loc.lat && loc.long ? ", " : ""}${
                    loc.long
                  }`}
                  onChange={(e) => {
                    const [lat, long] = e.target.value
                      .split(",")
                      .map((s) => s.trim());
                    handleLocationChange(loc.id, "lat", lat || "");
                    handleLocationChange(loc.id, "long", long || "");
                  }}
                  placeholder="Lat, Long"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            ))}
            <Input
              label="Number of acres"
              name="acres"
              value={acres}
              onChange={(e) => setAcres(e.target.value)}
              placeholder="Land area in acres"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full mt-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors"
          >
            Confirm Registration
          </button>
        </div>
      </div>
    </div>
  );
});

// Main App Component
export default function App() {
  const [mainModalOpen, setMainModalOpen] = useState(false);
  const [subModalType, setSubModalType] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  const handleOpenSubModal = useCallback((setupType, email) => {
    setCustomerEmail(email);
    setSubModalType(setupType);
    setMainModalOpen(false);
  }, []);

  const handleCloseSubModal = useCallback(() => {
    setSubModalType(null);
    setMainModalOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <button
        onClick={() => setMainModalOpen(true)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors"
      >
        Open Assist Profile Setup
      </button>

      <AssistProfileSetupModal
        isOpen={mainModalOpen}
        onClose={() => setMainModalOpen(false)}
        onOpenSubModal={handleOpenSubModal}
      />

      <PersonalInfoModal
        isOpen={subModalType === "Personal Information"}
        onClose={handleCloseSubModal}
        email={customerEmail}
      />

      <VerificationModal
        isOpen={subModalType === "Verification Details"}
        onClose={handleCloseSubModal}
        email={customerEmail}
      />

      <ServiceLocationModal
        isOpen={subModalType === "Service Location"}
        onClose={handleCloseSubModal}
        email={customerEmail}
      />
    </div>
  );
}
