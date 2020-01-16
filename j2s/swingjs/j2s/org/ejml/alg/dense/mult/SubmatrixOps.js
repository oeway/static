(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.mult"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SubmatrixOps");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setSubMatrix$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$I$I$I$I$I$I', function (src, dst, srcRow, srcCol, dstRow, dstCol, numSubRows, numSubCols) {
for (var i=0; i < numSubRows; i++) {
for (var j=0; j < numSubCols; j++) {
var val=src.get$I$I(i + srcRow, j + srcCol);
dst.set$I$I$D(i + dstRow, j + dstCol, val);
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
