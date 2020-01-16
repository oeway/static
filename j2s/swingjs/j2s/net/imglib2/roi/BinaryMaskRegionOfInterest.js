(function(){var P$=Clazz.newPackage("net.imglib2.roi"),p$1={},I$=[[0,'net.imglib2.view.Views',['net.imglib2.roi.BinaryMaskRegionOfInterest','.BMROIIterationOrder'],['net.imglib2.roi.BinaryMaskRegionOfInterest','.BMROIIterableInterval','.BMROICursor'],'ThreadLocal',['net.imglib2.roi.BinaryMaskRegionOfInterest','.BMROIIterableInterval']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BinaryMaskRegionOfInterest", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.roi.AbstractRegionOfInterest', 'net.imglib2.roi.IterableRegionOfInterest');
C$.$classes$=[['BMROIIterationOrder',4],['BMROIIterableInterval',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cached_size=-1;
}, 1);

C$.$fields$=[['L',['cached_size'],'O',['img','<I extends RandomAccessibleInterval<T>>','randomAccess','ThreadLocal','firstRelPos','long[]','+minima','+maxima','origin','double[]']]]

Clazz.newMeth(C$, ['c$$TI'], function (img) {
;C$.superclazz.c$$I.apply(this,[img.numDimensions$()]);C$.$init$.apply(this);
this.img=img;
this.origin=Clazz.array(Double.TYPE, [img.numDimensions$()]);
this.randomAccess=((P$.BinaryMaskRegionOfInterest$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BinaryMaskRegionOfInterest$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('ThreadLocal'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initialValue$', function () {
return this.$finals$.img.randomAccess$();
});
})()
), Clazz.new_(1,{T:"net.imglib2.RandomAccess"},$I$(4,1), [this, {img:img}],P$.BinaryMaskRegionOfInterest$1));
}, 1);

Clazz.newMeth(C$, 'getIterableIntervalOverROI$net_imglib2_RandomAccessible', function (src) {
return Clazz.new_(1,{TT:"Object"},$I$(5,1).c$$net_imglib2_RandomAccess, [this, null, src.randomAccess$()]);
});

Clazz.newMeth(C$, 'contains$DA', function (position) {
this.validate$();
for (var i=0; i < this.numDimensions$(); i++) {
var lPosition=((position[i] - this.origin[i])|0);
if ((lPosition < this.minima[i]) || (lPosition > this.maxima[i]) ) return false;
this.randomAccess.get$().setPosition$J$I(lPosition, i);
}
return this.randomAccess.get$().get$().get$();
});

Clazz.newMeth(C$, 'getRealExtrema$DA$DA', function (min, max) {
this.validate$();
for (var i=0; i < this.numDimensions$(); i++) {
min[i]=this.minima[i] + this.origin[i];
max[i]=this.maxima[i] + this.origin[i];
}
});

Clazz.newMeth(C$, 'getCachedSize$', function () {
this.validate$();
return this.cached_size;
});

Clazz.newMeth(C$, 'getFirstPosition$', function () {
var pos=this.getFirstRelativePosition$();
for (var i=0; i < pos.length; i++) pos[i]=(pos[i]+(this.origin[i])|0);

return pos;
});

Clazz.newMeth(C$, 'getFirstRelativePosition$', function () {
this.validate$();
return this.firstRelPos;
});

Clazz.newMeth(C$, 'validate$', function () {
if (this.cached_size == -1) {
this.cached_size=0;
this.minima=Clazz.array(Long.TYPE, [this.numDimensions$()]);
this.maxima=Clazz.array(Long.TYPE, [this.numDimensions$()]);
var c=$I$(1).iterable$net_imglib2_RandomAccessibleInterval(this.img).localizingCursor$();
while (c.hasNext$()){
if (c.next$().get$()) {
this.cached_size=1;
this.firstRelPos=Clazz.array(Long.TYPE, [this.numDimensions$()]);
c.localize$JA(this.firstRelPos);
c.localize$JA(this.minima);
c.localize$JA(this.maxima);
break;
}}
while (c.hasNext$()){
if (c.next$().get$()) {
this.cached_size++;
for (var i=0; i < this.numDimensions$(); i++) {
var pos=c.getLongPosition$I(i);
this.minima[i]=Math.min(this.minima[i], pos);
this.maxima[i]=Math.max(this.maxima[i], pos);
}
}}
}});

Clazz.newMeth(C$, 'move$D$I', function (displacement, d) {
this.origin[d] += displacement;
});

Clazz.newMeth(C$, 'getImg$', function () {
return this.img;
});

Clazz.newMeth(C$, 'getOrigin$', function () {
return this.origin;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.BinaryMaskRegionOfInterest, "BMROIIterationOrder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getImg$', function () {
return this.this$0.img;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "net.imglib2.roi.BinaryMaskRegionOfInterest.BMROIIterationOrder"))) return false;
var o=obj;
return o.getImg$() === this.getImg$() ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BinaryMaskRegionOfInterest, "BMROIIterableInterval", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.IterableInterval');
C$.$classes$=[['BMROICursor',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['src','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess', function (src) {
;C$.$init$.apply(this);
this.src=src;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].getCachedSize$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'], []);
});

Clazz.newMeth(C$, 'firstElement$', function () {
this.src.setPosition$JA(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].getFirstRelativePosition$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'], []));
return this.src.get$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return Clazz.new_($I$(2,1), [this, null]);
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.this$0.img.realMin$I(d) + this.this$0.origin[d];
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.this$0.img.realMin$DA(min);
for (var i=0; i < min.length; i++) min[i] += this.this$0.origin[i];

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.this$0.img.realMin$net_imglib2_RealPositionable(min);
min.move$DA(this.this$0.origin);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.this$0.img.realMax$I(d) + this.this$0.origin[d];
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
this.this$0.img.realMax$DA(max);
for (var i=0; i < max.length; i++) max[i] += this.this$0.origin[i];

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.this$0.img.realMax$net_imglib2_RealPositionable(max);
max.move$DA(this.this$0.origin);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].numDimensions$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'], []);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(3,1), [this, null]);
});

Clazz.newMeth(C$, 'min$I', function (d) {
this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].validate$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'], []);
return this.this$0.minima[d] + (this.this$0.origin[d]|0);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].validate$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'], []);
for (var i=0; i < this.numDimensions$(); i++) min[i]=this.this$0.minima[i] + (this.this$0.origin[i]|0);

});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].validate$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'], []);
for (var i=0; i < min.numDimensions$(); i++) {
min.setPosition$J$I(this.this$0.minima[i] + (this.this$0.origin[i]|0), i);
}
});

Clazz.newMeth(C$, 'max$I', function (d) {
this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].validate$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'], []);
return this.this$0.maxima[d] + (this.this$0.origin[d]|0);
});

Clazz.newMeth(C$, 'max$JA', function (max) {
this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].validate$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'], []);
for (var i=0; i < this.numDimensions$(); i++) max[i]=this.this$0.maxima[i] + (this.this$0.origin[i]|0);

});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].validate$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'], []);
for (var i=0; i < max.numDimensions$(); i++) {
max.setPosition$J$I(this.this$0.maxima[i] + (this.this$0.origin[i]|0), i);
}
});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
this.this$0.img.dimensions$JA(dimensions);
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.this$0.img.dimension$I(d);
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_($I$(3,1), [this, null]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_($I$(3,1), [this, null]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.BinaryMaskRegionOfInterest.BMROIIterableInterval, "BMROICursor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.AbstractCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['nextIsValid','cursorHasNext'],'O',['cursor','net.imglib2.Cursor','position','long[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest.BMROIIterableInterval'].numDimensions$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest.BMROIIterableInterval'], [])]);C$.$init$.apply(this);
this.cursor=$I$(1).iterable$net_imglib2_RandomAccessibleInterval(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].img).localizingCursor$();
this.position=Clazz.array(Long.TYPE, [this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest.BMROIIterableInterval'].numDimensions$.apply(this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest.BMROIIterableInterval'], [])]);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.this$0.src.setPosition$net_imglib2_Localizable(this);
return this.this$0.src.get$();
});

Clazz.newMeth(C$, 'fwd$', function () {
p$1.validateNext.apply(this, []);
this.cursor.localize$JA(this.position);
this.nextIsValid=false;
});

Clazz.newMeth(C$, 'reset$', function () {
this.cursor.reset$();
this.nextIsValid=false;
});

Clazz.newMeth(C$, 'hasNext$', function () {
p$1.validateNext.apply(this, []);
return this.cursorHasNext;
});

Clazz.newMeth(C$, 'localize$JA', function (pos) {
for (var i=0; i < this.numDimensions$(); i++) pos[i]=this.position[i] + (this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].origin[i]|0);

});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.position[d] + (this.b$['net.imglib2.roi.BinaryMaskRegionOfInterest'].origin[d]|0);
});

Clazz.newMeth(C$, 'copy$', function () {
return this.copyCursor$();
});

Clazz.newMeth(C$, 'copyCursor$', function () {
var c=Clazz.new_(C$, [this, null]);
c.cursor=this.cursor.copyCursor$();
System.arraycopy$O$I$O$I$I(this.position, 0, c.position, 0, this.numDimensions$());
c.nextIsValid=this.nextIsValid;
return c;
});

Clazz.newMeth(C$, 'validateNext', function () {
if (!this.nextIsValid) {
while (this.cursor.hasNext$()){
if (this.cursor.next$().get$()) {
this.nextIsValid=true;
this.cursorHasNext=true;
return;
}}
this.nextIsValid=true;
this.cursorHasNext=false;
}}, p$1);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
