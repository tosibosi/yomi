var room = 1;
function education_fields() {

    room++;
    var objTo = document.getElementById('education_fields')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+room);
	var rdiv = 'removeclass'+room;

    divtest.innerHTML = '<div class="col-sm-4 nopadding"><div class="form-group"><input type="text" class="form-control" id="quname" name="txt_questname[]" value="" placeholder="Вопрос" required></div></div><div class="col-sm-2 nopadding"><div class="form-group"><div class="input-group"><input type="text" class="form-control" id="ans1" name="txt_ans1[]" value="" placeholder="Ответ 1" required><input type="text" class="form-control" id="ans1p" name="txt_ans1p[]" value="0" placeholder="0-100%"></div></div></div><div class="col-sm-2 nopadding"><div class="form-group"><div class="input-group"><input type="text" class="form-control" id="ans2" name="txt_ans2[]" value="" placeholder="Ответ 2" required><input type="text" class="form-control" id="ans2p" name="txt_ans2p[]" value="0" placeholder="0-100%"></div></div></div><div class="col-sm-2 nopadding"><div class="form-group"><div class="input-group"><input type="text" class="form-control" id="ans3" name="txt_ans3[]" value="" placeholder="Ответ 3" required><input type="text" class="form-control" id="ans3p" name="txt_ans3p[]" value="0" placeholder="0-100%"></div></div></div><div class="col-sm-2 nopadding"><div class="form-group"><div class="input-group"><input type="text" class="form-control" id="ans4" name="txt_ans4[]" value="" placeholder="Вопрос 4" required><input type="text" class="form-control" id="ans4p" name="txt_ans4p[]" value="0" placeholder="0-100%"><div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_education_fields('+ room +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div></div></div></div><div class="clear"></div>';


    objTo.appendChild(divtest)
}
   function remove_education_fields(rid) {
	   $('.removeclass'+rid).remove();
   }
