import Form from "../Form";
import FormGroupRow from "../FormGroupRow";
import FormLabel from "../FormLabel";
import InputText from "../InputText";
import InputRow from "../InputRow";
import SelectOption from "../SelectOption";
import CheckboxInput from "../CheckboxInput";
import TextareaInput from "../TextareaInput";
import ButtonTag from "../ButtonTag";
import { useState } from "react";
import axios from "axios";

export default function Citizen(){

    const [name_bn, setNameBn] = useState('');
    const [name_en, setNameEn] = useState('');
    const [bith_no, setbith_no] = useState('');
    const [national_id, setnational_id] = useState('');
    const [passport, setpassport] = useState('');
    const [date, setdate] = useState('');
    const [fathers_name_en, setfather_name_en] = useState('');
    const [fathers_name_bn, setfather_name_bn] = useState('');
    const [mothers_name_en, setmother_name_en] = useState('');
    const [mothers_name_bn, setmother_name_bn] = useState('');
    const [occupation, setoccation] = useState('');
    const [resident, setresident] = useState('');
    const [religion, setreligion] = useState('');
    const [education, seteducation] = useState('');
    const [gender, setgender] = useState('');
    const [marital_status, setmarital_status] = useState('');

    const [permanent_village_mahalla_en, setpermanent_village_mahalla_en] = useState('');
    const [permanent_village_mahalla_bn, setpermanent_village_mahalla_bn] = useState('');
    const [permanent_road_block_sector_en, setpermanent_road_block_sector_en] = useState('');
    const [permanent_road_block_sector_bn, setpermanent_road_block_sector_bn] = useState('');
    const [permanent_holding, setpermanent_holding] = useState('');
    const [permanent_ward, setpermanent_ward] = useState('');
    const [permanent_district_en, setpermanent_district_en] = useState('');
    const [permanent_district_bn, setpermanent_district_bn] = useState('');
    const [permanent_upazila_thana_en, setpermanent_upazila_thana_en] = useState('');
    const [permanent_upazila_thana_bn, setpermanent_upazila_thana_bn] = useState('');
    const [permanent_post_office_bn, setpermanent_post_office_bn] = useState('');
    const [permanent_post_office_en, setpermanent_post_office_en] = useState('');

    const [present_village_mahalla_en, setpresent_village_mahalla_en] = useState('');
    const [present_village_mahalla_bn, setpresent_village_mahalla_bn] = useState('');
    const [present_road_block_sector_en, setpresent_road_block_sector_en] = useState('');
    const [present_road_block_sector_bn, setpresent_road_block_sector_bn] = useState('');
    const [present_holding, setpresent_holding] = useState('');
    const [present_ward, setpresent_ward] = useState('');
    const [present_district_en, setpresent_district_en] = useState('');
    const [present_district_bn, setpresent_district_bn] = useState('');
    const [present_upazila_thana_en, setpresent_upazila_thana_en] = useState('');
    const [present_upazila_thana_bn, setpresent_upazila_thana_bn] = useState('');
    const [present_post_office_bn, setpresent_post_office_bn] = useState('');
    const [present_post_office_en, setpresent_post_office_en] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [comment_en, setcomment_en] = useState('');
    const [comment_bn, setcomment_bn] = useState('');

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError]     = useState(null);

    const submitFormData = (e) => {
        e.preventDefault();
        setLoading(true);

        const citizenInfo = {
            name_bn,
            name_en,
            national_id,
            bith_no,
            passport,
            date,
            fathers_name_en,
            fathers_name_bn,
            mothers_name_en,
            mothers_name_bn,
            occupation,
            resident,
            religion,
            education,
            gender,
            marital_status,
            permanent_village_mahalla_en,
            permanent_village_mahalla_bn,
            permanent_road_block_sector_en,
            permanent_road_block_sector_bn,
            permanent_holding,
            permanent_ward,
            permanent_district_en,
            permanent_district_bn,
            permanent_upazila_thana_en,
            permanent_upazila_thana_bn,
            permanent_post_office_bn,
            permanent_post_office_en,
            present_village_mahalla_en,
            present_village_mahalla_bn,
            present_road_block_sector_en,
            present_road_block_sector_bn,
            present_holding,
            present_ward,
            present_district_en,
            present_district_bn,
            present_upazila_thana_en,
            present_upazila_thana_bn,
            present_post_office_bn,
            present_post_office_en,
            mobile,
            email,
            comment_en,
            comment_bn
        }

        axios.post(process.env.REACT_APP_API_NAME+"api/citizens",citizenInfo)
            .then((response) => {
                 console.log(response.data.message);
                setSuccess(response.data.message);
            }).catch((err) => {
                setError(err);
            }).finally(() => {
                setLoading(false);
            })

        console.log(citizenInfo);

      };

    if(loading) return <h3>Loading..</h3>
    if(error) return <h3>Something Wrong try again..</h3>
    
    return (
        <>
        <section className="user-area" style={{marginTop: '10px'}}>
			<div className="container">
				<div className="user-form-content register-width">
                    <h3>নাগরিক আবেদন </h3>
                     <Form onSubmit={submitFormData}>
                            <p>{success}</p>
                            <div className="row">
                             <div className="col-sm-4 col-md-4 col-12">
                             <span className="TextBold" style={{color:"red"}}> নিয়মাবলি : </span>
                              <ul>
                                  <li> প্রথমে একাউন্ট তৈরী করুন , আর একাউন্ট করা তৈরী থাকলে  লগইন করুন ।</li>
                                  <li> বাংলায় সার্টিফিকেট পেতে শুধুমাত্র বাংলায় ঘর গুলো পূরন করুন ।</li>
                              </ul>
                             </div>
                            <div className="col-sm-4 col-md-4 col-12" style={{textAlign:"center"}}>
                                <span className="TextBold"> সরবরাহের ধরণ  </span><br /><br />
                                <CheckboxInput name="delivery" value="1"> জরুরী </CheckboxInput>
                                <CheckboxInput name="delivery" value="2"> অতি জরুরী </CheckboxInput>
                                <CheckboxInput name="delivery" value="3"> সাধারন </CheckboxInput>
                            </div>
                            <div className="col-sm-4 col-md-4 col-12">
                                <img className="imageStyle floatRight" alt=" default pic"  src="assets/images/404.jpg" /> <br />
                                <InputRow className=" imageTagInput"  type="file" />
                            </div>
                            </div><br />
                            <FormGroupRow>
                                <FormLabel> নাম (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setNameEn(e.target.value)} placeholder="নাম (ইংরেজিতে)" />
                                <FormLabel> নাম (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setNameBn(e.target.value)} placeholder="নাম (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> ন্যাশনাল আইডি (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setnational_id(e.target.value)} placeholder="ন্যাশনাল আইডি (ইংরেজিতে)" />
                                <FormLabel> জন্ম নিবন্ধন নং (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setbith_no(e.target.value)}  placeholder="জন্ম নিবন্ধন নং (ইংরেজিতে)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> পাসপোর্ট নং (ইংরেজিতে)</FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpassport(e.target.value)}  placeholder="পাসপোর্ট নং (ইংরেজিতে)" />
                                <FormLabel> জম্ম তারিখ </FormLabel>
								<InputText  className="form-control" type="date" onChange={e => setdate(e.target.value)}  placeholder="নাম (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> পিতার নাম (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setfather_name_en(e.target.value)}   placeholder="পিতার নাম (ইংরেজিতে)" />
                                <FormLabel> পিতার নাম (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setfather_name_bn(e.target.value)} name="father_name_bn" id="father_name_bn" placeholder="পিতার নাম (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> মাতার নাম (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setmother_name_en(e.target.value)}  placeholder="মাতার নাম (ইংরেজিতে)" />
                                <FormLabel>মাতার নাম (বাংলায়)</FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setmother_name_bn(e.target.value)} placeholder="মাতার নাম (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> পেশা </FormLabel>
                                <InputText  className="form-control" type="text" onChange={e => setoccation(e.target.value)}  placeholder="পেশা" />
                                <FormLabel> বাসিন্দা </FormLabel>
                                <SelectOption name="resident" onChange={e => setresident(e.target.value)}>
                                    <option value="">  চিহ্নিত করুন </option>
                                    <option value="1"> অস্থায়ী </option>
                                    <option value="2"> স্থায়ী </option>
                                </SelectOption>
                            </FormGroupRow> 
                            <FormGroupRow>
                                <FormLabel> শিক্ষাগত যোগ্যতা </FormLabel>
                                <InputText  className="form-control" type="text" onChange={e => seteducation(e.target.value)}  placeholder="শিক্ষাগত যোগ্যতা" />
                                <FormLabel> ধর্ম </FormLabel>
                                <SelectOption onChange={e => setreligion(e.target.value)}>
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
									<CheckboxInput onChange={e => setgender(e.target.value)}  value="1"> পুরুষ </CheckboxInput>
									<CheckboxInput onChange={e => setgender(e.target.value)}  value="2"> মহিলা </CheckboxInput>
									<CheckboxInput  onChange={e => setgender(e.target.value)} value="3"> অন্যান্য </CheckboxInput>
								</div>
                                <FormLabel> বৈবাহিক সম্পর্ক </FormLabel>
                                <SelectOption name="marital_status" onChange={e => setmarital_status(e.target.value)}>
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
								<InputText  className="form-control" type="text" onChange={e => setpresent_village_mahalla_en(e.target.value)}   placeholder="গ্রাম/মহল্লা (ইংরেজিতে)" />
                                <FormLabel> গ্রাম/মহল্লা (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpresent_village_mahalla_bn(e.target.value)}  placeholder="গ্রাম/মহল্লা (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> রোড/ব্লক/সেক্টর (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpresent_road_block_sector_en(e.target.value)}  placeholder="রোড/ব্লক/সেক্টর (ইংরেজিতে)" />
                                <FormLabel> রোড/ব্লক/সেক্টর (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpresent_road_block_sector_bn(e.target.value)} n placeholder="রোড/ব্লক/সেক্টর (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> হোল্ডিং নং </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpresent_holding(e.target.value)}  placeholder="হোল্ডিং নং" />
                                <FormLabel> ওয়ার্ড নং </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpresent_ward(e.target.value)}  placeholder="ওয়ার্ড নং" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> জেলা (ইংরেজিতে) </FormLabel>
                                <SelectOption  onChange={e => setpresent_district_en(e.target.value)}>
                                    <option value=""> চিহ্নিত করুন </option>
                                    <option value=""> Dhaka </option>
                                    <option value=""> Feni </option>
                                </SelectOption>
                                <FormLabel> জেলা (বাংলায়) </FormLabel>
                                <SelectOption  onChange={e => setpresent_district_bn(e.target.value)}>
                                    <option value=""> চিহ্নিত করুন </option>
                                    <option value=""> ঢাকা </option>
                                    <option value=""> ফেনী </option>
                                </SelectOption>
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> উপজেলা/থানা   </FormLabel>
                                <SelectOption  onChange={e => setpresent_upazila_thana_en(e.target.value)}>
                                    <option value=""> চিহ্নিত করুন </option>
                                    <option value=""> Savar </option>
                                    <option value=""> Feni Sadar </option>
                                </SelectOption>
                                <FormLabel> উপজেলা/থানা   (বাংলায়) </FormLabel>
                                <SelectOption  onChange={e => setpresent_upazila_thana_bn(e.target.value)}>
                                    <option value=""> চিহ্নিত করুন </option>
                                    <option value=""> সাভার  </option>
                                    <option value=""> ফেনী সদর </option>
                                </SelectOption>
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> পোষ্ট অফিস  (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpresent_post_office_bn(e.target.value)}  placeholder="পোষ্ট অফিস  (বাংলায়)" />
                                <FormLabel> পোষ্ট অফিস (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpresent_post_office_en(e.target.value)}  placeholder="পোষ্ট অফিস (ইংরেজিতে)" />
                            </FormGroupRow>
                            <p className="textCenter textFontWeight">স্থায়ী ঠিকানা</p>
                            <FormGroupRow>
                                <FormLabel> গ্রাম/মহল্লা (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpermanent_village_mahalla_en(e.target.value)}   placeholder="গ্রাম/মহল্লা (ইংরেজিতে)" />
                                <FormLabel> গ্রাম/মহল্লা (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpermanent_village_mahalla_bn(e.target.value)}  placeholder="গ্রাম/মহল্লা (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> রোড/ব্লক/সেক্টর (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpermanent_road_block_sector_en(e.target.value)}  placeholder="রোড/ব্লক/সেক্টর (ইংরেজিতে)" />
                                <FormLabel> রোড/ব্লক/সেক্টর (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpermanent_road_block_sector_bn(e.target.value)} n placeholder="রোড/ব্লক/সেক্টর (বাংলায়)" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> হোল্ডিং নং </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpermanent_holding(e.target.value)}  placeholder="হোল্ডিং নং" />
                                <FormLabel> ওয়ার্ড নং </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpermanent_ward(e.target.value)}  placeholder="ওয়ার্ড নং" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> জেলা (ইংরেজিতে) </FormLabel>
                                <SelectOption  onChange={e => setpermanent_district_en(e.target.value)}>
                                    <option value=""> চিহ্নিত করুন </option>
                                    <option value=""> Dhaka </option>
                                    <option value=""> Feni </option>
                                </SelectOption>
                                <FormLabel> জেলা (বাংলায়) </FormLabel>
                                <SelectOption  onChange={e => setpermanent_district_bn(e.target.value)}>
                                    <option value=""> চিহ্নিত করুন </option>
                                    <option value=""> ঢাকা </option>
                                    <option value=""> ফেনী </option>
                                </SelectOption>
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> উপজেলা/থানা   </FormLabel>
                                <SelectOption  onChange={e => setpermanent_upazila_thana_en(e.target.value)}>
                                    <option value=""> চিহ্নিত করুন </option>
                                    <option value=""> Savar </option>
                                    <option value=""> Feni Sadar </option>
                                </SelectOption>
                                <FormLabel> উপজেলা/থানা   (বাংলায়) </FormLabel>
                                <SelectOption  onChange={e => setpermanent_upazila_thana_bn(e.target.value)}>
                                    <option value=""> চিহ্নিত করুন </option>
                                    <option value=""> সাভার  </option>
                                    <option value=""> ফেনী সদর </option>
                                </SelectOption>
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> পোষ্ট অফিস  (বাংলায়) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpermanent_post_office_bn(e.target.value)}  placeholder="পোষ্ট অফিস  (বাংলায়)" />
                                <FormLabel> পোষ্ট অফিস (ইংরেজিতে) </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setpermanent_post_office_en(e.target.value)}  placeholder="পোষ্ট অফিস (ইংরেজিতে)" />
                            </FormGroupRow>
                           
                            <p className="textCenter textFontWeight">যোগাযোগের ঠিকানা</p>
                            <FormGroupRow>
                                <FormLabel> মোবাইল </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setmobile(e.target.value)} placeholder="মোবাইল" />
                                <FormLabel> ইমেল </FormLabel>
								<InputText  className="form-control" type="text" onChange={e => setemail(e.target.value)}  placeholder="ইমেল" />
                            </FormGroupRow>
                            <FormGroupRow>
                                <FormLabel> মন্তব্য দিন(ইংরেজিতে) </FormLabel>
                                <TextareaInput rows="4" onChange={e => setcomment_en(e.target.value)} placeholder="মন্তব্য দিন(ইংরেজিতে)"></TextareaInput>
                                <FormLabel> মন্তব্য দিন(বাংলায়) </FormLabel>
                                <TextareaInput rows="4" onChange={e => setcomment_bn(e.target.value)} placeholder="মন্তব্য দিন(বাংলায়)"></TextareaInput>
                            </FormGroupRow>
                            <br />
                            <FormGroupRow>
                                <div className="col-2"></div>
                                <ButtonTag className="col-2 btn btn-md btn-success"  type="submit"> <i className="ri-save-line"></i> সাবমিট করুন  </ButtonTag>
                            </FormGroupRow>
                            
                     </Form>
                </div>
            </div>
        </section>
        </>
    );
}