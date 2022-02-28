function ownerType(){
    let type = $("#wonerType").val();
    $("#newOwnarArea").hide();

    if(type==2){
        $("#newOwnarArea").show();
    }else if(type==3){
        $("#newOwnarArea").show();
    }else{
        $("#newOwnarArea").hide();
    }
}

 // addNewOwnar

 function addNewOwnar(){
    var total_element = $(".element").length;

    var lastid = $(".element:last").attr("id");
    var split_id = lastid.split("_");
    var nextindex = Number(split_id[1]) + 1;


    if(Emptycheck(nextindex-1) =='' ){

       alert("নতুন মালিকের নিম্নে যোগ হয়েছে");

       var max = 20;

       if(total_element < max ){
       $(".element:last").after("<div class='otherOwner element' id='licenseAreaDiv_"+ nextindex +"'></div>");

       $("#licenseAreaDiv_" + nextindex).append(`
       <p class="textFontWeight">
           মালিকের তথ্য ${nextindex} &nbsp;&nbsp; 
           <button type="button" onclick="removeNewOwnar(${nextindex});" class="btn btn-xs btn-danger "><i class="ri-delete-bin-line"></i> বাদ দিন </button>
       </p>
       
       <div class="form-group row">
       <label class="col-2  textRight">নাম (ইংরেজিতে)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" id="nameEN_${nextindex}" placeholder="নাম (ইংরেজিতে)">
       </div>
       <label class="col-2 textRight">নাম (বাংলায়)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" id="nameBN_${nextindex}" placeholder="নাম (বাংলায়)">
       </div>
   </div>
   <div class="form-group row">
       <label class="col-2  textRight">ন্যাশনাল আইডি (ইংরেজিতে)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="nid" placeholder="ন্যাশনাল আইডি (ইংরেজিতে)">
       </div>
       <label class="col-2  textRight">জন্ম নিবন্ধন নং (ইংরেজিতে)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="dobno" placeholder="জন্ম নিবন্ধন নং (ইংরেজিতে)">
       </div>
   </div>
   <div class="form-group row ">
       <label class="col-2  textRight">পাসপোর্ট নং (ইংরেজিতে)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="passwort" placeholder="পাসপোর্ট নং (ইংরেজিতে)">
       </div>
       <label class="col-2  textRight">জম্ম তারিখ  </label>
       <div class="col-4">
           <input class="form-control" type="date" name="dob">
       </div>
   </div>

   <div class="form-group  row ">
       <label class="col-2  textRight">পিতার নাম (ইংরেজিতে)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="পিতার নাম (ইংরেজিতে)">
       </div>
       <label class="col-2  textRight"> পিতার নাম (বাংলায়)</label>
       <div  class="col-4">
           <input class="form-control" type="text" name="name" placeholder="পিতার নাম (বাংলায়)">
       </div>
   </div>

   <div class="form-group row">
       <label class="col-2  textRight">মাতার নাম (ইংরেজিতে)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="মাতার নাম (ইংরেজিতে)">
       </div>
       <label class="col-2  textRight">মাতার নাম (বাংলায়)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="মাতার নাম (বাংলায়)">
       </div>
   </div>
   <div class="form-group row">
       <label class="col-2  textRight">পেশা</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="পেশা">
       </div>
       <label class="col-2  textRight">বাসিন্দা</label>
       <div class="col-4">
           <select  class="form-control" name="resident">
               <option value=""> চিহ্নিত করুন </option>
               <option value="1" > অস্থায়ী </option>
               <option value="2" > স্থায়ী </option>
           </select>
       </div>
   </div>
   <div class="form-group row">
       <label class="col-2  textRight">শিক্ষাগত যোগ্যতা</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="শিক্ষাগত যোগ্যতা">
       </div>
       <label class="col-2  textRight">ধর্ম</label>
       <div class="col-4">
           <select  class="form-control" name="resident">
               <option value=""> চিহ্নিত করুন </option>
               <option value='1' >ইসলাম</option>
               <option value='2' >হিন্দু</option>
               <option value='3' >বৌদ্ধ ধর্ম</option>
               <option value='4' >খ্রিস্ট ধর্ম</option>
               <option value='5' >অন্যান্য</option>
           </select>
       </div>
   </div>
   <div class="form-group row">
       <label class="col-2  textRight">লিঙ্গ</label>
       <div class="col-4">
           <label class="radio-inline gender"><input type="radio" id="gender_1" name="gender" value="1"  /><span class="wrap">&nbsp; পুরুষ &nbsp;</span></label>
           <label class="radio-inline gender"><input type="radio" id="gender_2" name="gender" value="2"  /><span class="wrap">&nbsp; মহিলা &nbsp;</span></label>
           <label class="radio-inline gender"><input type="radio" id="gender_3" name="gender" value="3"  /><span class="wrap">&nbsp; অন্যান্য</span></label>
       </div>
       <label class="col-2  textRight">বৈবাহিক সম্পর্ক</label>
       <div class="col-4">
           <select  class="form-control" name="resident">
               <option value=""> চিহ্নিত করুন </option>
               <option value='1' >অবিবাহিত</option>
               <option value='2' >বিবাহিত</option>
               <option value='3' >তালাক প্রাপ্ত</option>
               <option value='4' >বিধবা</option>
               <option value='5' >অন্যান্য</option>
           </select>
       </div>
   </div>
   <p class="textCenter textFontWeight">বর্তমান  ঠিকানা</p>
   <div class="form-group row">
       <label class="col-2  textRight">গ্রাম/মহল্লা (ইংরেজিতে)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="গ্রাম/মহল্লা (ইংরেজিতে)">
       </div>
       <label class="col-2  textRight"> গ্রাম/মহল্লা (বাংলায়) </label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="গ্রাম/মহল্লা (বাংলায়) ">
       </div>
   </div>
   <div class="form-group row">
       <label class="col-2  textRight">রোড/ব্লক/সেক্টর (ইংরেজিতে)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="রোড/ব্লক/সেক্টর (ইংরেজিতে)">
       </div>
       <label class="col-2  textRight">রোড/ব্লক/সেক্টর (বাংলায়)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="রোড/ব্লক/সেক্টর (বাংলায়)">
       </div>
   </div>
   <div class="form-group row">
       <label  class="col-2  textRight">হোল্ডিং নং</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="হোল্ডিং নং">
       </div>
       <label  class="col-2  textRight">ওয়ার্ড নং</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="ওয়ার্ড নং"> 
       </div>
   </div>
   <div class="form-group row">
       <label class="col-2  textRight"> জেলা (ইংরেজিতে)  </label>
       <div class="col-4">
           <select  class="form-control" name="resident">
               <option value=""> চিহ্নিত করুন </option>
           </select>
       </div>
       <label class="col-2  textRight"> জেলা (বাংলায়)   </label>
       <div class="col-4">
           <select  class="form-control" name="resident">
               <option value=""> চিহ্নিত করুন </option>
           </select>
       </div>
   </div>
   <div class="form-group row">
       <label class="col-2  textRight"> উপজেলা/থানা    </label>
       <div class="col-4">
           <select  class="form-control" name="resident" >
               <option value=""> চিহ্নিত করুন </option>
           </select>
       </div>
       <label  class="col-2  textRight"> উপজেলা/থানা    </label>
       <div class="col-4">
           <select  class="form-control" name="resident">
               <option value=""> চিহ্নিত করুন </option>
           </select>
       </div>
   </div>
   <div class="form-group row">
       <label  class="col-2  textRight"> পোষ্ট অফিস  (বাংলায়)  </label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="পোষ্ট অফিস  (বাংলায়) "/>
       </div>
       <label  class="col-2  textRight"> পোষ্ট অফিস (ইংরেজিতে) </label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="জেলা (ইংরেজিতে)"/>
       </div>
   </div>
   <p class="textCenter textFontWeight">স্থায়ী ঠিকানা</p>
   <div class="form-group row">
       <label class="col-2  textRight">গ্রাম/মহল্লা (ইংরেজিতে)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="গ্রাম/মহল্লা (ইংরেজিতে)">
       </div>
       <label class="col-2  textRight"> গ্রাম/মহল্লা (বাংলায়) </label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="গ্রাম/মহল্লা (বাংলায়) ">
       </div>
   </div>
   <div class="form-group row">
       <label class="col-2  textRight">রোড/ব্লক/সেক্টর (ইংরেজিতে)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="রোড/ব্লক/সেক্টর (ইংরেজিতে)">
       </div>
       <label class="col-2  textRight">রোড/ব্লক/সেক্টর (বাংলায়)</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="রোড/ব্লক/সেক্টর (বাংলায়)">
       </div>
   </div>
   <div class="form-group row">
       <label  class="col-2  textRight">হোল্ডিং নং</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="হোল্ডিং নং">
       </div>
       <label  class="col-2  textRight">ওয়ার্ড নং</label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="ওয়ার্ড নং"> 
       </div>
   </div>
   <div class="form-group row">
       <label class="col-2  textRight"> জেলা (ইংরেজিতে)  </label>
       <div class="col-4">
           <select  class="form-control" name="resident">
               <option value=""> চিহ্নিত করুন </option>
           </select>
       </div>
       <label class="col-2  textRight"> জেলা (বাংলায়)   </label>
       <div class="col-4">
           <select  class="form-control" name="resident">
               <option value=""> চিহ্নিত করুন </option>
           </select>
       </div>
   </div>
   <div class="form-group row">
       <label class="col-2  textRight"> উপজেলা/থানা    </label>
       <div class="col-4">
           <select  class="form-control" name="resident" >
               <option value=""> চিহ্নিত করুন </option>
           </select>
       </div>
       <label  class="col-2  textRight"> উপজেলা/থানা    </label>
       <div class="col-4">
           <select  class="form-control" name="resident">
               <option value=""> চিহ্নিত করুন </option>
           </select>
       </div>
   </div>
   <div class="form-group row">
       <label  class="col-2  textRight"> পোষ্ট অফিস  (বাংলায়)  </label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="পোষ্ট অফিস  (বাংলায়) "/>
       </div>
       <label  class="col-2  textRight"> পোষ্ট অফিস (ইংরেজিতে) </label>
       <div class="col-4">
           <input class="form-control" type="text" name="name" placeholder="জেলা (ইংরেজিতে)"/>
       </div>
   </div>`);

       }

    }else{
        alert("মালিকের তথ্য দিন");
    }
}
function removeNewOwnar(id){
	var deleteindex = id;
	$("#licenseAreaDiv_" + deleteindex).remove();
   
}

function Emptycheck(row_id){

    var Empty = isNaN($('#nameBN_'+row_id).val()) ? 0 : parseFloat($('#nameBN_'+row_id).val());

    return Empty;

}