
 // addNewWarish

 function addNewWarish(){
    var total_element = $(".element2").length;

    var lastid = $(".element2:last").attr("id");
    var split_id = lastid.split("_");
    var nextindex = Number(split_id[1]) + 1;

    if(Emptycheck(nextindex-1) =='' ){
       
       var max = 30;

       if(total_element < max ){
       $(".element2:last").after("<div class='row element2' id='warishAreaDiv_"+ nextindex +"'></div>");

       $("#warishAreaDiv_" + nextindex).append('<div class="col-2"><div class="form-group"><label>নাম (বাংলায়)  </label><input class="form-control" type="text" id="warishNameBN_'+nextindex+'"  name="name"></div></div><div class="col-2"><div class="form-group"><label>নাম (ইংরেজিতে) </label><input class="form-control" type="text" name="name" id="nameEN_'+nextindex+'"></div></div><div class="col-2"><div class="form-group"><label>সম্পর্ক (বাংলায়) </label><input class="form-control" type="text" name="name" id="relationBN_'+nextindex+'"></div></div><div class="col-2"><div class="form-group"><label>সম্পর্ক (ইংরেজি) </label><input class="form-control" type="text" name="name" id="relationEN_'+nextindex+'"></div></div><div class="col-2"><div class="form-group"><label>বয়স </label><input class="form-control" type="text" name="name" id="age_'+nextindex+'"></div></div><div class="col-2"><div class="form-group"> <button type="button" onclick="removeNewWarish('+nextindex+');" class="btn btn-xs btn-danger newAddWarish "><i class="ri-delete-bin-line"></i> </button></div></div>');

       }

    }else{
        alert("ওয়ারিশগনের তথ্য দিন");
    }
}
function removeNewWarish(id){
	var deleteindex = id;
	$("#warishAreaDiv_" + deleteindex).remove();
   
}

function Emptycheck(row_id){

    var Empty = isNaN($('#warishNameBN_'+row_id).val()) ? 0 : parseFloat($('#warishNameBN_'+row_id).val());

    return Empty;

}