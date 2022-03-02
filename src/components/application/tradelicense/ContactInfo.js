import React, { useState} from "react";
import Form from "../../Form";
import FormGroupRow from "../../FormGroupRow";
import FormLabel from "../../FormLabel";
import InputText from "../../InputText";
import SelectOption from "../../SelectOption";
import CheckboxInput from "../../CheckboxInput";
import ButtonTag from "../../ButtonTag";

export default function ContactInfo({  handleFormData, prevStep, values }){

    const submitFormData = (e) => {
        e.preventDefault();
        alert();
      };
    return (
        <>
            <Form onSubmit={submitFormData}>
                <p className="textCenter textFontWeight">যোগাযোগের ঠিকানা</p>
                <FormGroupRow>
                    <FormLabel> মোবাইল </FormLabel>
                    <InputText  className="form-control" type="text" name="mobile" id="mobile" placeholder="মোবাইল" />
                    <FormLabel> ইমেল </FormLabel>
                    <InputText  className="form-control" type="text" name="email" id="email" placeholder="ইমেল" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> ফোন (যদি থাকে) </FormLabel>
                    <InputText  className="form-control" type="text" name="phone" id="phone" placeholder="ফোন (যদি থাকে)" />
                </FormGroupRow>
                <FormGroupRow>
                    <div className="col-9"></div>
                    <div className="col-3">
                    <ButtonTag className="btn btn-md btn-secondary" type="button" onClick={prevStep} style={{float:"left"}}> <i className="ri-reply-fill"></i> পূর্ববর্তী  </ButtonTag>  
                    <ButtonTag className="btn btn-md btn-success" type="submit" style={{float:"right"}}> <i className="ri-send-plane-line"></i> সাবমিট করুন </ButtonTag>  
                    </div>
            </FormGroupRow>
            </Form>
                
        </>
    );
}