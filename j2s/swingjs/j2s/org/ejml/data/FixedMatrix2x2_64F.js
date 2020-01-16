(function(){var P$=Clazz.newPackage("org.ejml.data"),I$=[[0,'org.ejml.ops.MatrixIO']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FixedMatrix2x2_64F", null, null, 'org.ejml.data.FixedMatrix64F');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['a11','a12','a21','a22']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D', function (a11, a12, a21, a22) {
;C$.$init$.apply(this);
this.a11=a11;
this.a12=a12;
this.a21=a21;
this.a22=a22;
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_data_FixedMatrix2x2_64F', function (o) {
;C$.$init$.apply(this);
this.a11=o.a11;
this.a12=o.a12;
this.a21=o.a21;
this.a22=o.a22;
}, 1);

Clazz.newMeth(C$, 'get$I$I', function (row, col) {
return this.unsafe_get$I$I(row, col);
});

Clazz.newMeth(C$, 'unsafe_get$I$I', function (row, col) {
if (row == 0) {
if (col == 0) {
return this.a11;
} else if (col == 1) {
return this.a12;
}} else if (row == 1) {
if (col == 0) {
return this.a21;
} else if (col == 1) {
return this.a22;
}}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row and/or column out of range. " + row + " " + col ]);
});

Clazz.newMeth(C$, 'set$I$I$D', function (row, col, val) {
this.unsafe_set$I$I$D(row, col, val);
});

Clazz.newMeth(C$, 'unsafe_set$I$I$D', function (row, col, val) {
if (row == 0) {
if (col == 0) {
this.a11=val;
return;
} else if (col == 1) {
this.a12=val;
return;
}} else if (row == 1) {
if (col == 0) {
this.a21=val;
return;
} else if (col == 1) {
this.a22=val;
return;
}}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row and/or column out of range. " + row + " " + col ]);
});

Clazz.newMeth(C$, 'getNumRows$', function () {
return 2;
});

Clazz.newMeth(C$, 'getNumCols$', function () {
return 2;
});

Clazz.newMeth(C$, 'getNumElements$', function () {
return 4;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$org_ejml_data_FixedMatrix2x2_64F,[this]);
});

Clazz.newMeth(C$, 'print$', function () {
$I$(1).print$java_io_PrintStream$org_ejml_data_Matrix64F(System.out, this);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
