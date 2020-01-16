(function(){var P$=Clazz.newPackage("org.ejml.data"),I$=[[0,'org.ejml.ops.MatrixIO']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FixedMatrix3_64F", null, null, 'org.ejml.data.FixedMatrix64F');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['a1','a2','a3']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D', function (a1, a2, a3) {
;C$.$init$.apply(this);
this.a1=a1;
this.a2=a2;
this.a3=a3;
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_data_FixedMatrix3_64F', function (o) {
;C$.$init$.apply(this);
this.a1=o.a1;
this.a2=o.a2;
this.a3=o.a3;
}, 1);

Clazz.newMeth(C$, 'get$I$I', function (row, col) {
return this.unsafe_get$I$I(row, col);
});

Clazz.newMeth(C$, 'unsafe_get$I$I', function (row, col) {
if (row != 0 && col != 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row or column must be zero since this is a vector"]);
var w=Math.max(row, col);
if (w == 0) {
return this.a1;
} else if (w == 1) {
return this.a2;
} else if (w == 2) {
return this.a3;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Out of range.  " + w]);
}});

Clazz.newMeth(C$, 'set$I$I$D', function (row, col, val) {
this.unsafe_set$I$I$D(row, col, val);
});

Clazz.newMeth(C$, 'unsafe_set$I$I$D', function (row, col, val) {
if (row != 0 && col != 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row or column must be zero since this is a vector"]);
var w=Math.max(row, col);
if (w == 0) {
this.a1=val;
} else if (w == 1) {
this.a2=val;
} else if (w == 2) {
this.a3=val;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Out of range.  " + w]);
}});

Clazz.newMeth(C$, 'getNumRows$', function () {
return 3;
});

Clazz.newMeth(C$, 'getNumCols$', function () {
return 1;
});

Clazz.newMeth(C$, 'getNumElements$', function () {
return 3;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$org_ejml_data_FixedMatrix3_64F,[this]);
});

Clazz.newMeth(C$, 'print$', function () {
$I$(1).print$java_io_PrintStream$org_ejml_data_Matrix64F(System.out, this);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
