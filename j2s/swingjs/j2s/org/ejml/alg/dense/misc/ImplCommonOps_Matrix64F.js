(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImplCommonOps_Matrix64F");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'extract$org_ejml_data_Matrix64F$I$I$org_ejml_data_Matrix64F$I$I$I$I', function (src, srcY0, srcX0, dst, dstY0, dstX0, numRows, numCols) {
for (var y=0; y < numRows; y++) {
for (var x=0; x < numCols; x++) {
var v=src.get$I$I(y + srcY0, x + srcX0);
dst.set$I$I$D(dstY0 + y, dstX0 + x, v);
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
