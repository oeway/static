(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.RealPoint','Jama.Matrix']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractAffineTransform", null, null, ['net.imglib2.realtransform.AffineGet', 'net.imglib2.realtransform.AffineSet']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['a','Jama.Matrix','t','double[]','+tmp','ds','net.imglib2.RealPoint[]']]]

Clazz.newMeth(C$, 'c$$Jama_Matrix$DA', function (a, t) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return a.getRowDimension$() == t.length && a.getColumnDimension$() == t.length }, function(){return "The passed arrays must be n*n and the t-vector n."});
this.n=t.length;
this.a=a;
this.t=t;
this.tmp=Clazz.array(Double.TYPE, [this.n]);
this.ds=Clazz.array($I$(1), [this.n]);
for (var r=0; r < this.n; ++r) this.ds[r]=Clazz.new_($I$(1,1).c$$I,[this.n]);

this.updateDs$();
}, 1);

Clazz.newMeth(C$, 'c$$Jama_Matrix', function (matrix) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return matrix.getRowDimension$() == matrix.getColumnDimension$() - 1}, function(){return "The passed affine matrix must be of the format (n-1)*n."});
this.n=matrix.getRowDimension$();
this.a=Clazz.new_($I$(2,1).c$$I$I,[this.n, this.n]);
this.t=Clazz.array(Double.TYPE, [this.n]);
this.tmp=Clazz.array(Double.TYPE, [this.n]);
this.ds=Clazz.array($I$(1), [this.n]);
this.a.setMatrix$I$I$I$I$Jama_Matrix(0, this.n - 1, 0, this.n - 1, matrix);
for (var r=0; r < this.n; ++r) {
this.t[r]=matrix.get$I$I(r, this.n);
this.ds[r]=Clazz.new_($I$(1,1).c$$I,[this.n]);
}
this.updateDs$();
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.$init$.apply(this);
this.n=n;
this.a=Clazz.new_($I$(2,1).c$$I$I,[n, n]);
this.t=Clazz.array(Double.TYPE, [n]);
this.tmp=Clazz.array(Double.TYPE, [n]);
this.ds=Clazz.array($I$(1), [n]);
for (var r=0; r < n; ++r) {
var d=Clazz.new_($I$(1,1).c$$I,[n]);
this.a.set$I$I$D(r, r, 1.0);
d.setPosition$D$I(1.0, r);
this.ds[r]=d;
}
}, 1);

Clazz.newMeth(C$, 'updateDs$', function () {
for (var c=0; c < this.n; ++c) {
var d=this.ds[c];
for (var r=0; r < this.n; ++r) d.setPosition$D$I(this.a.get$I$I(r, c), r);

}
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.n && target.length >= this.n }, function(){return "Source or target vector dimensions do not match with the transformation."});
for (var r=0; r < this.n; ++r) {
this.tmp[r]=0;
for (var c=0; c < this.n; ++c) this.tmp[r] += source[c] * this.a.get$I$I(r, c);

}
for (var r=0; r < this.n; ++r) target[r]=this.tmp[r] + this.t[r];

});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.n && target.length >= this.n }, function(){return "Source or target vector dimensions do not match with the transformation."});
for (var r=0; r < this.n; ++r) {
this.tmp[r]=0;
for (var c=0; c < this.n; ++c) this.tmp[r] += source[c] * this.a.get$I$I(r, c);

}
for (var r=0; r < this.n; ++r) target[r]=(this.tmp[r] + this.t[r]);

});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.n && target.numDimensions$() >= this.n }, function(){return "Source or target vector dimensions do not match with the transformation."});
for (var r=0; r < this.n; ++r) {
this.tmp[r]=0;
for (var c=0; c < this.n; ++c) this.tmp[r] += source.getDoublePosition$I(c) * this.a.get$I$I(r, c);

}
for (var r=0; r < this.n; ++r) target.setPosition$D$I(this.tmp[r] + this.t[r], r);

});

Clazz.newMeth(C$, 'get$I$I', function (row, column) {
Clazz.assert(C$, this, function(){return row >= 0 && row < this.n  && column >= 0  && column <= this.n }, function(){return "Row or column out of bounds."});
if (column == this.n) return this.t[row];
return this.a.get$I$I(row, column);
});

Clazz.newMeth(C$, 'getRowPackedCopy$', function () {
var copy=Clazz.array(Double.TYPE, [this.n * this.n + this.n]);
for (var r=0, i=0; r < this.n; ++r, ++i) {
for (var c=0; c < this.n; ++c, ++i) copy[i]=this.a.get$I$I(r, c);

copy[i]=this.t[r];
}
return copy;
});

Clazz.newMeth(C$, 'd$I', function (d) {
Clazz.assert(C$, this, function(){return d >= 0 && d < this.n }, function(){return "Dimension out of bounds."});
return this.ds[d];
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
