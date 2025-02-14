import { useTicket } from "./context/TicketContext";
import { useRef, useState, useEffect } from "react";

const StepTwo = () => {
  const {
    setFile,
    name,
    setName,
    email,
    setEmail,
    request,
    setRequest,
    error,
    setError,
    previousStep,
    nextStep,
  } = useTicket();

  const [displayUrl, setDisplayUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // Refs for inputs
  const fileInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const specialRequestRef = useRef(null);
  const backButtonRef = useRef(null);
  const submitButtonRef = useRef(null);
  const uploadLabelRef = useRef(null);

  // Focus the upload label on component mount
  useEffect(() => {
    if (uploadLabelRef.current) {
      uploadLabelRef.current.focus();
    }
  }, []);

  // Clean up object URL when component unmounts
  useEffect(() => {
    return () => {
      if (displayUrl) {
        URL.revokeObjectURL(displayUrl);
      }
    };
  }, [displayUrl]);

  // Handle Enter key on the upload label
  const handleUploadLabelKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fileInputRef.current.click();
    }
  };

  // Handle Arrow Down on file upload to move to name input
  const handleFileUploadArrowDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      nameInputRef.current.focus();
    }
  };

  // Cloudinary configuration
  const cloudName = "dfx0ekbue";
  const uploadPreset = "Ticket Avatar";

  const handleFileChange = async (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setIsUploading(true);

      // Set the local URL immediately for display
      const localUrl = URL.createObjectURL(uploadedFile);
      setDisplayUrl(localUrl);

      const formData = new FormData();
      formData.append("file", uploadedFile);
      formData.append("upload_preset", uploadPreset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to upload image");
        }

        const data = await response.json();
        const fileURL = data.secure_url;

        setFile(fileURL);
        localStorage.setItem("file", fileURL);
        setError((prev) => ({ ...prev, file: "" }));
      } catch (error) {
        console.error("Error uploading image:", error);
        setError((prev) => ({ ...prev, file: "Failed to upload image" }));
        // Clean up display URL on error
        setDisplayUrl("");
        URL.revokeObjectURL(localUrl);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    nextStep();
  };

  const handlePrevStep = () => {
    previousStep();
  };

  // Handle Enter key to move to the next input
  const handleEnterKey = (event, nextRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextRef.current.focus();
    }
  };

  // Handle Arrow Up and Arrow Down keys for navigation
  const handleArrowKeys = (event, prevRef, nextRef) => {
    if (event.key === "ArrowDown" && nextRef) {
      event.preventDefault();
      nextRef.current.focus();
    } else if (event.key === "ArrowUp" && prevRef) {
      event.preventDefault();
      prevRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col justify-center sm:p-6 gap-8 bg-[#08252B] sm:border sm:border-[#0E464F] sm:rounded-[32px] flex-none self-stretch">
      <div className="flex flex-col p-6 pb-12 gap-2 border-[2px] border-[#07373F] bg-[#052228] h-[328px] rounded-[24px] relative">
        <p className="text-[#FAFAFA] text-[16px] leading-[150%] mb-[32px] flex justify-between font-roboto">
          Upload Profile Photo{" "}
          <span className="text-red-500">{error.file}</span>
        </p>
        <div className="h-[200px] flex flex-row justify-center items-center sm:bg-black/20 relative">
          <label
            htmlFor="file-upload"
            className="sm:w-[240px] w-[240px] h-[240px] flex flex-col justify-center items-center gap-4 bg-[#0E464F] border-4 border-[#24A0B5]/50 rounded-[32px] cursor-pointer relative group"
            tabIndex="0"
            ref={uploadLabelRef}
            onKeyDown={(e) => {
              handleUploadLabelKeyDown(e);
              handleFileUploadArrowDown(e);
            }}
          >
            <input
              type="file"
              className="hidden"
              id="file-upload"
              onChange={handleFileChange}
              aria-label="Upload Profile Photo"
              ref={fileInputRef}
              disabled={isUploading}
            />
            {displayUrl ? (
              <div className="relative w-full h-full group">
                <img
                  src={displayUrl}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-[32px]"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[32px]">
                  <img
                    src="./upload.svg"
                    alt="upload"
                    className="w-12 h-12 mb-2"
                  />
                  <span className="text-white text-center leading-[150%] font-roboto">
                    Drag & drop or click to upload
                  </span>
                </div>
              </div>
            ) : (
              <>
                {isUploading ? (
                  <span className="text-white">Uploading...</span>
                ) : (
                  <>
                    <img
                      src="./upload.svg"
                      alt="upload"
                      className="opacity-100 group-hover:opacity-100"
                    />
                    <span className="text-white text-center leading-[150%] opacity-100 group-hover:opacity-100 sm:w-[192px]">
                      Drag & drop or click to upload
                    </span>
                  </>
                )}
              </>
            )}
          </label>
        </div>
      </div>
      <div className="h-[4px] bg-[#0E464F]"></div>
      <form
        className="flex flex-col gap-8 font-roboto"
        onSubmit={handleSubmit}
        aria-label="User Information Form"
      >
        <div className="flex flex-col items-start gap-2 relative">
          <label htmlFor="name" className="text-[#FAFAFA]">
            Enter your name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-[12px] gap-[8px] border border-[#07373F] text-white rounded-[12px] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#24A0B5]"
            aria-required="true"
            aria-invalid={!!error.name}
            aria-describedby={error.name ? "name-error" : undefined}
            ref={nameInputRef}
            onKeyDown={(e) => {
              handleEnterKey(e, emailInputRef);
              handleArrowKeys(e, uploadLabelRef, emailInputRef);
            }}
          />
          {error.name && (
            <p id="name-error" className="text-red-500 absolute right-0">
              {error.name}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-2 relative">
          <label htmlFor="email" className="text-[#FAFAFA]">
            Enter your email *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-[12px] gap-[8px] border border-[#07373F] text-white rounded-[12px] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#24A0B5]"
            aria-required="true"
            aria-invalid={!!error.email}
            aria-describedby={error.email ? "email-error" : undefined}
            ref={emailInputRef}
            onKeyDown={(e) => {
              handleEnterKey(e, specialRequestRef);
              handleArrowKeys(e, nameInputRef, specialRequestRef);
            }}
          />
          {error.email && (
            <p id="email-error" className="text-red-500 absolute right-0">
              {error.email}
            </p>
          )}
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="special-request" className="text-[#FAFAFA]">
            Special request?
          </label>
          <textarea
            id="special-request"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            placeholder="Textarea"
            className="w-full h-[127px] resize-none overflow-hidden p-[12px] gap-[8px] text-[#FAFAFA] border border-[#07373F] rounded-[12px] bg-transparent focus:outline-none focus:ring-2 focus:ring-[#24A0B5]"
            ref={specialRequestRef}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                backButtonRef.current.focus();
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                emailInputRef.current.focus();
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                backButtonRef.current.focus();
              }
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-[16px] font-jeju">
          <button
            type="button"
            onClick={handlePrevStep}
            className="w-full h-[48px] rounded-lg border focus:ring-2 focus:ring-teal-400 border-[#24A0B5] text-[#24A0B5] outline-none hover:bg-[#12464E] hover:text-white"
            ref={backButtonRef}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                specialRequestRef.current.focus();
              } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                e.preventDefault();
                submitButtonRef.current.focus();
              }
            }}
          >
            Back
          </button>
          <button
            type="submit"
            className="w-full h-[48px] bg-[#24A0B5] focus:ring-2 focus:ring-teal-400 rounded-lg text-white outline-none hover:bg-[#1a7a8f]"
            ref={submitButtonRef}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                specialRequestRef.current.focus();
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                backButtonRef.current.focus();
              }
            }}
          >
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;