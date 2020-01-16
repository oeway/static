(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[[0,'java.util.ArrayList',['net.imglib2.RealPointSampleList','.RealPointSampleListCursor']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealPointSampleList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.IterableRealInterval');
C$.$classes$=[['RealPointSampleListCursor',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.coordinates=Clazz.new_(1,{E:"net.imglib2.RealPoint"},$I$(1,1));
this.samples=Clazz.new_(1,{E:"Object"},$I$(1,1));
this.lastIndex=-1;
}, 1);

C$.$fields$=[['I',['n','lastIndex'],'O',['coordinates','java.util.ArrayList','+samples','min','double[]','+max']]]

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.$init$.apply(this);
this.n=n;
this.min=Clazz.array(Double.TYPE, [n]);
this.max=Clazz.array(Double.TYPE, [n]);
for (var d=0; d < n; ++d) {
this.min[d]=1.7976931348623157E308;
this.max[d]=-1.7976931348623157E308;
}
}, 1);

Clazz.newMeth(C$, ['add$net_imglib2_RealPoint$TT'], function (position, sample) {
this.coordinates.add$TE(position);
this.samples.add$TE(sample);
this.lastIndex=this.samples.size$() - 1;
for (var d=0; d < this.n; ++d) {
var x=position.getDoublePosition$I(d);
if (x < this.min[d] ) this.min[d]=x;
if (x > this.max[d] ) this.max[d]=x;
}
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_($I$(2,1), [this, null]);
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this;
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.samples.get$I(0);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_($I$(2,1), [this, null]);
});

Clazz.newMeth(C$, 'size$', function () {
return this.samples.size$();
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.max[d];
});

Clazz.newMeth(C$, 'realMax$DA', function (m) {
for (var d=0; d < this.n; ++d) m[d]=this.max[d];

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (m) {
m.setPosition$DA(this.max);
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.min[d];
});

Clazz.newMeth(C$, 'realMin$DA', function (m) {
for (var d=0; d < this.n; ++d) m[d]=this.min[d];

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (m) {
m.setPosition$DA(this.min);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RealPointSampleList, "RealPointSampleListCursor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.RealCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=-1;
this.position=null;
this.sample=null;
}, 1);

C$.$fields$=[['I',['index'],'O',['position','net.imglib2.RealPoint','sample','<T>']]]

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(C$, [this, null]);
copy.index=this.index;
copy.position=this.position;
copy.sample=this.sample;
return copy;
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.position.getDoublePosition$I(d);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.position.getFloatPosition$I(d);
});

Clazz.newMeth(C$, 'localize$FA', function (pos) {
this.position.localize$FA(pos);
});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
this.position.localize$DA(pos);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.this$0.n;
});

Clazz.newMeth(C$, 'get$', function () {
return this.sample;
});

Clazz.newMeth(C$, 'fwd$', function () {
++this.index;
this.position=this.this$0.coordinates.get$I(this.index);
this.sample=this.this$0.samples.get$I(this.index);
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.index < this.this$0.lastIndex;
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.index+=steps;
this.position=this.this$0.coordinates.get$I(this.index);
this.sample=this.this$0.samples.get$I(this.index);
});

Clazz.newMeth(C$, 'reset$', function () {
this.index=-1;
this.position=null;
this.sample=null;
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return this.sample;
});

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
