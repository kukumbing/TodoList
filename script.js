
function makelist(valu){
	//tạo text	
	var newlist = document.createElement("li");
	var text = document.createTextNode(valu);
	newlist.appendChild(text);
	var placeHolder = document.getElementById("listitem");
	placeHolder.appendChild(newlist);
	
	//tạo khung để sửa text
	
	var editlist = document.createElement("input");
	editlist.type="text";	
	
	editlist.setAttribute("id", "editlist");	
	
	
	//editedlist.appendChild(newtext);
	
	//tạo nút edit
	var edit = document.createElement("input");
	edit.type="button";
	edit.value="Edit";
	
	edit.setAttribute("id", "nut");
	placeHolder.appendChild(edit);
	edit.onclick = function(){
		//this.parentNode.replaceChild(document.getElementById("addtask"),newlist);
		newlist.childNodes[0].nodeValue ="";
		newlist.parentNode.replaceChild(editlist,newlist);
		this.parentNode.replaceChild(ok,this);	
		
	}

	
	//tạo nút OK
	
	var ok = document.createElement("input");
	ok.type="button";
	ok.value="Ok";
	
	ok.setAttribute("id", "nut");
	ok.onclick = function(){
		this.parentNode.replaceChild(edit,this);
		//var newtext = createTextNode(editlist.value);

		//newlist.appendChild(document.createTextNode(editlist.value));
		newlist.childNodes[0].nodeValue =editlist.value;
		editlist.parentNode.replaceChild(newlist,editlist);
		
	}

	
	//tạo nút done
	var xong = document.createElement("div1");
	var done = document.createElement("input");
	done.type="button";
	done.value="Done";
	
	done.setAttribute("id", "nut");
	placeHolder.appendChild(done);
	
	done.onclick= function(){
		this.parentNode.replaceChild(xong,this);
	}
	
	//tạo nút xóa
	var erase = document.createElement("input");
	erase.type="button";
	erase.value="Delete";
	erase.setAttribute("id", "nut");
	
	placeHolder.appendChild(erase);
	erase.onclick = function(){
		
		try{
			xong.parentElement.removeChild(xong);
		} catch(e)
		{	};
		try{
			done.parentElement.removeChild(done);
		} catch(e)
		{	};		
		try{
			editlist.parentElement.removeChild(editlist);
		} catch(e)
		{	};
				
		try{
			edit.parentElement.removeChild(edit);
		} catch(e)
		{	};		
		try{
			ok.parentElement.removeChild(ok);
		} catch(e)
		{	};		

		try{
			newlist.parentElement.removeChild(newlist);
		} catch(e)
		{	};		
		
		this.parentElement.removeChild(this);
	}
}

function addtask(){
	var getvalue = document.getElementById("addtask").value;
	if(getvalue.length>90){
		alert("Công việc quá dài,chỉ được nhập không quá 90 ký tự");
		
		
	} else{
		if(getvalue!=""){
			document.getElementById("addtask").value = "";
			makelist(getvalue);
		}
	}
	
}

makelist("Đi ăn");
makelist("Đi ngủ");
makelist("Đi chơi game");
makelist("Ngồi thiền");
/*for(var i=0;i<550;i++)
{
	makelist("Đi chơi");
}*/
