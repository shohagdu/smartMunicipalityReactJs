import React, { useState} from "react";
import Form from "../../Form";
import FormGroupRow from "../../FormGroupRow";
import FormLabel from "../../FormLabel";
import InputText from "../../InputText";
import SelectOption from "../../SelectOption";
import CheckboxInput from "../../CheckboxInput";
import ButtonTag from "../../ButtonTag";

export default function BusinessInfo({ nextStep, handleFormData, prevStep, values }){

    const submitFormData = (e) => {
        e.preventDefault();
          nextStep();
      };
    return (
        <>
        <Form onSubmit={submitFormData}>
            <p className="textCenter textFontWeight"> ব্যবসার তথ্য </p>
            <FormGroupRow>
                <FormLabel> ভ্যাট আইডি (যদি থাকে) </FormLabel>
                <InputText  className="form-control" type="text" name="vat" id="vat" placeholder="ভ্যাট আইডি (যদি থাকে)" />
                <FormLabel> ট্যাক্স আইডি (যদি থাকে) </FormLabel>
                <InputText  className="form-control" type="text" name="tax" id="tax" placeholder="ট্যাক্স আইডি (যদি থাকে)" />
            </FormGroupRow>
            <FormGroupRow>
                <FormLabel> পরিশোধিত মূলধন (লিঃ কোম্পানির ক্ষেত্রে) </FormLabel>
                <InputText  className="form-control" type="text"placeholder="পরিশোধিত মূলধন (লিঃ কোম্পানির ক্ষেত্রে)" />
                <FormLabel> ব্যবসার ধরন </FormLabel>
                <InputText  className="form-control" type="text" placeholder="ব্যবসার ধরন" />
            </FormGroupRow> 
            <FormGroupRow>
                    <div className="col-9"></div>
                    <div className="col-3">
                    <ButtonTag className="btn btn-md btn-secondary" type="button" onClick={prevStep} style={{float:"left"}}> <i className="ri-reply-fill"></i> পূর্ববর্তী  </ButtonTag>  
                    <ButtonTag className="btn btn-md btn-success" type="submit" style={{float:"right"}}> <i className="ri-send-plane-line"></i> পরবর্তী </ButtonTag>  
                    </div>
            </FormGroupRow>
        </Form>
        </>
    );
}