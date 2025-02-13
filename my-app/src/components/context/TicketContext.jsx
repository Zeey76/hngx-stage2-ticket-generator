import { createContext, useContext, useState, useEffect } from "react";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [selectedTicket, setSelectedTicket] = useState(
    localStorage.getItem("selectedTicket") || "regular"
  );
  const [ticketCount, setTicketCount] = useState(
    localStorage.getItem("ticketCount") || "1"
  );
  const [file, setFile] = useState(localStorage.getItem("file") || null);
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [request, setRequest] = useState(localStorage.getItem("request") || "");
  const [error, setError] = useState({ file: "", name: "", email: "" });
  const [currentStep, setCurrentStep] = useState(
    parseInt(localStorage.getItem("currentStep")) || 1
  );
  const [isBookingComplete, setIsBookingComplete] = useState(false);

  // Persist state to localStorage
  useEffect(() => {
    localStorage.setItem("selectedTicket", selectedTicket);
    localStorage.setItem("ticketCount", ticketCount);
    localStorage.setItem("file", file);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("request", request);
    localStorage.setItem("currentStep", currentStep);
  }, [selectedTicket, ticketCount, file, name, email, request, currentStep]);

  // Validation functions
  const validateStepOne = () => {
    return selectedTicket && ticketCount;
  };

  const validateStepTwo = () => {
    let newErrors = { file: "", name: "", email: "" };
    let isValid = true;

    if (!file) {
      newErrors.file = "Profile photo is required";
      isValid = false;
    }
    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  // Navigation functions
  const nextStep = () => {
    if (currentStep === 1 && validateStepOne()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStepTwo()) {
      setCurrentStep(3);
      setIsBookingComplete(true);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 1) {
      resetBooking();
    }
  };

  const resetBooking = () => {
    setSelectedTicket("regular");
    setTicketCount("1");
    setFile(null);
    setName("");
    setEmail("");
    setRequest("");
    setError({ file: "", name: "", email: "" });
    setCurrentStep(1);
    setIsBookingComplete(false);

    // Clear localStorage
    localStorage.removeItem("selectedTicket");
    localStorage.removeItem("ticketCount");
    localStorage.removeItem("file");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("request");
  };

  const value = {
    selectedTicket,
    setSelectedTicket,
    ticketCount,
    setTicketCount,
    file,
    setFile,
    name,
    setName,
    email,
    setEmail,
    request,
    setRequest,
    error,
    setError,
    currentStep,
    setCurrentStep,
    isBookingComplete,
    nextStep,
    previousStep,
    resetBooking,

    // Validation functions
    validateStepOne,
    validateStepTwo,
  };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};

export const useTicket = () => {
  const context = useContext(TicketContext);
  if (context === undefined) {
    throw new Error("useTicket must be used within a TicketProvider");
  }
  return context;
};
