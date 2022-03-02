import React, { useState} from "react";
import Form from "../../Form";
import FormGroupRow from "../../FormGroupRow";
import FormLabel from "../../FormLabel";
import InputText from "../../InputText";
import SelectOption from "../../SelectOption";
import CheckboxInput from "../../CheckboxInput";
import ButtonTag from "../../ButtonTag";

export default function OwnarInfo({ nextStep, handleFormData, values }){

    const [ownarType, setOwnarType] = useState();
    const [inputList, setInputList] = useState(['']);

    const handleOwnarType = (e) => {
        const ownar = e.target.value;
        setOwnarType(ownar);
    }
    
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

    // const ownarList = {
    // name_en: '', 
    // name_bn:'', 
    // national_id:'', 
    // bith_no:''
    // };

    const newAddOwnar= () => {
        setInputList([...inputList, {}])
    }

    const submitFormData = (e) => {
        e.preventDefault();
          nextStep();
      };

    return (
        <>
        <h3> ট্রেড লাইসেন্স আবেদন </h3>
        <Form onSubmit={submitFormData}>
                <FormGroupRow>
                    <FormLabel> প্রতিষ্ঠানের নাম (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text" name="orga_en"  placeholder="প্রতিষ্ঠানের নাম (ইংরেজিতে)" />
                    <FormLabel> প্রতিষ্ঠানের নাম (বাংলায়) </FormLabel>
                    <InputText  className="form-control" type="text" name="orga_bn" placeholder="প্রতিষ্ঠানের নাম (বাংলায়)" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> প্রতিষ্ঠানের মালিকানার ধরণ  </FormLabel>
                    <SelectOption name="ownar_type" onChange={ e=>handleOwnarType(e)}>
                        <option value="">  চিহ্নিত করুন </option>
                        <option value="1"> ব্যক্তি মালিকানাধীন </option>
                        <option value="2"> যৌথ মালিকানা </option>
                        <option value="3"> কোম্পানী </option>
                    </SelectOption>
                </FormGroupRow> <br />
                <p class="textCenter textFontWeight" > মালিকের তথ্য  </p>

                { 
            inputList.map( (x,i)=>{
            return(
                <>
                <div className="INFO" key={i}>
                    {
                        (ownarType > 1) &&  inputList.length-1===i &&  
                        <ButtonTag className="btn btn-sm btn-success" type="button" onClick={newAddOwnar}  > <i className="ri-add-box-fill"></i> নতুন মালিক </ButtonTag>  
                    }

                {
                    inputList.length!==1 &&
                    <p class="textFontWeight mt-1" id="newOwnarArea">
                    <ButtonTag className="btn btn-sm btn-danger" type="button" onClick={()=> handleremove(i)}  > <i className="ri-delete-bin-line"></i> বাদ দিন  </ButtonTag>
                    &nbsp;&nbsp;    মালিকের তথ্য {i+1}
                    </p>
                }

                <FormGroupRow>
                    <FormLabel> নাম (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text" onChange={ e=>handleinputchange(e,i)} placeholder="নাম (ইংরেজিতে)" />
                    <FormLabel> নাম (বাংলায়) </FormLabel>
                    <InputText  className="form-control" type="text"  onChange={ e=>handleinputchange(e,i)} placeholder="নাম (বাংলায়)" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> ন্যাশনাল আইডি (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text"  onChange={ e=>handleinputchange(e,i)} placeholder="ন্যাশনাল আইডি (ইংরেজিতে)" />
                    <FormLabel> জন্ম নিবন্ধন নং (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text" onChange={ e=>handleinputchange(e,i)} placeholder="জন্ম নিবন্ধন নং (ইংরেজিতে)" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> পাসপোর্ট নং (ইংরেজিতে)</FormLabel>
                    <InputText  className="form-control" type="text" name="passport" id="passport" onChange={ e=>handleinputchange(e,i)} placeholder="পাসপোর্ট নং (ইংরেজিতে)" />
                    <FormLabel> জম্ম তারিখ </FormLabel>
                    <InputText  className="form-control" type="date" name="dob" id="dob" placeholder="নাম (বাংলায়)" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> পিতার নাম (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text" name="father_name_en" id="father_name_en" onChange={ e=>handleinputchange(e,i)} placeholder="পিতার নাম (ইংরেজিতে)" />
                    <FormLabel> পিতার নাম (বাংলায়) </FormLabel>
                    <InputText  className="form-control" type="text" name="father_name_bn" id="father_name_bn" onChange={ e=>handleinputchange(e,i)}  placeholder="পিতার নাম (বাংলায়)" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> মাতার নাম (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text" name="mother_name_en" id="mother_name_en" onChange={ e=>handleinputchange(e,i)}  placeholder="মাতার নাম (ইংরেজিতে)" />
                    <FormLabel>মাতার নাম (বাংলায়)</FormLabel>
                    <InputText  className="form-control" type="text" name="mother_name_bn" id="mother_name_bn" onChange={ e=>handleinputchange(e,i)} placeholder="মাতার নাম (বাংলায়)" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> পেশা </FormLabel>
                    <InputText  className="form-control" type="text" name="occation" id="occation" placeholder="পেশা" />
                    <FormLabel> বাসিন্দা </FormLabel>
                    <SelectOption name="resident" onChange={ e=>handleinputchange(e,i)}>
                        <option value="">  চিহ্নিত করুন </option>
                        <option value="1"> অস্থায়ী </option>
                        <option value="2"> স্থায়ী </option>
                    </SelectOption>
                </FormGroupRow> 
                <FormGroupRow>
                    <FormLabel> শিক্ষাগত যোগ্যতা </FormLabel>
                    <InputText  className="form-control" type="text" name="education" id="education" placeholder="শিক্ষাগত যোগ্যতা" />
                    <FormLabel> ধর্ম </FormLabel>
                    <SelectOption name="religion" onChange={ e=>handleinputchange(e,i)}>
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
                    <SelectOption name="religion" onChange={ e=>handleinputchange(e,i)}>
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
                    <InputText  className="form-control" type="text" name="permanent_village_mahalla_en" id="permanent_village_mahalla_en" onChange={ e=>handleinputchange(e,i)} placeholder="গ্রাম/মহল্লা (ইংরেজিতে)" />
                    <FormLabel> গ্রাম/মহল্লা (বাংলায়) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_village_mahalla_bn" id="permanent_village_mahalla_bn" onChange={ e=>handleinputchange(e,i)} placeholder="গ্রাম/মহল্লা (বাংলায়)" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> রোড/ব্লক/সেক্টর (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_road_block_sector_en" id="permanent_road_block_sector_en" onChange={ e=>handleinputchange(e,i)} placeholder="রোড/ব্লক/সেক্টর (ইংরেজিতে)" />
                    <FormLabel> রোড/ব্লক/সেক্টর (বাংলায়) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_road_block_sector_bn" id="permanent_road_block_sector_bn" onChange={ e=>handleinputchange(e,i)} placeholder="রোড/ব্লক/সেক্টর (বাংলায়)" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> হোল্ডিং নং </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_holding" id="permanent_holding" placeholder="হোল্ডিং নং" onChange={ e=>handleinputchange(e,i)} />
                    <FormLabel> ওয়ার্ড নং </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_ward" id="permanent_ward" placeholder="ওয়ার্ড নং" onChange={ e=>handleinputchange(e,i)} />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> জেলা (ইংরেজিতে) </FormLabel>
                    <SelectOption name="permanent_district_en" onChange={ e=>handleinputchange(e,i)}>
                        <option value=""> চিহ্নিত করুন </option>
                        <option value=""> Dhaka </option>
                        <option value=""> Feni </option>
                    </SelectOption>
                    <FormLabel> জেলা (বাংলায়) </FormLabel>
                    <SelectOption name="permanent_district_bn" onChange={ e=>handleinputchange(e,i)}>
                        <option value=""> চিহ্নিত করুন </option>
                        <option value=""> ঢাকা </option>
                        <option value=""> ফেনী </option>
                    </SelectOption>
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> উপজেলা/থানা   </FormLabel>
                    <SelectOption name="permanent_upazila_thana_en" onChange={ e=>handleinputchange(e,i)}>
                        <option value=""> চিহ্নিত করুন </option>
                        <option value=""> Savar </option>
                        <option value=""> Feni Sadar </option>
                    </SelectOption>
                    <FormLabel> উপজেলা/থানা   (বাংলায়) </FormLabel>
                    <SelectOption name="permanent_upazila_thana_bn" onChange={ e=>handleinputchange(e,i)}>
                        <option value=""> চিহ্নিত করুন </option>
                        <option value=""> সাভার  </option>
                        <option value=""> ফেনী সদর </option>
                    </SelectOption>
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> পোষ্ট অফিস  (বাংলায়) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_post_office_bn" id="permanent_post_office_bn" onChange={ e=>handleinputchange(e,i)} placeholder="পোষ্ট অফিস  (বাংলায়)" />
                    <FormLabel> পোষ্ট অফিস (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_post_office_bn" id="permanent_post_office_bn" onChange={ e=>handleinputchange(e,i)} placeholder="পোষ্ট অফিস (ইংরেজিতে)" />
                </FormGroupRow>
                <p className="textCenter textFontWeight">স্থায়ী ঠিকানা</p>
                <FormGroupRow>
                    <FormLabel> গ্রাম/মহল্লা (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_village_mahalla_en" id="permanent_village_mahalla_en" onChange={ e=>handleinputchange(e,i)} placeholder="গ্রাম/মহল্লা (ইংরেজিতে)" />
                    <FormLabel> গ্রাম/মহল্লা (বাংলায়) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_village_mahalla_bn" id="permanent_village_mahalla_bn" onChange={ e=>handleinputchange(e,i)} placeholder="গ্রাম/মহল্লা (বাংলায়)" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> রোড/ব্লক/সেক্টর (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_road_block_sector_en" id="permanent_road_block_sector_en" onChange={ e=>handleinputchange(e,i)} placeholder="রোড/ব্লক/সেক্টর (ইংরেজিতে)" />
                    <FormLabel> রোড/ব্লক/সেক্টর (বাংলায়) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_road_block_sector_bn" id="permanent_road_block_sector_bn"  onChange={ e=>handleinputchange(e,i)} placeholder="রোড/ব্লক/সেক্টর (বাংলায়)" />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> হোল্ডিং নং </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_holding" id="permanent_holding" placeholder="হোল্ডিং নং" onChange={ e=>handleinputchange(e,i)} />
                    <FormLabel> ওয়ার্ড নং </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_ward" id="permanent_ward" placeholder="ওয়ার্ড নং" onChange={ e=>handleinputchange(e,i)} />
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> জেলা (ইংরেজিতে) </FormLabel>
                    <SelectOption name="permanent_district_en" onChange={ e=>handleinputchange(e,i)}>
                        <option value=""> চিহ্নিত করুন </option>
                        <option value=""> Dhaka </option>
                        <option value=""> Feni </option>
                    </SelectOption>
                    <FormLabel> জেলা (বাংলায়) </FormLabel>
                    <SelectOption name="permanent_district_bn" onChange={ e=>handleinputchange(e,i)}>
                        <option value=""> চিহ্নিত করুন </option>
                        <option value=""> ঢাকা </option>
                        <option value=""> ফেনী </option>
                    </SelectOption>
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> উপজেলা/থানা   </FormLabel>
                    <SelectOption name="permanent_upazila_thana_en" onChange={ e=>handleinputchange(e,i)}>
                        <option value=""> চিহ্নিত করুন </option>
                        <option value=""> Savar </option>
                        <option value=""> Feni Sadar </option>
                    </SelectOption>
                    <FormLabel> উপজেলা/থানা   (বাংলায়) </FormLabel>
                    <SelectOption name="permanent_upazila_thana_bn" onChange={ e=>handleinputchange(e,i)}>
                        <option value=""> চিহ্নিত করুন </option>
                        <option value=""> সাভার  </option>
                        <option value=""> ফেনী সদর </option>
                    </SelectOption>
                </FormGroupRow>
                <FormGroupRow>
                    <FormLabel> পোষ্ট অফিস  (বাংলায়) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_post_office_bn" id="permanent_post_office_bn" onChange={ e=>handleinputchange(e,i)} placeholder="পোষ্ট অফিস  (বাংলায়)" />
                    <FormLabel> পোষ্ট অফিস (ইংরেজিতে) </FormLabel>
                    <InputText  className="form-control" type="text" name="permanent_post_office_bn" id="permanent_post_office_bn" onChange={ e=>handleinputchange(e,i)} placeholder="পোষ্ট অফিস (ইংরেজিতে)" />
                </FormGroupRow><br/>
                <FormGroupRow>
                    <div className="col-10"></div>
                    <div className="col-2">
                    <ButtonTag className="btn btn-md btn-success" type="submit" style={{float:"right"}}> <i className="ri-send-plane-line"></i> পরবর্তী </ButtonTag>  
                    </div>
                </FormGroupRow>
                </div>
                </>
                );
            } )
            } 
        </Form>
        </>
    );
}