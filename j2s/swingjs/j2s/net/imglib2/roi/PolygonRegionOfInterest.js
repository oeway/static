(function(){var P$=Clazz.newPackage("net.imglib2.roi"),p$1={},I$=[[0,'java.util.ArrayList','StringBuffer','net.imglib2.RealPoint','java.util.TreeSet',['net.imglib2.roi.PolygonRegionOfInterest','.Stripe'],'java.util.Arrays','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PolygonRegionOfInterest", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.roi.AbstractIterableRegionOfInterest');
C$.$classes$=[['Stripe',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.points=Clazz.new_(1,{E:"net.imglib2.RealPoint"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['points','java.util.ArrayList','+stripes']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[2]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getVertexCount$', function () {
return this.points.size$();
});

Clazz.newMeth(C$, 'getVertex$I', function (index) {
return this.points.get$I(index);
});

Clazz.newMeth(C$, 'addVertex$I$net_imglib2_RealLocalizable', function (index, p) {
this.points.add$I$TE(index, Clazz.new_($I$(3,1).c$$net_imglib2_RealLocalizable,[p]));
this.invalidateCachedState$();
this.stripes=null;
});

Clazz.newMeth(C$, 'removeVertex$I', function (index) {
this.points.remove$I(index);
this.invalidateCachedState$();
this.stripes=null;
});

Clazz.newMeth(C$, 'setVertexPosition$I$DA', function (index, position) {
this.points.get$I(index).setPosition$DA(position);
this.invalidateCachedState$();
this.stripes=null;
});

Clazz.newMeth(C$, 'setVertexPosition$I$FA', function (index, position) {
this.points.get$I(index).setPosition$FA(position);
this.invalidateCachedState$();
this.stripes=null;
});

Clazz.newMeth(C$, 'setVertexPosition$I$net_imglib2_RealLocalizable', function (index, localizable) {
this.points.get$I(index).setPosition$net_imglib2_RealLocalizable(localizable);
this.invalidateCachedState$();
this.stripes=null;
});

Clazz.newMeth(C$, 'lt$D$D', function (a, b) {
return a < b ;
}, p$1);

Clazz.newMeth(C$, 'gt$D$D', function (a, b) {
return a > b ;
}, p$1);

Clazz.newMeth(C$, 'le$D$D', function (a, b) {
return a <= b ;
}, p$1);

Clazz.newMeth(C$, 'ge$D$D', function (a, b) {
return a >= b ;
}, p$1);

Clazz.newMeth(C$, 'eq$D$D', function (a, b) {
return a == b ;
}, p$1);

Clazz.newMeth(C$, 'validate$', function () {
if (this.stripes == null ) {
var y=Clazz.new_(1,{E:"Double"},$I$(4,1));
for (var p, $p = this.points.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
y.add$TE(new Double(p.getDoublePosition$I(1)));
}
var dy=Clazz.array(Double, [y.size$()]);
y.toArray$TTA(dy);
this.stripes=Clazz.new_(1,{E:"net.imglib2.roi.PolygonRegionOfInterest.Stripe"},$I$(1,1));
for (var i=0; i < dy.length - 1; i++) {
this.stripes.add$TE(Clazz.new_($I$(5,1).c$$D$D,[(dy[i]).valueOf(), (dy[i + 1]).valueOf()]));
}
for (var i=0; i < this.points.size$(); i++) {
var p0=this.getEdgeStart$I(i);
var p1=this.getEdgeEnd$I(i);
var x0=p0.getDoublePosition$I(0);
var y0=p0.getDoublePosition$I(1);
var x1=p1.getDoublePosition$I(0);
var y1=p1.getDoublePosition$I(1);
if (y0 > y1 ) {
var temp=x0;
temp=x0;
x0=x1;
x1=temp;
temp=y0;
y0=y1;
y1=temp;
}var index=this.findStripeIndex$D(y0);
if (y0 == y1 ) {
continue;
}do {
var stripe=this.stripes.get$I(index);
var xBottom=x1;
if (y1 != stripe.yMax ) xBottom=x0 + (stripe.yMax - y0) * (x1 - x0) / (y1 - y0);
if (stripe.xTop.size$() == 0) {
stripe.xTop.add$TE(new Double(x0));
stripe.xBottom.add$TE(new Double(xBottom));
} else {
var j=0;
var stripe_xTop=4.9E-324;
for (j=0; j < stripe.xTop.size$(); j++) {
stripe_xTop=(stripe.xTop.get$I(j)).valueOf();
if (p$1.lt$D$D.apply(this, [stripe_xTop, x0])) continue;
if (p$1.gt$D$D.apply(this, [stripe_xTop, x0]) || (p$1.lt$D$D.apply(this, [xBottom, (stripe.xBottom.get$I(j)).valueOf()])) ) break;
}
if (j == stripe.xTop.size$()) {
if ((j > 0) && (p$1.ge$D$D.apply(this, [xBottom, (stripe.xBottom.get$I(j - 1)).valueOf()])) ) {
stripe.xTop.add$TE(new Double(x0));
stripe.xBottom.add$TE(new Double(xBottom));
} else {
xBottom=p$1.splitStripe$I$I$D$D.apply(this, [index, j - 1, x0, xBottom]);
}} else if (x0 == stripe_xTop ) {
if ((j < stripe.xTop.size$() - 1) && p$1.gt$D$D.apply(this, [xBottom, (stripe.xBottom.get$I(j + 1)).valueOf()]) ) {
xBottom=p$1.splitStripe$I$I$D$D.apply(this, [index, j + 1, x0, xBottom]);
} else if ((j > 0) && p$1.lt$D$D.apply(this, [xBottom, (stripe.xBottom.get$I(j - 1)).valueOf()]) ) {
xBottom=p$1.splitStripe$I$I$D$D.apply(this, [index, j - 1, x0, xBottom]);
} else {
if (p$1.gt$D$D.apply(this, [xBottom, (stripe.xBottom.get$I(j)).valueOf()])) {
j++;
}stripe.xTop.add$I$TE(j, new Double(x0));
stripe.xBottom.add$I$TE(j, new Double(xBottom));
}} else if (p$1.gt$D$D.apply(this, [xBottom, (stripe.xBottom.get$I(j)).valueOf()])) {
xBottom=p$1.splitStripe$I$I$D$D.apply(this, [index, j, x0, xBottom]);
} else if ((j > 0) && p$1.lt$D$D.apply(this, [xBottom, (stripe.xBottom.get$I(j - 1)).valueOf()]) ) {
xBottom=p$1.splitStripe$I$I$D$D.apply(this, [index, j - 1, x0, xBottom]);
} else {
stripe.xTop.add$I$TE(j, new Double(x0));
stripe.xBottom.add$I$TE(j, new Double(xBottom));
}}y0=stripe.yMax;
x0=xBottom;
index++;
} while ((index < this.stripes.size$()) && p$1.gt$D$D.apply(this, [y1, this.stripes.get$I(index).yMin]) );
}
}});

Clazz.newMeth(C$, 'splitStripe$I$I$D$D', function (stripeIndex, xIndex, xTop, xBottom) {
var stripe=this.stripes.get$I(stripeIndex);
var stripe_xTop=(stripe.xTop.get$I(xIndex)).valueOf();
var stripe_xBottom=(stripe.xBottom.get$I(xIndex)).valueOf();
var yTop=stripe.yMin;
var yBottom=stripe.yMax;
var dTop=Math.abs(xTop - stripe_xTop);
var dBottom=Math.abs(xBottom - stripe_xBottom);
var yCross=((yBottom * dTop / dBottom) + yTop) / (1 + dTop / dBottom);
stripe.yMax=yCross;
var newStripe=Clazz.new_($I$(5,1).c$$D$D,[yCross, yBottom]);
this.stripes.add$I$TE(stripeIndex + 1, newStripe);
for (var i=0; i < stripe.xTop.size$(); i++) {
var xT=(stripe.xTop.get$I(i)).valueOf();
var xB=(stripe.xBottom.get$I(i)).valueOf();
var xM=xT + (yCross - yTop) * (xB - xT) / (yBottom - yTop);
stripe.xBottom.set$I$TE(i, new Double(xM));
newStripe.xTop.add$TE(new Double(xM));
newStripe.xBottom.add$TE(new Double(xB));
}
xBottom=(stripe.xBottom.get$I(xIndex)).valueOf();
if (xTop > (stripe.xTop.get$I(xIndex)).valueOf() ) {
xIndex++;
}stripe.xTop.add$I$TE(xIndex, new Double(xTop));
stripe.xBottom.add$I$TE(xIndex, new Double(xBottom));
return xBottom;
}, p$1);

Clazz.newMeth(C$, 'findStripeIndex$D', function (y) {
if ((this.stripes.size$() == 0) || (this.stripes.get$I(0).yMin > y ) ) return -1;
var minimum=0;
var maximum=this.stripes.size$() - 1;
while (minimum < maximum){
var test_index=((minimum + maximum)/2|0);
var yMin=this.stripes.get$I(test_index).yMin;
if (y == yMin ) {
return test_index;
}if (y > yMin ) {
minimum=test_index + 1;
} else {
maximum=test_index;
}}
if (this.stripes.get$I(minimum).yMin <= y ) return minimum;
return minimum - 1;
});

Clazz.newMeth(C$, 'getRealExtrema$DA$DA', function (minima, maxima) {
$I$(6).fill$DA$D(minima, 1.7976931348623157E308);
$I$(6).fill$DA$D(maxima, -1.7976931348623157E308);
for (var i=0; i < this.points.size$(); i++) {
var p=this.points.get$I(i);
for (var j=0; j < 2; j++) {
var v=p.getDoublePosition$I(j);
if (v < minima[j] ) minima[j]=v;
if (v > maxima[j] ) maxima[j]=v;
}
}
});

Clazz.newMeth(C$, 'getExtrema$JA$JA', function (minima, maxima) {
for (var i=0; i < 2; i++) {
minima[i]=((this.realMin$I(i))|0);
maxima[i]=((this.realMax$I(i))|0);
}
});

Clazz.newMeth(C$, 'ceil$D', function (x) {
return (Math.ceil(x)|0);
}, 1);

Clazz.newMeth(C$, 'floor$D', function (x) {
return (Math.floor(x)|0);
}, 1);

Clazz.newMeth(C$, 'nextRaster$JA$JA', function (position, end) {
this.validate$();
if (this.stripes.size$() == 0) return false;
var x=position[0];
var y=position[1];
var stripe=null;
var index=0;
while (true){
if ((stripe == null ) || stripe.yMax < y  ) {
index=this.findStripeIndex$D(y);
if (index == -1) {
stripe=this.stripes.get$I(0);
index=0;
x=-9223372036854775808;
y=C$.ceil$D(stripe.yMin);
continue;
}stripe=this.stripes.get$I(index);
}if (stripe.yMax <= y ) {
if (this.stripes.size$() == index + 1) {
if (stripe.yMax == y ) {
var i;
for (i=0; i < stripe.xBottom.size$() && x > (stripe.xBottom.get$I(i + 1)).valueOf()  ; i+=2) ;
for (; i < stripe.xBottom.size$(); i+=2) {
var xLeft=C$.ceil$D((stripe.xBottom.get$I(i)).valueOf());
var xRight=C$.floor$D((stripe.xBottom.get$I(i + 1)).valueOf()) + 1;
if (xLeft < xRight) {
position[0]=xLeft;
end[0]=xRight;
position[1]=end[1]=y;
return true;
}}
}return false;
}index++;
stripe=this.stripes.get$I(index);
y=C$.ceil$D(stripe.yMin);
x=-9223372036854775808;
continue;
}if ((stripe.yMin == y ) && (index > 0) && (this.stripes.get$I(index - 1).yMax == y )  ) {
var prevX=this.stripes.get$I(index - 1).xBottom;
var nextX=stripe.xTop;
var iPrev;
var iNext;
for (iPrev=0; iPrev < prevX.size$() && ((prevX.get$I(iPrev)).valueOf() < x  || C$.ceil$D((prevX.get$I(iPrev)).valueOf()) == C$.floor$D((prevX.get$I(iPrev + 1)).valueOf()) + 1 ) ; iPrev+=2) ;
for (iNext=0; iNext < nextX.size$() && ((nextX.get$I(iNext)).valueOf() < x  || C$.ceil$D((nextX.get$I(iNext)).valueOf()) == C$.floor$D((nextX.get$I(iNext + 1)).valueOf()) + 1 ) ; iNext+=2) ;
if (iPrev == prevX.size$() && iNext == nextX.size$() ) {
y++;
x=-9223372036854775808;
continue;
}var xLeft=9223372036854775807;
var xRight=-9223372036854775808;
if (iPrev < prevX.size$() && iNext == nextX.size$() ) {
xLeft=C$.ceil$D((prevX.get$I(iPrev)).valueOf());
xRight=C$.floor$D((prevX.get$I(iPrev + 1)).valueOf()) + 1;
} else if (iPrev == prevX.size$() && iNext < nextX.size$() ) {
xLeft=C$.ceil$D((nextX.get$I(iNext)).valueOf());
xRight=C$.floor$D((nextX.get$I(iNext + 1)).valueOf()) + 1;
} else {
var xLeftPrev=C$.ceil$D((prevX.get$I(iPrev)).valueOf());
var xRightPrev=C$.floor$D((prevX.get$I(iPrev + 1)).valueOf()) + 1;
var xLeftNext=C$.ceil$D((nextX.get$I(iNext)).valueOf());
var xRightNext=C$.floor$D((nextX.get$I(iNext + 1)).valueOf()) + 1;
var leading;
var trailing;
var iLeading;
var iTrailing;
if (xLeftNext < xLeftPrev) {
xLeft=xLeftNext;
xRight=xRightNext;
iLeading=iNext;
iTrailing=iPrev;
leading=nextX;
trailing=prevX;
} else {
xLeft=xLeftPrev;
xRight=xRightPrev;
iLeading=iPrev;
iTrailing=iNext;
leading=prevX;
trailing=nextX;
}while (iTrailing < trailing.size$()){
var xTrailingLeft=C$.ceil$D((trailing.get$I(iTrailing)).valueOf());
if (xTrailingLeft > xRight) break;
xRight=Math.max(xRight, C$.floor$D((trailing.get$I(iTrailing + 1)).valueOf()) + 1);
{
var temp=iLeading;
iLeading=iTrailing;
iTrailing=temp + 2;
}{
var temp=leading;
leading=trailing;
trailing=temp;
}}
}position[0]=xLeft;
end[0]=xRight;
position[1]=end[1]=y;
return true;
}var xIndex;
var inside=false;
var xInterpolatedLast=-9223372036854775808;
for (xIndex=0; xIndex < stripe.xTop.size$(); xIndex++) {
var xTop=(stripe.xTop.get$I(xIndex)).valueOf();
var xBottom=(stripe.xBottom.get$I(xIndex)).valueOf();
var xInterpolated=xTop + (xBottom - xTop) * (y - stripe.yMin) / (stripe.yMax - stripe.yMin);
if (!inside) {
xInterpolatedLast=C$.ceil$D(xInterpolated);
inside=true;
} else {
xInterpolated=C$.floor$D(xInterpolated) + 1;
if ((x < xInterpolated ) && (xInterpolated > xInterpolatedLast ) ) {
position[0]=xInterpolatedLast;
position[1]=y;
end[0]=(xInterpolated|0);
end[1]=position[1];
return true;
}inside=false;
}}
y+=1;
x=-9223372036854775808;
}
});

Clazz.newMeth(C$, 'contains$DA', function (position) {
this.validate$();
var index=this.findStripeIndex$D(position[1]);
if (index == -1) return false;
var stripe=this.stripes.get$I(index);
var y0=stripe.yMin;
var y1=stripe.yMax;
if (y1 < position[1] ) return false;
var is_inside=false;
for (var i=0; i < stripe.xTop.size$(); i++) {
var x0=(stripe.xTop.get$I(i)).valueOf();
var x1=(stripe.xBottom.get$I(i)).valueOf();
var x=x0 + (position[1] - y0) * (x1 - x0) / (y1 - y0);
if (x == position[0] ) return true;
if (x > position[0] ) break;
is_inside=!is_inside;
}
return is_inside;
});

Clazz.newMeth(C$, 'getEdgeStart$I', function (start) {
if (start < 0) {
start=(start % this.points.size$()) + this.points.size$();
} else if (start >= this.points.size$()) {
start=start % this.points.size$();
}return this.points.get$I(start);
});

Clazz.newMeth(C$, 'getEdgeEnd$I', function (start) {
return this.getEdgeStart$I(start + 1);
});

Clazz.newMeth(C$, 'isHorizontal$I', function (index) {
return this.getEdgeStart$I(index).getDoublePosition$I(1) == this.getEdgeEnd$I(index).getDoublePosition$I(1) ;
});

Clazz.newMeth(C$, 'interpolateEdgeXAtY$I$D', function (start, y) {
var p_start=this.getEdgeStart$I(start);
var p_end=this.getEdgeEnd$I(start);
var x_start=p_start.getDoublePosition$I(0);
var y_start=p_start.getDoublePosition$I(1);
var x_end=p_end.getDoublePosition$I(0);
var y_end=p_end.getDoublePosition$I(1);
return x_start + (y - y_start) * (x_end - x_start) / (y_end - y_start);
});

Clazz.newMeth(C$, 'getEdges$DA$DA', function (position, x_intercepts) {
if (x_intercepts == null ) {
x_intercepts=Clazz.array(Double.TYPE, [2]);
}x_intercepts[0]=-1.7976931348623157E308;
x_intercepts[1]=1.7976931348623157E308;
var count_to_left=0;
for (var i=0; i < this.getVertexCount$(); i++) {
var y_start=this.getEdgeStart$I(i).getDoublePosition$I(1);
var y_end=this.getEdgeEnd$I(i).getDoublePosition$I(1);
var x_start=this.getEdgeStart$I(i).getDoublePosition$I(0);
var x_end=this.getEdgeEnd$I(i).getDoublePosition$I(0);
if (y_start == y_end ) {
if (y_start == position[1] ) {
if ((x_start <= position[0] ) && (x_end >= position[0] ) ) {
x_intercepts[0]=x_start;
x_intercepts[1]=x_end;
return true;
}}continue;
} else if (Math.signum(y_start - position[1]) * Math.signum(y_end - position[1]) > 0 ) {
continue;
}var x_intercept=this.interpolateEdgeXAtY$I$D(i, position[1]);
if (x_intercept <= position[0] ) {
count_to_left++;
if (x_intercept > x_intercepts[0] ) {
x_intercepts[0]=x_intercept;
}} else if (x_intercept < x_intercepts[1] ) {
x_intercepts[1]=x_intercept;
}}
return (count_to_left % 2) == 1;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(7,1));
var c="(";
for (var p, $p = this.points.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
sb.append$C(c);
sb.append$S(p.toString());
c=",";
}
sb.append$S(")");
return sb.toString();
});

Clazz.newMeth(C$, 'move$D$I', function (displacement, d) {
for (var p, $p = this.points.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
var currPos=p.getDoublePosition$I(d);
p.setPosition$D$I(currPos + displacement, d);
}
this.invalidateCachedState$();
this.stripes=null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PolygonRegionOfInterest, "Stripe", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xTop=Clazz.new_(1,{E:"Double"},$I$(1,1));
this.xBottom=Clazz.new_(1,{E:"Double"},$I$(1,1));
}, 1);

C$.$fields$=[['D',['yMin','yMax'],'O',['xTop','java.util.ArrayList','+xBottom']]]

Clazz.newMeth(C$, 'c$$D$D', function (yMin, yMax) {
;C$.$init$.apply(this);
this.yMin=yMin;
this.yMax=yMax;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(2,1).c$$S,[String.format$S$OA("\ny: %.2f<->%.2f", [new Double(this.yMin), new Double(this.yMax)])]);
for (var i=0; i < this.xTop.size$(); i++) {
sb.append$S(String.format$S$OA("\n\t%d: %.2f<->%.2f", [new Integer(i), this.xTop.get$I(i), this.xBottom.get$I(i)]));
}
return sb.toString();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
