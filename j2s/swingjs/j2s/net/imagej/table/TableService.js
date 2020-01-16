(function(){var P$=Clazz.newPackage("net.imagej.table"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "TableService", null, null, 'net.imagej.ImageJService');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$org_scijava_table_Table$net_imagej_Dataset', function (table, img) {
if (img.getProperties$().get$O("tables") != null ) {
(img.getProperties$().get$O("tables")).add$TE(table);
} else {
var t=Clazz.new_(1,{E:"org.scijava.table.Table"},$I$(1,1));
t.add$TE(table);
img.getProperties$().put$TK$TV("tables", t);
}});

Clazz.newMeth(C$, 'clear$net_imagej_Dataset', function (img) {
img.getProperties$().put$TK$TV("tables", null);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
