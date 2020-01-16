(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'javax.swing.JFrame','org.ejml.ops.MatrixComponent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MatrixVisualization");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'show$org_ejml_data_D1Matrix64F$S', function (A, title) {
var frame=Clazz.new_($I$(1,1).c$$S,[title]);
var width=300;
var height=300;
if (A.numRows > A.numCols) {
width=(width * A.numCols/A.numRows|0);
} else {
height=(height * A.numRows/A.numCols|0);
}var panel=Clazz.new_($I$(2,1).c$$I$I,[width, height]);
panel.setMatrix$org_ejml_data_D1Matrix64F(A);
frame.add$java_awt_Component$O(panel, "Center");
frame.pack$();
frame.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
