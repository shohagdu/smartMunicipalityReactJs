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

       var max = 20;

       if(total_element < max ){
       $(".element:last").after("<div class='row element' id='licenseAreaDiv_"+ nextindex +"'></div>");

       $("#licenseAreaDiv_" + nextindex).append(`
       <p>
           মালিকের তথ্য ${nextindex} &nbsp;&nbsp; 
           <button type="button" onclick="removeNewOwnar(${nextindex});" class="btn btn-xs btn-danger "><i class="ri-delete-bin-line"></i> বাদ দিন </button>
       </p>
       <div class="col-6">
           <div class="form-group">
               <label>নাম (ইংরেজিতে)</label>
               <input class="form-control" type="text" name="name" id="nameEN_${nextindex}">
           </div>
       </div>
       <div class="col-6">
           <div class="form-group">
               <label>নাম (বাংলায়)</label>
               <input class="form-control" type="text" name="name" id="nameBN_${nextindex}">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>ন্যাশনাল আইডি (ইংরেজিতে)</label>
               <input class="form-control" type="text" name="nid" id="nid_${nextindex}">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>জন্ম নিবন্ধন নং (ইংরেজিতে)</label>
               <input class="form-control" type="text" name="dobno">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>পাসপোর্ট নং (ইংরেজিতে)</label>
               <input class="form-control" type="text" name="passwort">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>জম্ম তারিখ  </label>
               <input class="form-control" type="date" name="dob">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>পিতার নাম (ইংরেজিতে)</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>পিতার নাম (বাংলায়)</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>মাতার নাম (ইংরেজিতে)</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>মাতার নাম (বাংলায়)</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>পেশা</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> বাসিন্দা  </label>
               <select  class="form-control" name="resident">
                   <option value=""> চিহ্নিত করুন </option>
                   <option value="1" > অস্থায়ী </option>
                   <option value="2" > স্থায়ী </option>
               </select>
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>শিক্ষাগত যোগ্যতা</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> ধর্ম   </label>
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

       <div class="col-6">
           <div class="form-group">
               <label>লিঙ্গ </label><br>
               <label class="radio-inline gender"><input type="radio" id="gender_1" name="gender" value="1"  /><span class="wrap">&nbsp; পুরুষ &nbsp;</span></label>
               <label class="radio-inline gender"><input type="radio" id="gender_2" name="gender" value="2"  /><span class="wrap">&nbsp; মহিলা &nbsp;</span></label>
               <label class="radio-inline gender"><input type="radio" id="gender_3" name="gender" value="3"  /><span class="wrap">&nbsp; অন্যান্য</span></label>
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> বৈবাহিক সম্পর্ক </label>
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

       <div class="col-6">
           <div class="form-group">
               <label>গ্রাম/মহল্লা (ইংরেজিতে)</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>গ্রাম/মহল্লা (বাংলায়) </label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>রোড/ব্লক/সেক্টর (ইংরেজিতে)</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>রোড/ব্লক/সেক্টর (বাংলায়)</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>হোল্ডিং নং</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>ওয়ার্ড নং</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> জেলা   </label>
               <select  class="form-control" name="resident">
                   <option value=""> চিহ্নিত করুন </option>
               </select>
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> জেলা   </label>
               <select  class="form-control" name="resident">
                   <option value=""> চিহ্নিত করুন </option>
               </select>
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> উপজেলা/থানা    </label>
               <select  class="form-control" name="resident">
                   <option value=""> চিহ্নিত করুন </option>
               </select>
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> উপজেলা/থানা    </label>
               <select  class="form-control" name="resident">
                   <option value=""> চিহ্নিত করুন </option>
               </select>
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>পোষ্ট অফিস </label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>পোষ্ট অফিস </label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>
       <p class="textCenter textFontWeight">স্থায়ী ঠিকানা</p>

       <div class="col-6">
           <div class="form-group">
               <label>গ্রাম/মহল্লা (ইংরেজিতে)</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>গ্রাম/মহল্লা (বাংলায়) </label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>রোড/ব্লক/সেক্টর (ইংরেজিতে)</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>রোড/ব্লক/সেক্টর (বাংলায়)</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>হোল্ডিং নং</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>ওয়ার্ড নং</label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> জেলা   </label>
               <select  class="form-control" name="resident">
                   <option value=""> চিহ্নিত করুন </option>
               </select>
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> জেলা   </label>
               <select  class="form-control" name="resident">
                   <option value=""> চিহ্নিত করুন </option>
               </select>
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> উপজেলা/থানা    </label>
               <select  class="form-control" name="resident">
                   <option value=""> চিহ্নিত করুন </option>
               </select>
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label> উপজেলা/থানা    </label>
               <select  class="form-control" name="resident">
                   <option value=""> চিহ্নিত করুন </option>
               </select>
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>পোষ্ট অফিস </label>
               <input class="form-control" type="text" name="name">
           </div>
       </div>

       <div class="col-6">
           <div class="form-group">
               <label>পোষ্ট অফিস </label>
               <input class="form-control" type="text" name="name">
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