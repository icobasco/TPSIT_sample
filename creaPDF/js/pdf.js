function creaPdf() {
  alert("Adesso creo il pdf");
  var doc = new jsPDF();
  doc.text(20, 20, 'TPSIT - Creazione PDF in javascript');
  doc.text(10, 30, 'Questo file pdf è stato creato in automatico.');
  doc.addPage();
  doc.text(20, 20, 'Questa è la seconda pagina. La terza pagina viene lasciata vuota.');
  doc.addPage();
  doc.addPage();
  doc.text(20, 20, 'Questa è la quarta pagina. La terza è stata lasciata vuota.');

  doc.save('tpsit_pdfWithJavascript.pdf');
}
