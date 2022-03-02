import React, { useState} from "react";
import OwnarInfo from "./OwnarInfo";
import BusinessInfo from "./BusinessInfo";
import BusinessAddress from "./BusinessAddress";
import ContactInfo from "./ContactInfo";
export default function TradeLicense(){
   //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    nameEn: "",
    nameBn: "",
    email: "",
    mobile: ""
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }


    switch (step) {
        // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 1:
          return (
            <>
            <section className="user-area" style={{marginTop: '10px'}}>
                <div className="container">
                    <div className="user-form-content register-width">
                        <OwnarInfo nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                    </div>
                </div>
            </section>
            </>
          );
        // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 2:
          return (
            <>
            <section className="user-area" style={{marginTop: '10px'}}>
                <div className="container">
                    <div className="user-form-content register-width">
                        <BusinessInfo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                    </div>
                </div>
            </section>
            </>
          );
          // Only formData is passed as prop to show the final value at form submit
        case 3:
          return (
            <>
            <section className="user-area" style={{marginTop: '10px'}}>
                <div className="container">
                    <div className="user-form-content register-width">
                        <BusinessAddress nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                    </div>
                </div>
            </section>
            </>
          );
          // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
        case 4:
            return (
              <>
              <section className="user-area" style={{marginTop: '10px'}}>
                  <div className="container">
                      <div className="user-form-content register-width">
                          <ContactInfo  prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                      </div>
                  </div>
              </section>
              </>
            );
        // default case to show nothing
        default:
          return (
            <>
            <section className="user-area" style={{marginTop: '10px'}}>
                <div className="container">
                    <div className="user-form-content register-width">
                        
                    </div>
                </div>
            </section>
            </>
          );
      }
  
}