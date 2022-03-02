import React, { useState} from "react";
import Form from "../../Form";
import FormGroupRow from "../../FormGroupRow";
import FormLabel from "../../FormLabel";
import InputText from "../../InputText";
import SelectOption from "../../SelectOption";
import CheckboxInput from "../../CheckboxInput";
import ButtonTag from "../../ButtonTag";

export default function BusinessAddress({ nextStep, handleFormData, prevStep, values }){
    const submitFormData = (e) => {
        e.preventDefault();
          nextStep();
      };

    return (
        <>
            <section className="user-area" style={{marginTop: '10px'}}>
			<div className="container">
				<div className="user-form-content register-width">
					
                    <Form onSubmit={submitFormData}>
                       <p className="textCenter textFontWeight"> ব্যবসার ঠিকানা </p>
                        <FormGroupRow>
                            <FormLabel> গ্রাম/মহল্লা (ইংরেজিতে) </FormLabel>
                            <InputText  className="form-control" type="text" name="permanent_village_mahalla_en" id="permanent_village_mahalla_en" placeholder="গ্রাম/মহল্লা (ইংরেজিতে)" />
                            <FormLabel> গ্রাম/মহল্লা (বাংলায়) </FormLabel>
                            <InputText  className="form-control" type="text" name="permanent_village_mahalla_bn" id="permanent_village_mahalla_bn" placeholder="গ্রাম/মহল্লা (বাংলায়)" />
                        </FormGroupRow>
                        <FormGroupRow>
                            <FormLabel> রোড/ব্লক/সেক্টর (ইংরেজিতে) </FormLabel>
                            <InputText  className="form-control" type="text" name="permanent_road_block_sector_en" id="permanent_road_block_sector_en" placeholder="রোড/ব্লক/সেক্টর (ইংরেজিতে)" />
                            <FormLabel> রোড/ব্লক/সেক্টর (বাংলায়) </FormLabel>
                            <InputText  className="form-control" type="text" name="permanent_road_block_sector_bn" id="permanent_road_block_sector_bn" placeholder="রোড/ব্লক/সেক্টর (বাংলায়)" />
                        </FormGroupRow>
                        <FormGroupRow>
                            <FormLabel> হোল্ডিং নং </FormLabel>
                            <InputText  className="form-control" type="text" name="permanent_holding" id="permanent_holding" placeholder="হোল্ডিং নং" />
                            <FormLabel> ওয়ার্ড নং </FormLabel>
                            <InputText  className="form-control" type="text" name="permanent_ward" id="permanent_ward" placeholder="ওয়ার্ড নং" />
                        </FormGroupRow>
                        <FormGroupRow>
                            <FormLabel> জেলা (ইংরেজিতে) </FormLabel>
                            <SelectOption name="permanent_district_en">
                                <option value=""> চিহ্নিত করুন </option>
                                <option value=""> Dhaka </option>
                                <option value=""> Feni </option>
                            </SelectOption>
                            <FormLabel> জেলা (বাংলায়) </FormLabel>
                            <SelectOption name="permanent_district_bn">
                                <option value=""> চিহ্নিত করুন </option>
                                <option value=""> ঢাকা </option>
                                <option value=""> ফেনী </option>
                            </SelectOption>
                        </FormGroupRow>
                        <FormGroupRow>
                            <FormLabel> উপজেলা/থানা   </FormLabel>
                            <SelectOption name="permanent_upazila_thana_en">
                                <option value=""> চিহ্নিত করুন </option>
                                <option value=""> Savar </option>
                                <option value=""> Feni Sadar </option>
                            </SelectOption>
                            <FormLabel> উপজেলা/থানা   (বাংলায়) </FormLabel>
                            <SelectOption name="permanent_upazila_thana_bn">
                                <option value=""> চিহ্নিত করুন </option>
                                <option value=""> সাভার  </option>
                                <option value=""> ফেনী সদর </option>
                            </SelectOption>
                        </FormGroupRow>
                        <FormGroupRow>
                            <FormLabel> পোষ্ট অফিস  (বাংলায়) </FormLabel>
                            <InputText  className="form-control" type="text" name="permanent_post_office_bn" id="permanent_post_office_bn" placeholder="পোষ্ট অফিস  (বাংলায়)" />
                            <FormLabel> পোষ্ট অফিস (ইংরেজিতে) </FormLabel>
                            <InputText  className="form-control" type="text" name="permanent_post_office_bn" id="permanent_post_office_bn" placeholder="পোষ্ট অফিস (ইংরেজিতে)" />
                        </FormGroupRow>
                        <FormGroupRow>
                            <div className="col-9"></div>
                            <div className="col-3">
                            <ButtonTag className="btn btn-md btn-secondary" type="button" onClick={prevStep} style={{float:"left"}}> <i className="ri-reply-fill"></i> পূর্ববর্তী  </ButtonTag>  
                            <ButtonTag className="btn btn-md btn-success" type="submit" style={{float:"right"}}> <i className="ri-send-plane-line"></i> পরবর্তী </ButtonTag>  
                            </div>
                        </FormGroupRow>
                    </Form>
                </div>
           </div>
       </section>
        </>
    );
}