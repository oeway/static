(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'java.util.Vector','gnu.jpdf.PDFStream','gnu.jpdf.PDFObject']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PDFPageList", null, 'gnu.jpdf.PDFObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['pages','java.util.Vector']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["/Pages"]);C$.$init$.apply(this);
this.pages=Clazz.new_(1,{E:"gnu.jpdf.PDFPage"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'add$gnu_jpdf_PDFPage', function (page) {
this.pages.addElement$TE(page);
page.pdfPageList=this;
});

Clazz.newMeth(C$, 'getPage$I', function (page) {
return (this.pages.elementAt$I(page));
});

Clazz.newMeth(C$, 'write$java_io_OutputStream', function (os) {
this.writeStart$java_io_OutputStream(os);
$I$(2).write$java_io_OutputStream$S(os, "/Kids ");
$I$(2).write$java_io_OutputStream$S(os, $I$(3).toArray$java_util_Vector(this.pages));
$I$(2).write$java_io_OutputStream$S(os, "\n");
$I$(2).write$java_io_OutputStream$S(os, "/Count ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.pages.size$()));
$I$(2).write$java_io_OutputStream$S(os, "\n");
this.writeEnd$java_io_OutputStream(os);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
