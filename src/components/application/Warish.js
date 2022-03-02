import React, {useState} from "react";
import Form from "../Form";
import FormGroupRow from "../FormGroupRow";
import FormLabel from "../FormLabel";
import InputText from "../InputText";
import SelectOption from "../SelectOption";
import CheckboxInput from "../CheckboxInput";
import InputRow from "../InputRow";
import LabelRow from "../LabelRow";
import ButtonTag from "../ButtonTag";

export default function Warish(){
    const [inputList, setInputList] = useState(['']);
    
    const handleinputchange=(e, index)=>{
        const {name, value}= e.target;
        const list= [...inputList];
        list[index][name]= value;
        setInputList(list);
    
      }
      const handleremove= index=>{
        const list=[...inputList];
        list.splice(index,1);
        setInputList(list);
      }

      const warishanList = {warish_name_en: '', 
                            warish_name_bn: '', 
                            warish_relation_en:'', 
                            warish_relation_bn:'', 
                            warish_age:''
                          };

    const newAddWarish= () => {

        setInputList([...inputList, warishanList])

    }

    return (
        <>
        <section className="user-area" style={{marginTop: '10px'}}>
			<div className="container">
				<div className="user-form-content register-width">
					<h3> ওয়ারিশ সনদের আবেদন </h3>
                    <Form id="regForm">
                        <div className="tab">
                            <FormGroupRow>
                                <FormLabel> নাম (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" name="name_en" id="nameEN" placeholder="নাম (ইংরেজিতে)" />
                                <FormLabel> নাম (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" name="name_bn" id="nameBN" placeholder="নাম (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> ন্যাশনাল আইডি (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" name="national_id" id="national_id" placeholder="ন্যাশনাল আইডি (ইংরেজিতে)" />
                                <FormLabel> জন্ম নিবন্ধন নং (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" name="bith_no" id="bith_no" placeholder="জন্ম নিবন্ধন নং (ইংরেজিতে)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> পাসপোর্ট নং (ইংরেজিতে)</FormLabel>
								<InputText  className="form-control" type="text" name="passport" id="passport" placeholder="পাসপোর্ট নং (ইংরেজিতে)" />
                                <FormLabel> জম্ম তারিখ </FormLabel>
								<InputText  className="form-control" type="date" name="dob" id="dob" placeholder="নাম (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> পিতার নাম (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" name="father_name_en" id="father_name_en" placeholder="পিতার নাম (ইংরেজিতে)" />
                                <FormLabel> পিতার নাম (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" name="father_name_bn" id="father_name_bn" placeholder="পিতার নাম (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> মাতার নাম (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" name="mother_name_en" id="mother_name_en" placeholder="মাতার নাম (ইংরেজিতে)" />
                                <FormLabel>মাতার নাম (বাংলায়)</FormLabel>
								<InputText  className="form-control" type="text" name="mother_name_bn" id="mother_name_bn" placeholder="মাতার নাম (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> পেশা </FormLabel>
                                <InputText  className="form-control" type="text" name="occation" id="occation" placeholder="পেশা" />
                                <FormLabel> বাসিন্দা </FormLabel>
                                <SelectOption name="resident">
                                    <option value="">  চিহ্নিত করুন </option>
                                    <option value="1"> অস্থায়ী </option>
                                    <option value="2"> স্থায়ী </option>
                                </SelectOption>
                            </FormGroupRow> 
                            <FormGroupRow>
                                <FormLabel> শিক্ষাগত যোগ্যতা </FormLabel>
                                <InputText  className="form-control" type="text" name="education" id="education" placeholder="শিক্ষাগত যোগ্যতা" />
                                <FormLabel> ধর্ম </FormLabel>
                                <SelectOption name="religion">
                                        <option value='1' >ইসলাম</option>
                                        <option value='2' >হিন্দু</option>
                                        <option value='3' >বৌদ্ধ ধর্ম</option>
                                        <option value='4' >খ্রিস্ট ধর্ম</option>
                                        <option value='5' >অন্যান্য</option>
                                </SelectOption>
                            </FormGroupRow> 
                            <FormGroupRow>
                                <FormLabel> লিঙ্গ </FormLabel>
                                <div className="col-4">
									<CheckboxInput name="gender" value="1"> পুরুষ </CheckboxInput>
									<CheckboxInput name="gender" value="2"> মহিলা </CheckboxInput>
									<CheckboxInput name="gender" value="3"> অন্যান্য </CheckboxInput>
								</div>
                                <FormLabel> বৈবাহিক সম্পর্ক </FormLabel>
                                <SelectOption name="religion">
                                        <option value=""> চিহ্নিত করুন </option>
										<option value='1' >অবিবাহিত</option>
										<option value='2' >বিবাহিত</option>
										<option value='3' >তালাক প্রাপ্ত</option>
										<option value='4' >বিধবা</option>
										<option value='5' >অন্যান্য</option>
                                </SelectOption>
                            </FormGroupRow>
                            <p className="textCenter textFontWeight">বর্তমান  ঠিকানা</p>
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
                            <p className="textCenter textFontWeight">স্থায়ী ঠিকানা</p>
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
                        </div>
                        <div className="tab">
                           <p className="textCenter textFontWeight">যোগাযোগের ঠিকানা</p>
                            <FormGroupRow>
                                <FormLabel> মোবাইল </FormLabel>
								<InputText  className="form-control" type="text" name="mobile" id="mobile" placeholder="মোবাইল" />
                                <FormLabel> ইমেল </FormLabel>
								<InputText  className="form-control" type="text" name="email" id="email" placeholder="ইমেল" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> আবেদনকারীর নাম (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" name="applicent_en" id="applicent_en" placeholder="আবেদনকারীর নাম (ইংরেজিতে)" />
                                <FormLabel> আবেদনকারীর নাম (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" name="applicent_bn" id="applicent_bn" placeholder="আবেদনকারীর নাম (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel>আবেদনকারীর  পিতার নাম (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" name="appicant_father_name_en" id="appicant_father_name_en" placeholder="আবেদনকারীর পিতার নাম (ইংরেজিতে)" />
                                <FormLabel> আবেদনকারীর পিতার নাম (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" name="appicant_father_name_bn" id="appicant_father_name_bn" placeholder="আবেদনকারীর পিতার নাম (বাংলায়)" />
                            </FormGroupRow>
                        </div>
                        { 
                        inputList.map( (x,i)=>{
                            return(
                                <div className="tab" key={i}>
                                <div className="row element2" id="warishAreaDiv_1">
                                    <p className="textCenter textFontWeight"> ওয়ারিশগনের তালিকা </p>
                                    <div className="col-2">
                                        <div className="form-group">
                                            <LabelRow> নাম (বাংলায়) </LabelRow>
                                            <InputRow className="form-control" type="text" placeholder="নাম (বাংলায়)" onChange={ e=>handleinputchange(e,i)} />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="form-group">
                                            <LabelRow> নাম (ইংরেজিতে) </LabelRow>
                                            <InputRow className="form-control" type="text" placeholder="নাম (ইংরেজিতে)" onChange={ e=>handleinputchange(e,i)} />
                                        </div>    
                                    </div>
                                    <div className="col-2">
                                        <div className="form-group">
                                            <LabelRow> সম্পর্ক (ইংরেজিতে) </LabelRow>
                                            <InputRow className="form-control" type="text" placeholder="নাম (সম্পর্ক)" onChange={ e=>handleinputchange(e,i)} />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="form-group">
                                            <LabelRow> সম্পর্ক (বাংলায়) </LabelRow>
                                            <InputRow className="form-control" type="text" placeholder="নাম (বাংলায়)" onChange={ e=>handleinputchange(e,i)} />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="form-group">
                                            <LabelRow> বয়স </LabelRow>
                                            <InputRow className="form-control" type="text" placeholder="বয়স" onChange={ e=>handleinputchange(e,i)} />
                                        </div>    
                                    </div>  
                                    <div className="col-2">
                                        <div className="form-group">
                                        {
                                            inputList.length!==1 &&
                                            
                                            <ButtonTag className="btn btn-sm btn-danger newAddWarish" type="button" onClick={()=> handleremove(i)}  > <i className="ri-delete-bin-line"></i> বাদ দিন  </ButtonTag>
                                        }
                                        { inputList.length-1===i &&
                                        <ButtonTag className="btn btn-sm btn-success newAddWarish" type="button" onClick={newAddWarish}  > <i className="ri-add-box-fill"></i> নতুন ওয়ারিশ </ButtonTag>
                                        }

                                        </div>
                                   </div>              
                                </div>
                            </div> 
                            );
                        } )} 
                                    
                       
                     </Form>
                     
                </div>
            </div>
        </section>
        </>
    );
}