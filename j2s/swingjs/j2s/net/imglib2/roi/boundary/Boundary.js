(function(){var P$=Clazz.newPackage("net.imglib2.roi.boundary"),I$=[[0,'net.imglib2.roi.Regions',['net.imglib2.roi.boundary.Boundary','.StructuringElement'],'net.imglib2.roi.boundary.BoundaryRandomAccess4','net.imglib2.roi.boundary.BoundaryRandomAccess8','gnu.trove.list.array.TIntArrayList',['net.imglib2.roi.boundary.Boundary','.BoundaryConstructor'],['net.imglib2.roi.boundary.Boundary','.BoundaryCursor']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Boundary", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractWrappedInterval', 'net.imglib2.roi.IterableRegion');
C$.$classes$=[['StructuringElement',25],['BoundaryCursor',16],['BoundaryConstructor',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','size'],'O',['structuringElement','net.imglib2.roi.boundary.Boundary.StructuringElement','coords','gnu.trove.list.array.TIntArrayList']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval', function (region) {
C$.c$$net_imglib2_RandomAccessibleInterval$net_imglib2_roi_boundary_Boundary_StructuringElement.apply(this, [region, $I$(2).FOUR_CONNECTED]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval$net_imglib2_roi_boundary_Boundary_StructuringElement', function (region, structuringElement) {
;C$.superclazz.c$$TI.apply(this,[region]);C$.$init$.apply(this);
this.structuringElement=structuringElement;
this.n=region.numDimensions$();
this.coords=Clazz.new_($I$(5,1));
var c=Clazz.new_(1,{T:"Object"},$I$(6,1).c$$net_imglib2_RandomAccessibleInterval$net_imglib2_roi_boundary_Boundary_StructuringElement,[region, structuringElement]);
while (true){
c.fwd$();
if (c.isValid$()) {
for (var d=0; d < this.n; ++d) this.coords.add$I(c.getIntPosition$I(d));

} else break;
}
this.size=(this.coords.size$()/this.n|0);
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this;
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_($I$(7,1), [this, null]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.cursor$().next$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return this.structuringElement === $I$(2).FOUR_CONNECTED  ? Clazz.new_(1,{T:"Object"},$I$(3,1).c$$net_imglib2_RandomAccessibleInterval,[this.sourceInterval]) : Clazz.new_(1,{T:"Object"},$I$(4,1).c$$net_imglib2_RandomAccessibleInterval,[this.sourceInterval]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.Boundary, "StructuringElement", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "FOUR_CONNECTED", 0, []);
Clazz.newEnumConst($vals, C$.c$, "EIGHT_CONNECTED", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Boundary, "BoundaryCursor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.Point', 'net.imglib2.Cursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.size=this.this$0.coords.size$();
}, 1);

C$.$fields$=[['I',['i','size']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[this.b$['net.imglib2.roi.boundary.Boundary'].numDimensions$.apply(this.b$['net.imglib2.roi.boundary.Boundary'], [])]);C$.$init$.apply(this);
this.i=0;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_boundary_Boundary_BoundaryCursor', function (c) {
Clazz.super_(C$, this);
this.i=c.i;
this.setPosition$net_imglib2_Localizable(c);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return null;
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return null;
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i < this.size;
});

Clazz.newMeth(C$, 'fwd$', function () {
for (var d=0; d < this.n; ++d, ++this.i) this.position[d]=this.this$0.coords.getQuick$I(this.i);

});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.i+=this.n * (steps - 1);
this.fwd$();
});

Clazz.newMeth(C$, 'reset$', function () {
this.i=0;
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_roi_boundary_Boundary_BoundaryCursor, [this, null, this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Boundary, "BoundaryConstructor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'net.imglib2.Localizable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['valid'],'O',['c','net.imglib2.Cursor','a','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval$net_imglib2_roi_boundary_Boundary_StructuringElement', function (region, structuringElement) {
;C$.$init$.apply(this);
this.c=$I$(1).iterable$net_imglib2_RandomAccessibleInterval(region).localizingCursor$();
this.a=structuringElement === $I$(2).FOUR_CONNECTED  ? Clazz.new_(1,{T:"Object"},$I$(3,1).c$$net_imglib2_RandomAccessibleInterval,[region]) : Clazz.new_(1,{T:"Object"},$I$(4,1).c$$net_imglib2_RandomAccessibleInterval,[region]);
}, 1);

Clazz.newMeth(C$, 'fwd$', function () {
while (this.c.hasNext$()){
this.c.fwd$();
this.a.setPosition$net_imglib2_Localizable(this.c);
if (this.a.get$().get$()) {
this.valid=true;
return;
}}
this.valid=false;
});

Clazz.newMeth(C$, 'isValid$', function () {
return this.valid;
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
this.c.localize$FA(position);
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
this.c.localize$DA(position);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.c.getFloatPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.c.getDoublePosition$I(d);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.c.numDimensions$();
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
this.c.localize$IA(position);
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
this.c.localize$JA(position);
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return this.c.getIntPosition$I(d);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.c.getLongPosition$I(d);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
