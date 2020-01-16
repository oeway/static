(function(){var P$=Clazz.newPackage("org.ejml.data"),I$=[[0,'org.ejml.ops.MatrixIO']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FixedMatrix3x3_64F", null, null, 'org.ejml.data.FixedMatrix64F');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['a11','a12','a13','a21','a22','a23','a31','a32','a33']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D$D$D$D$D$D', function (a11, a12, a13, a21, a22, a23, a31, a32, a33) {
;C$.$init$.apply(this);
this.a11=a11;
this.a12=a12;
this.a13=a13;
this.a21=a21;
this.a22=a22;
this.a23=a23;
this.a31=a31;
this.a32=a32;
this.a33=a33;
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_data_FixedMatrix3x3_64F', function (o) {
;C$.$init$.apply(this);
this.a11=o.a11;
this.a12=o.a12;
this.a13=o.a13;
this.a21=o.a21;
this.a22=o.a22;
this.a23=o.a23;
this.a31=o.a31;
this.a32=o.a32;
this.a33=o.a33;
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
} else if (col == 2) {
return this.a13;
}} else if (row == 1) {
if (col == 0) {
return this.a21;
} else if (col == 1) {
return this.a22;
} else if (col == 2) {
return this.a23;
}} else if (row == 2) {
if (col == 0) {
return this.a31;
} else if (col == 1) {
return this.a32;
} else if (col == 2) {
return this.a33;
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
} else if (col == 2) {
this.a13=val;
return;
}} else if (row == 1) {
if (col == 0) {
this.a21=val;
return;
} else if (col == 1) {
this.a22=val;
return;
} else if (col == 2) {
this.a23=val;
return;
}} else if (row == 2) {
if (col == 0) {
this.a31=val;
return;
} else if (col == 1) {
this.a32=val;
return;
} else if (col == 2) {
this.a33=val;
return;
}}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row and/or column out of range. " + row + " " + col ]);
});

Clazz.newMeth(C$, 'getNumRows$', function () {
return 3;
});

Clazz.newMeth(C$, 'getNumCols$', function () {
return 3;
});

Clazz.newMeth(C$, 'getNumElements$', function () {
return 9;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$org_ejml_data_FixedMatrix3x3_64F,[this]);
});

Clazz.newMeth(C$, 'print$', function () {
$I$(1).print$java_io_PrintStream$org_ejml_data_Matrix64F(System.out, this);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
