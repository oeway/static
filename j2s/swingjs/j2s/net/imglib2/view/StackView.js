(function(){var P$=Clazz.newPackage("net.imglib2.view"),p$1={},I$=[[0,'net.imglib2.RandomAccess','net.imglib2.FinalInterval','net.imglib2.util.Util',['net.imglib2.view.StackView','.StackAccessMode'],'net.imglib2.RandomAccessibleInterval',['net.imglib2.view.StackView','.MoveAllSlicesRA'],['net.imglib2.view.StackView','.DefaultRA'],'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StackView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractInterval', ['net.imglib2.RandomAccessibleInterval', 'net.imglib2.View']);
C$.$classes$=[['StackAccessMode',25],['DefaultRA',25],['MoveAllSlicesRA',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['slices','net.imglib2.RandomAccessibleInterval[]','stackAccessMode','net.imglib2.view.StackView.StackAccessMode']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (hyperslices) {
C$.c$$java_util_List$net_imglib2_view_StackView_StackAccessMode.apply(this, [hyperslices, $I$(4).DEFAULT]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$net_imglib2_view_StackView_StackAccessMode', function (hyperslices, stackAccessMode) {
;C$.superclazz.c$$I.apply(this,[hyperslices.get$I(0).numDimensions$() + 1]);C$.$init$.apply(this);
this.stackAccessMode=stackAccessMode;
this.slices=hyperslices.toArray$TTA(Clazz.array($I$(5), [hyperslices.size$()]));
for (var d=0; d < this.n - 1; ++d) {
this.min[d]=this.slices[0].min$I(d);
this.max[d]=this.slices[0].max$I(d);
}
this.min[this.n - 1]=0;
this.max[this.n - 1]=this.slices.length - 1;
}, 1);

Clazz.newMeth(C$, 'randomAccess$', function () {
return this.stackAccessMode === $I$(4).MOVE_ALL_SLICE_ACCESSES  ? Clazz.new_(1,{T:"Object"},$I$(6,1).c$$net_imglib2_RandomAccessibleIntervalA,[this.slices]) : Clazz.new_(1,{T:"Object"},$I$(7,1).c$$net_imglib2_RandomAccessibleIntervalA,[this.slices]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.stackAccessMode === $I$(4).MOVE_ALL_SLICE_ACCESSES  ? Clazz.new_(1,{T:"Object"},$I$(6,1).c$$net_imglib2_RandomAccessibleIntervalA$net_imglib2_Interval,[this.slices, interval]) : Clazz.new_(1,{T:"Object"},$I$(7,1).c$$net_imglib2_RandomAccessibleIntervalA$net_imglib2_Interval,[this.slices, interval]);
});

Clazz.newMeth(C$, 'getSourceSlices$', function () {
return $I$(8).asList$TTA(this.slices);
});

Clazz.newMeth(C$, 'getStackAccessMode$', function () {
return this.stackAccessMode;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.StackView, "StackAccessMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "DEFAULT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "MOVE_ALL_SLICE_ACCESSES", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StackView, "DefaultRA", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','sd','slice'],'O',['tmpLong','long[]','tmpInt','int[]','sliceAccesses','net.imglib2.RandomAccess[]','sliceAccess','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleIntervalA', function (slices) {
C$.c$$net_imglib2_RandomAccessibleIntervalA$net_imglib2_Interval.apply(this, [slices, null]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleIntervalA$net_imglib2_Interval', function (slices, interval) {
;C$.$init$.apply(this);
this.n=slices[0].numDimensions$() + 1;
this.sd=this.n - 1;
this.slice=0;
this.tmpLong=Clazz.array(Long.TYPE, [this.sd]);
this.tmpInt=Clazz.array(Integer.TYPE, [this.sd]);
this.sliceAccesses=Clazz.array($I$(1), [slices.length]);
if (interval == null ) {
for (var i=0; i < slices.length; ++i) this.sliceAccesses[i]=slices[i].randomAccess$();

} else {
var smin=Clazz.array(Long.TYPE, [this.sd]);
var smax=Clazz.array(Long.TYPE, [this.sd]);
for (var d=0; d < this.sd; ++d) {
smin[d]=interval.min$I(d);
smax[d]=interval.max$I(d);
}
var sliceInterval=Clazz.new_($I$(2,1).c$$JA$JA,[smin, smax]);
for (var i=0; i < slices.length; ++i) this.sliceAccesses[i]=slices[i].randomAccess$net_imglib2_Interval(sliceInterval);

}this.sliceAccess=this.sliceAccesses[this.slice];
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_view_StackView_DefaultRA', function (a) {
;C$.$init$.apply(this);
this.sliceAccesses=$I$(3).genericArray$I(a.sliceAccesses.length);
for (var i=0; i < this.sliceAccesses.length; ++i) this.sliceAccesses[i]=a.sliceAccesses[i].copyRandomAccess$();

this.slice=a.slice;
this.sliceAccess=this.sliceAccesses[this.slice];
this.n=a.n;
this.sd=a.sd;
this.tmpLong=a.tmpLong.clone$();
this.tmpInt=a.tmpInt.clone$();
}, 1);

Clazz.newMeth(C$, 'localize$IA', function (position) {
for (var d=0; d < this.sd; ++d) position[d]=this.sliceAccess.getIntPosition$I(d);

position[this.sd]=this.slice;
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
for (var d=0; d < this.sd; ++d) position[d]=this.sliceAccess.getLongPosition$I(d);

position[this.sd]=this.slice;
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return (d < this.sd) ? this.sliceAccess.getIntPosition$I(d) : this.slice;
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return (d < this.sd) ? this.sliceAccess.getLongPosition$I(d) : this.slice;
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
for (var d=0; d < this.sd; ++d) position[d]=this.sliceAccess.getLongPosition$I(d);

position[this.sd]=this.slice;
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
for (var d=0; d < this.sd; ++d) position[d]=this.sliceAccess.getLongPosition$I(d);

position[this.sd]=this.slice;
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.getLongPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.getLongPosition$I(d);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
if (d < this.sd) this.sliceAccess.fwd$I(d);
 else p$1.setSlice$I.apply(this, [this.slice + 1]);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
if (d < this.sd) this.sliceAccess.bck$I(d);
 else p$1.setSlice$I.apply(this, [this.slice - 1]);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
if (d < this.sd) this.sliceAccess.move$I$I(distance, d);
 else p$1.setSlice$I.apply(this, [this.slice + distance]);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
if (d < this.sd) this.sliceAccess.move$J$I(distance, d);
 else p$1.setSlice$I.apply(this, [this.slice + (distance|0)]);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (distance) {
for (var d=0; d < this.sd; ++d) this.sliceAccess.move$J$I(distance.getLongPosition$I(d), d);

p$1.setSlice$I.apply(this, [this.slice + distance.getIntPosition$I(this.sd)]);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.sd; ++d) this.sliceAccess.move$I$I(distance[d], d);

p$1.setSlice$I.apply(this, [this.slice + distance[this.sd]]);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.sd; ++d) this.sliceAccess.move$J$I(distance[d], d);

p$1.setSlice$I.apply(this, [this.slice + (distance[this.sd]|0)]);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (position) {
for (var d=0; d < this.sd; ++d) this.tmpLong[d]=position.getLongPosition$I(d);

this.sliceAccess.setPosition$JA(this.tmpLong);
p$1.setSlice$I.apply(this, [position.getIntPosition$I(this.sd)]);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
System.arraycopy$O$I$O$I$I(position, 0, this.tmpInt, 0, this.sd);
this.sliceAccess.setPosition$IA(this.tmpInt);
p$1.setSlice$I.apply(this, [position[this.sd]]);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
System.arraycopy$O$I$O$I$I(position, 0, this.tmpLong, 0, this.sd);
this.sliceAccess.setPosition$JA(this.tmpLong);
p$1.setSlice$J.apply(this, [position[this.sd]]);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
if (d < this.sd) this.sliceAccess.setPosition$I$I(position, d);
 else p$1.setSlice$I.apply(this, [position]);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
if (d < this.sd) this.sliceAccess.setPosition$J$I(position, d);
 else p$1.setSlice$J.apply(this, [position]);
});

Clazz.newMeth(C$, 'setSlice$I', function (i) {
if (i != this.slice) {
this.slice=i;
if (this.slice >= 0 && this.slice < this.sliceAccesses.length ) {
this.sliceAccesses[this.slice].setPosition$net_imglib2_Localizable(this.sliceAccess);
this.sliceAccess=this.sliceAccesses[this.slice];
}}}, p$1);

Clazz.newMeth(C$, 'setSlice$J', function (i) {
p$1.setSlice$I.apply(this, [(i|0)]);
}, p$1);

Clazz.newMeth(C$, 'get$', function () {
return this.sliceAccess.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_view_StackView_DefaultRA,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StackView, "MoveAllSlicesRA", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','sd','slice'],'O',['tmpLong','long[]','tmpInt','int[]','sliceAccesses','net.imglib2.RandomAccess[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleIntervalA', function (slices) {
C$.c$$net_imglib2_RandomAccessibleIntervalA$net_imglib2_Interval.apply(this, [slices, null]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleIntervalA$net_imglib2_Interval', function (slices, interval) {
;C$.$init$.apply(this);
this.n=slices[0].numDimensions$() + 1;
this.sd=this.n - 1;
this.slice=0;
this.tmpLong=Clazz.array(Long.TYPE, [this.sd]);
this.tmpInt=Clazz.array(Integer.TYPE, [this.sd]);
this.sliceAccesses=Clazz.array($I$(1), [slices.length]);
if (interval == null ) {
for (var i=0; i < slices.length; ++i) this.sliceAccesses[i]=slices[i].randomAccess$();

} else {
var smin=Clazz.array(Long.TYPE, [this.sd]);
var smax=Clazz.array(Long.TYPE, [this.sd]);
for (var d=0; d < this.sd; ++d) {
smin[d]=interval.min$I(d);
smax[d]=interval.max$I(d);
}
var sliceInterval=Clazz.new_($I$(2,1).c$$JA$JA,[smin, smax]);
for (var i=0; i < slices.length; ++i) this.sliceAccesses[i]=slices[i].randomAccess$net_imglib2_Interval(sliceInterval);

}}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_view_StackView_MoveAllSlicesRA', function (a) {
;C$.$init$.apply(this);
this.sliceAccesses=$I$(3).genericArray$I(a.sliceAccesses.length);
for (var i=0; i < this.sliceAccesses.length; ++i) this.sliceAccesses[i]=a.sliceAccesses[i].copyRandomAccess$();

this.slice=a.slice;
this.n=a.n;
this.sd=a.sd;
this.tmpLong=a.tmpLong.clone$();
this.tmpInt=a.tmpInt.clone$();
}, 1);

Clazz.newMeth(C$, 'localize$IA', function (position) {
for (var d=0; d < this.sd; ++d) position[d]=this.sliceAccesses[0].getIntPosition$I(d);

position[this.sd]=this.slice;
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
for (var d=0; d < this.sd; ++d) position[d]=this.sliceAccesses[0].getLongPosition$I(d);

position[this.sd]=this.slice;
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return (d < this.sd) ? this.sliceAccesses[0].getIntPosition$I(d) : this.slice;
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return (d < this.sd) ? this.sliceAccesses[0].getLongPosition$I(d) : this.slice;
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
for (var d=0; d < this.sd; ++d) position[d]=this.sliceAccesses[0].getLongPosition$I(d);

position[this.sd]=this.slice;
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
for (var d=0; d < this.sd; ++d) position[d]=this.sliceAccesses[0].getLongPosition$I(d);

position[this.sd]=this.slice;
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.getLongPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.getLongPosition$I(d);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
if (d < this.sd) for (var s=0; s < this.sliceAccesses.length; ++s) this.sliceAccesses[s].fwd$I(d);

 else ++this.slice;
});

Clazz.newMeth(C$, 'bck$I', function (d) {
if (d < this.sd) for (var s=0; s < this.sliceAccesses.length; ++s) this.sliceAccesses[s].bck$I(d);

 else --this.slice;
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
if (d < this.sd) for (var s=0; s < this.sliceAccesses.length; ++s) this.sliceAccesses[s].move$I$I(distance, d);

 else this.slice+=distance;
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
if (d < this.sd) for (var s=0; s < this.sliceAccesses.length; ++s) this.sliceAccesses[s].move$J$I(distance, d);

 else this.slice+=(distance|0);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (distance) {
for (var s=0; s < this.sliceAccesses.length; ++s) for (var d=0; d < this.sd; ++d) this.sliceAccesses[s].move$J$I(distance.getLongPosition$I(d), d);


this.slice+=distance.getIntPosition$I(this.sd);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var s=0; s < this.sliceAccesses.length; ++s) for (var d=0; d < this.sd; ++d) this.sliceAccesses[s].move$I$I(distance[d], d);


this.slice+=distance[this.sd];
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var s=0; s < this.sliceAccesses.length; ++s) for (var d=0; d < this.sd; ++d) this.sliceAccesses[s].move$J$I(distance[d], d);


this.slice+=(distance[this.sd]|0);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (position) {
for (var d=0; d < this.sd; ++d) this.tmpLong[d]=position.getLongPosition$I(d);

for (var s=0; s < this.sliceAccesses.length; ++s) this.sliceAccesses[s].setPosition$JA(this.tmpLong);

this.slice=position.getIntPosition$I(this.sd);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
System.arraycopy$O$I$O$I$I(position, 0, this.tmpInt, 0, this.sd);
for (var s=0; s < this.sliceAccesses.length; ++s) this.sliceAccesses[s].setPosition$IA(this.tmpInt);

this.slice=position[this.sd];
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
System.arraycopy$O$I$O$I$I(position, 0, this.tmpLong, 0, this.sd);
for (var s=0; s < this.sliceAccesses.length; ++s) this.sliceAccesses[s].setPosition$JA(this.tmpLong);

this.slice=(position[this.sd]|0);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
if (d < this.sd) for (var s=0; s < this.sliceAccesses.length; ++s) this.sliceAccesses[s].setPosition$I$I(position, d);

 else this.slice=position;
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
if (d < this.sd) for (var s=0; s < this.sliceAccesses.length; ++s) this.sliceAccesses[s].setPosition$J$I(position, d);

 else this.slice=(position|0);
});

Clazz.newMeth(C$, 'get$', function () {
return this.sliceAccesses[this.slice].get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_view_StackView_MoveAllSlicesRA,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
