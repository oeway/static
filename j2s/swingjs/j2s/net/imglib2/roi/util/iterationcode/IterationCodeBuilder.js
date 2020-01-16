(function(){var P$=Clazz.newPackage("net.imglib2.roi.util.iterationcode"),p$1={},I$=[[0,'gnu.trove.list.array.TIntArrayList','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IterationCodeBuilder", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.roi.util.iterationcode.IterationCode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['startedRasterization'],'L',['itcodeOffsetX','size','rasterBegin'],'O',['itcode','gnu.trove.list.array.TIntArrayList','prev','long[]','+curr','+bbmin','+bbmax']]]

Clazz.newMeth(C$, 'c$$I$J', function (numDimensions, minX) {
;C$.superclazz.c$$I.apply(this,[numDimensions]);C$.$init$.apply(this);
this.itcode=Clazz.new_($I$(1,1));
this.itcodeOffsetX=minX;
this.size=0;
this.prev=Clazz.array(Long.TYPE, [this.n]);
this.curr=Clazz.array(Long.TYPE, [this.n]);
this.bbmin=Clazz.array(Long.TYPE, [this.n]);
this.bbmax=Clazz.array(Long.TYPE, [this.n]);
$I$(2).fill$JA$J(this.bbmin, 9223372036854775807);
$I$(2).fill$JA$J(this.bbmax, -9223372036854775808);
this.startedRasterization=false;
this.rasterBegin=0;
}, 1);

Clazz.newMeth(C$, 'add$net_imglib2_Localizable', function (pos) {
++this.size;
pos.localize$JA(this.curr);
if (this.startedRasterization) {
for (var d=this.n - 1; d >= 0; --d) {
if (d == 0) {
if (this.curr[0] != this.prev[0] + 1) {
p$1.endRaster$I.apply(this, [0]);
break;
}} else if (this.curr[d] != this.prev[d]) {
p$1.endRaster$I.apply(this, [d]);
break;
}}
for (var d=0; d < this.n; d++) {
if (this.curr[d] < this.bbmin[d]) this.bbmin[d]=this.curr[d];
 else if (this.curr[d] > this.bbmax[d]) this.bbmax[d]=this.curr[d];
}
} else {
this.itcode.add$I((this.itcodeOffsetX|0));
for (var d=1; d < this.n; ++d) this.itcode.add$I((this.curr[d]|0));

this.rasterBegin=this.curr[0];
System.arraycopy$O$I$O$I$I(this.curr, 0, this.bbmin, 0, this.n);
System.arraycopy$O$I$O$I$I(this.curr, 0, this.bbmax, 0, this.n);
this.startedRasterization=true;
}var tmp=this.prev;
this.prev=this.curr;
this.curr=tmp;
});

Clazz.newMeth(C$, 'endRaster$I', function (badDimension) {
this.itcode.add$I(((this.rasterBegin - this.itcodeOffsetX)|0));
this.itcode.add$I(((this.prev[0] - this.itcodeOffsetX)|0));
if (badDimension > 0) {
this.itcode.add$I(-badDimension);
for (var d=1; d <= badDimension; ++d) this.itcode.add$I((this.curr[d]|0));

}this.rasterBegin=this.curr[0];
}, p$1);

Clazz.newMeth(C$, 'finish$', function () {
if (this.startedRasterization) {
this.itcode.add$I(((this.rasterBegin - this.itcodeOffsetX)|0));
this.itcode.add$I(((this.prev[0] - this.itcodeOffsetX)|0));
}this.itcode.trimToSize$();
this.prev=null;
this.curr=null;
});

Clazz.newMeth(C$, 'getItcode$', function () {
return this.itcode;
});

Clazz.newMeth(C$, 'getSize$', function () {
return this.size;
});

Clazz.newMeth(C$, 'getBoundingBoxMin$', function () {
return this.bbmin;
});

Clazz.newMeth(C$, 'getBoundingBoxMax$', function () {
return this.bbmax;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
