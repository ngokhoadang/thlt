function insertjs(main_string, ins_string, pos) {
   if(typeof(pos) == "undefined") {
    pos = 0;
  }
   if(typeof(ins_string) == "undefined") {
    ins_string = '';
  }
   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
};

function options(option = 'find',opt_sta='',opt_end='',num=0){
  
  switch(option) {
    case 'find':
      opt_sta = '<span style="background-color:yellow">';
      opt_end = '</span>'
      num = 45;
      break;
    default:
      // code block
  }
  return {opt_sta,opt_end,num};
}
$('#brackets').on('click',function(){
  document.getElementById("findText").value = document.getElementById("findText").value+"[]";
});
function exportHTML(){
  var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
       "xmlns:w='urn:schemas-microsoft-com:office:word' "+
       "xmlns='http://www.w3.org/TR/REC-html40'>"+
       "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
  var footer = "</body></html>";
  var sourceHTML = header+CKEDITOR.instances.editor1.getData()+footer;
  var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  var fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = 'document.doc';
  fileDownload.click();
  document.body.removeChild(fileDownload);
}

function getValueOfInput() {
  let str1 = CKEDITOR.instances.editor1.getData().replaceAll('<span style="background-color:yellow">','');
  str1 = str1.replaceAll('</span>','');
  str1 = (str1.replaceAll('<p>',''));
  str1 = (str1.replaceAll('</p>',''));
  let array1;
  let opt_sta;
  let opt_end;
  let num;
  options('find',opt_sta,opt_end,num);
  let desc = CKEDITOR.instances.editor1.getData();
  desc = (desc.replaceAll('<span style="background-color:yellow">',''));
  desc = (desc.replaceAll('</span>',''));
  desc = (desc.replaceAll('<p>',''));
  desc = (desc.replaceAll('</p>',''));
  return {str1,desc}
};

function setFind(desc){
  CKEDITOR.instances.editor1.setData(desc);
}


CKEDITOR.replace('editor1', {
    height: 260,
    width: 700,
    removeButtons: 'PasteFromWord',
    // extraPlugins: 'exportpdf'
});


$('#cke_editor1').on('click',function(){
  let str1 = CKEDITOR.instances.editor1.getData().replaceAll('<span style="background-color:#ffff00">','');
  str1 = str1.replaceAll('</span>','');
  str1 = (str1.replaceAll('<p>',''));
  str1 = (str1.replaceAll('</p>',''));
  setFind(str1);
});