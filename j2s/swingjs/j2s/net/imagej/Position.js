(function(){var P$=Clazz.newPackage("net.imagej"),p$1={},I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Position", null, null, ['net.imglib2.Localizable', 'net.imglib2.Positionable', 'net.imglib2.Iterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isInvalid'],'O',['parentSpace','net.imagej.Extents','position','long[]']]]

Clazz.newMeth(C$, 'c$$net_imagej_Extents', function (parentSpace) {
;C$.$init$.apply(this);
this.parentSpace=parentSpace;
this.position=Clazz.array(Long.TYPE, [parentSpace.numDimensions$()]);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_Position', function (pos) {
;C$.$init$.apply(this);
this.parentSpace=pos.getExtents$();
this.position=Clazz.array(Long.TYPE, [pos.numDimensions$()]);
for (var i=0; i < this.position.length; i++) {
this.position[i]=pos.position[i];
}
}, 1);

Clazz.newMeth(C$, 'getExtents$', function () {
return this.parentSpace;
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.parentSpace.numDimensions$();
});

Clazz.newMeth(C$, 'dimension$I', function (i) {
return this.parentSpace.dimension$I(i);
});

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.isInvalid && this.position.length > 0 ) return true;
for (var i=0; i < this.position.length; i++) if (this.position[i] < this.parentSpace.max$I(i)) return true;

return false;
});

Clazz.newMeth(C$, 'hasPrev$', function () {
if (this.isInvalid && this.position.length > 0 ) return true;
for (var i=0; i < this.position.length; i++) if (this.position[i] > this.parentSpace.min$I(i)) return true;

return false;
});

Clazz.newMeth(C$, 'reset$', function () {
this.isInvalid=true;
for (var i=0; i < this.position.length; i++) this.position[i]=-9223372036854775808;

});

Clazz.newMeth(C$, 'first$', function () {
for (var i=0; i < this.position.length; i++) this.position[i]=this.parentSpace.min$I(i);

this.isInvalid=false;
});

Clazz.newMeth(C$, 'last$', function () {
for (var i=0; i < this.position.length; i++) this.position[i]=this.parentSpace.max$I(i);

this.isInvalid=false;
});

Clazz.newMeth(C$, 'fwd$', function () {
if (this.isInvalid) {
this.first$();
return;
}for (var i=0; i < this.position.length; i++) {
this.position[i]++;
if (this.position[i] <= this.parentSpace.max$I(i)) return;
this.position[i]=this.parentSpace.min$I(i);
}
this.last$();
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["cannot move last position forward"]);
});

Clazz.newMeth(C$, 'bck$', function () {
if (this.isInvalid) {
this.last$();
return;
}for (var i=0; i < this.position.length; i++) {
this.position[i]--;
if (this.position[i] >= this.parentSpace.min$I(i)) return;
this.position[i]=this.parentSpace.max$I(i);
}
this.first$();
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["cannot move first position backward"]);
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
if (this.isInvalid) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot move position : it is uninitialized"]);
}var newValue=this.position[d] + 1;
if (newValue > this.parentSpace.max$I(d)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot move specified dimension forward - it would take position outside defined extents"]);
}this.position[d]++;
});

Clazz.newMeth(C$, 'bck$I', function (d) {
if (this.isInvalid) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot move position : it is uninitialized"]);
}var newValue=this.position[d] - 1;
if (newValue < this.parentSpace.min$I(d)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot move specified dimension backward - it would take position outside defined extents"]);
}this.position[d]--;
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
var stepsLeft=steps;
if (this.isInvalid) {
this.first$();
stepsLeft--;
}var currPos=this.getIndex$();
var newPos=currPos + stepsLeft;
this.setIndex$J(newPos);
});

Clazz.newMeth(C$, 'jumpBck$J', function (steps) {
var stepsLeft=steps;
if (this.isInvalid) {
this.last$();
stepsLeft--;
}var currPos=this.getIndex$();
var newPos=currPos - stepsLeft;
this.setIndex$J(newPos);
});

Clazz.newMeth(C$, 'move$J$I', function (delta, dim) {
if (this.isInvalid) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot move position : it is uninitialized"]);
}var newValue=this.position[dim] + delta;
if (newValue < this.parentSpace.min$I(dim) || newValue > this.parentSpace.max$I(dim) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["specified move would take position outside defined extents"]);
}this.position[dim]=newValue;
});

Clazz.newMeth(C$, 'move$JA', function (deltas) {
for (var i=0; i < this.position.length; i++) this.move$J$I(deltas[i], i);

});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var i=0; i < distance.length; i++) this.move$J$I(distance[i], i);

});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var i=0; i < this.position.length; i++) this.move$J$I(localizable.getLongPosition$I(i), i);

});

Clazz.newMeth(C$, 'setPosition$J$I', function (value, dim) {
var min=this.parentSpace.min$I(dim);
if (value < min) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid position for dimension #" + dim + ": " + value + " < " + min ]);
}var max=this.parentSpace.max$I(dim);
if (value > max) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid position for dimension #" + dim + ": " + value + " > " + max ]);
}this.position[dim]=value;
if (this.isInvalid) this.isInvalid=p$1.isInvalid.apply(this, []);
});

Clazz.newMeth(C$, 'setPosition$JA', function (value) {
for (var i=0; i < this.position.length; i++) this.setPosition$J$I(value[i], i);

});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
for (var i=0; i < position.length; i++) this.setPosition$J$I(position[i], i);

});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.setPosition$J$I(position, d);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var i=0; i < this.position.length; i++) this.setPosition$J$I(localizable.getLongPosition$I(i), i);

});

Clazz.newMeth(C$, 'setIndex$J', function (index) {
if (index < 0 || index >= this.parentSpace.numElements$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["specified index value is outside bounds of extents"]);
}var offset=1;
var r=index;
for (var i=0; i < this.position.length; i++) {
var offset1=offset * this.dimension$I(i);
var q=i < this.position.length - 1 ? r % offset1 : r;
this.position[i]=((q/offset|0)) + this.parentSpace.min$I(i);
r-=q;
offset=offset1;
}
this.isInvalid=false;
});

Clazz.newMeth(C$, 'getIndex$', function () {
if (this.isInvalid && this.position.length > 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot get index value : position is uninitialized"]);
}var offset=1;
var index1D=0;
for (var i=0; i < this.position.length; i++) {
index1D+=offset * (this.position[i] - this.parentSpace.min$I(i));
offset*=this.dimension$I(i);
}
return index1D;
});

Clazz.newMeth(C$, 'localize$IA', function (pos) {
if (this.isInvalid && this.position.length > 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot localize : position is uninitialized"]);
}for (var i=0; i < this.position.length; i++) pos[i]=(this.position[i]|0);

});

Clazz.newMeth(C$, 'localize$JA', function (pos) {
if (this.isInvalid && this.position.length > 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot localize : position is uninitialized"]);
}for (var i=0; i < this.position.length; i++) pos[i]=this.position[i];

});

Clazz.newMeth(C$, 'localize$FA', function (pos) {
if (this.isInvalid && this.position.length > 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot localize : position is uninitialized"]);
}for (var i=0; i < this.position.length; i++) pos[i]=this.position[i];

});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
if (this.isInvalid && this.position.length > 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot localize : position is uninitialized"]);
}for (var i=0; i < this.position.length; i++) pos[i]=this.position[i];

});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
if (this.isInvalid) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot get position : position is uninitialized"]);
}return (this.position[d]|0);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
if (this.isInvalid) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot get position : position is uninitialized"]);
}return this.position[d];
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
if (this.isInvalid) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot get position : position is uninitialized"]);
}return this.position[d];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
if (this.isInvalid) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot get position : position is uninitialized"]);
}return this.position[d];
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("extents=" + this.parentSpace);
sb.append$S(", position={");
for (var p, $p = 0, $$p = this.position; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
sb.append$S(" " + p);
}
sb.append$S(" }, valid=" + !this.isInvalid);
return sb.toString();
});

Clazz.newMeth(C$, 'isInvalid', function () {
for (var i=0; i < this.position.length; i++) if (this.position[i] < this.parentSpace.min$I(i) || this.position[i] > this.parentSpace.max$I(i) ) {
return true;
}
return false;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
