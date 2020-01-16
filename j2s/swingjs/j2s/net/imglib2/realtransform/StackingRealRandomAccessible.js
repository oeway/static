(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,['net.imglib2.realtransform.StackingRealRandomAccessible','.StackingRealRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StackingRealRandomAccessible", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.RealRandomAccessible');
C$.$classes$=[['StackingRealRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numDimensions','sourceNumDimensions'],'O',['source','net.imglib2.RealRandomAccessible']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealRandomAccessible$I', function (source, numDimensions) {
;C$.$init$.apply(this);
this.source=source;
this.sourceNumDimensions=source.numDimensions$();
this.numDimensions=this.sourceNumDimensions + numDimensions;
}, 1);

Clazz.newMeth(C$, 'realRandomAccess$', function () {
return Clazz.new_($I$(1,1), [this, null]);
});

Clazz.newMeth(C$, 'realRandomAccess$net_imglib2_RealInterval', function (interval) {
return this.realRandomAccess$();
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.numDimensions;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.StackingRealRandomAccessible, "StackingRealRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.RealRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sourceAccess','net.imglib2.RealRandomAccess','position','double[]','fMove','float[]','dMove','double[]','iMove','int[]','lMove','long[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.sourceAccess=this.this$0.source.realRandomAccess$();
this.fMove=Clazz.array(Float.TYPE, [this.sourceAccess.numDimensions$()]);
this.dMove=Clazz.array(Double.TYPE, [this.fMove.length]);
this.iMove=Clazz.array(Integer.TYPE, [this.fMove.length]);
this.lMove=Clazz.array(Long.TYPE, [this.fMove.length]);
this.position=Clazz.array(Double.TYPE, [this.this$0.numDimensions]);
}, 1);

Clazz.newMeth(C$, 'move$F$I', function (distance, d) {
if (d < this.this$0.sourceNumDimensions) this.sourceAccess.move$F$I(distance, d);
 else this.position[d] += distance;
});

Clazz.newMeth(C$, 'move$D$I', function (distance, d) {
if (d < this.this$0.sourceNumDimensions) this.sourceAccess.move$D$I(distance, d);
 else this.position[d] += distance;
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (localizable) {
for (var d=0; d < this.this$0.sourceNumDimensions; ++d) this.dMove[d]=localizable.getDoublePosition$I(d);

this.sourceAccess.move$DA(this.dMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d] += localizable.getDoublePosition$I(d);

});

Clazz.newMeth(C$, 'move$FA', function (distance) {
System.arraycopy$O$I$O$I$I(distance, 0, this.fMove, 0, this.this$0.sourceNumDimensions);
this.sourceAccess.move$FA(this.fMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d] += distance[d];

});

Clazz.newMeth(C$, 'move$DA', function (distance) {
System.arraycopy$O$I$O$I$I(distance, 0, this.dMove, 0, this.this$0.sourceNumDimensions);
this.sourceAccess.move$DA(this.dMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d] += distance[d];

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_RealLocalizable', function (localizable) {
for (var d=0; d < this.this$0.sourceNumDimensions; ++d) this.dMove[d]=localizable.getDoublePosition$I(d);

this.sourceAccess.setPosition$DA(this.dMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d]=localizable.getDoublePosition$I(d);

});

Clazz.newMeth(C$, 'setPosition$FA', function (pos) {
System.arraycopy$O$I$O$I$I(pos, 0, this.fMove, 0, this.this$0.sourceNumDimensions);
this.sourceAccess.setPosition$FA(this.fMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d]=pos[d];

});

Clazz.newMeth(C$, 'setPosition$DA', function (pos) {
System.arraycopy$O$I$O$I$I(pos, 0, this.dMove, 0, this.this$0.sourceNumDimensions);
this.sourceAccess.setPosition$DA(this.dMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d]=pos[d];

});

Clazz.newMeth(C$, 'setPosition$F$I', function (pos, d) {
if (d < this.this$0.sourceNumDimensions) this.sourceAccess.setPosition$F$I(pos, d);
 else this.position[d]=pos;
});

Clazz.newMeth(C$, 'setPosition$D$I', function (pos, d) {
if (d < this.this$0.sourceNumDimensions) this.sourceAccess.setPosition$D$I(pos, d);
 else this.position[d]=pos;
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
if (d < this.this$0.sourceNumDimensions) this.sourceAccess.fwd$I(d);
 else ++this.position[d];
});

Clazz.newMeth(C$, 'bck$I', function (d) {
if (d < this.this$0.sourceNumDimensions) this.sourceAccess.bck$I(d);
 else --this.position[d];
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
if (d < this.this$0.sourceNumDimensions) this.sourceAccess.move$I$I(distance, d);
 else this.position[d] += distance;
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
if (d < this.this$0.sourceNumDimensions) this.sourceAccess.move$J$I(distance, d);
 else this.position[d] += distance;
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.this$0.sourceNumDimensions; ++d) this.lMove[d]=localizable.getLongPosition$I(d);

this.sourceAccess.move$JA(this.lMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d] += localizable.getLongPosition$I(d);

});

Clazz.newMeth(C$, 'move$IA', function (distance) {
System.arraycopy$O$I$O$I$I(distance, 0, this.iMove, 0, this.this$0.sourceNumDimensions);
this.sourceAccess.move$IA(this.iMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d] += distance[d];

});

Clazz.newMeth(C$, 'move$JA', function (distance) {
System.arraycopy$O$I$O$I$I(distance, 0, this.lMove, 0, this.this$0.sourceNumDimensions);
this.sourceAccess.move$JA(this.lMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d] += distance[d];

});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.this$0.sourceNumDimensions; ++d) this.lMove[d]=localizable.getLongPosition$I(d);

this.sourceAccess.setPosition$JA(this.lMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d]=localizable.getLongPosition$I(d);

});

Clazz.newMeth(C$, 'setPosition$IA', function (pos) {
System.arraycopy$O$I$O$I$I(pos, 0, this.iMove, 0, this.this$0.sourceNumDimensions);
this.sourceAccess.setPosition$IA(this.iMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d]=pos[d];

});

Clazz.newMeth(C$, 'setPosition$JA', function (pos) {
System.arraycopy$O$I$O$I$I(pos, 0, this.lMove, 0, this.this$0.sourceNumDimensions);
this.sourceAccess.setPosition$JA(this.lMove);
for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) this.position[d]=pos[d];

});

Clazz.newMeth(C$, 'setPosition$I$I', function (pos, d) {
if (d < this.this$0.sourceNumDimensions) this.sourceAccess.setPosition$I$I(pos, d);
 else this.position[d]=pos;
});

Clazz.newMeth(C$, 'setPosition$J$I', function (pos, d) {
if (d < this.this$0.sourceNumDimensions) this.sourceAccess.setPosition$J$I(pos, d);
 else this.position[d]=pos;
});

Clazz.newMeth(C$, 'get$', function () {
return this.sourceAccess.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$, [this, null]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'localize$FA', function (pos) {
for (var d=0; d < this.this$0.sourceNumDimensions; ++d) pos[d]=this.sourceAccess.getFloatPosition$I(d);

for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
for (var d=0; d < this.this$0.sourceNumDimensions; ++d) pos[d]=this.sourceAccess.getDoublePosition$I(d);

for (var d=this.this$0.sourceNumDimensions; d < this.this$0.numDimensions; ++d) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
if (d < this.this$0.sourceNumDimensions) return this.sourceAccess.getFloatPosition$I(d);
return this.position[d];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
if (d < this.this$0.sourceNumDimensions) return this.sourceAccess.getDoublePosition$I(d);
return this.position[d];
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.this$0.numDimensions;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
