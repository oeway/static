(function(){var P$=Clazz.newPackage("net.imagej"),p$1={},I$=[[0,'java.util.Arrays','net.imagej.axis.Axes',['net.imagej.FloodFiller','.StackOfLongs'],'java.util.LinkedList','net.imagej.ChannelCollection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FloodFiller", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StackOfLongs',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['channelAxis','uAxis','vAxis'],'O',['tool','net.imagej.DrawingTool','uStack','net.imagej.FloodFiller.StackOfLongs','+vStack']]]

Clazz.newMeth(C$, 'c$$net_imagej_DrawingTool', function (tool) {
;C$.$init$.apply(this);
this.tool=tool;
this.channelAxis=tool.getDataset$().dimensionIndex$net_imagej_axis_AxisType($I$(2).CHANNEL);
this.uAxis=-1;
this.vAxis=-1;
this.uStack=Clazz.new_($I$(3,1), [this, null]);
this.vStack=Clazz.new_($I$(3,1), [this, null]);
}, 1);

Clazz.newMeth(C$, 'fill4$J$J$JA', function (u0, v0, position) {
var ds=this.tool.getDataset$();
var accessor=ds.getImgPlus$().randomAccess$();
accessor.setPosition$JA(position);
this.uAxis=this.tool.getUAxis$();
this.vAxis=this.tool.getVAxis$();
var fillValues=this.tool.getChannels$();
if (p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u0, v0, fillValues])) return false;
var origValues=p$1.getValues$net_imglib2_RandomAccess$J$J.apply(this, [accessor, u0, v0]);
var maxU=ds.dimension$I(this.uAxis) - 1;
var maxV=ds.dimension$I(this.vAxis) - 1;
p$1.clearUV.apply(this, []);
p$1.pushUV$J$J.apply(this, [u0, v0]);
while (!this.uStack.isEmpty$()){
var u=p$1.popU.apply(this, []);
var v=p$1.popV.apply(this, []);
if (!p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u, v, origValues])) continue;
var u1=u;
var u2=u;
while (u1 >= 0 && p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u1, v, origValues]) )u1--;

u1++;
while (u2 <= maxU && p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u2, v, origValues]) )u2++;

u2--;
this.tool.drawLine$J$J$J$J(u1, v, u2, v);
var inScanLine=false;
for (var i=u1; i <= u2; i++) {
if (!inScanLine && v > 0  && p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, i, v - 1, origValues]) ) {
p$1.pushUV$J$J.apply(this, [i, v - 1]);
inScanLine=true;
} else if (inScanLine && v > 0  && !p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, i, v - 1, origValues]) ) inScanLine=false;
}
inScanLine=false;
for (var i=u1; i <= u2; i++) {
if (!inScanLine && v < maxV  && p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, i, v + 1, origValues]) ) {
p$1.pushUV$J$J.apply(this, [i, v + 1]);
inScanLine=true;
} else if (inScanLine && v < maxV  && !p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, i, v + 1, origValues]) ) inScanLine=false;
}
}
return true;
});

Clazz.newMeth(C$, 'fill8$J$J$JA', function (u0, v0, position) {
var ds=this.tool.getDataset$();
var accessor=ds.getImgPlus$().randomAccess$();
accessor.setPosition$JA(position);
this.uAxis=this.tool.getUAxis$();
this.vAxis=this.tool.getVAxis$();
var fillValues=this.tool.getChannels$();
if (p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u0, v0, fillValues])) return false;
var origValues=p$1.getValues$net_imglib2_RandomAccess$J$J.apply(this, [accessor, u0, v0]);
var maxU=ds.dimension$I(this.uAxis) - 1;
var maxV=ds.dimension$I(this.vAxis) - 1;
p$1.clearUV.apply(this, []);
p$1.pushUV$J$J.apply(this, [u0, v0]);
while (!this.uStack.isEmpty$()){
var u=p$1.popU.apply(this, []);
var v=p$1.popV.apply(this, []);
var u1=u;
var u2=u;
if (p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u, v, origValues])) {
while (u1 >= 0 && p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u1, v, origValues]) )u1--;

u1++;
while (u2 <= maxU && p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u2, v, origValues]) )u2++;

u2--;
this.tool.drawLine$J$J$J$J(u1, v, u2, v);
}if (v > 0) {
if (u1 > 0) {
if (p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u1 - 1, v - 1, origValues])) {
p$1.pushUV$J$J.apply(this, [u1 - 1, v - 1]);
}}if (u2 < maxU) {
if (p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u2 + 1, v - 1, origValues])) {
p$1.pushUV$J$J.apply(this, [u2 + 1, v - 1]);
}}}if (v < maxV) {
if (u1 > 0) {
if (p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u1 - 1, v + 1, origValues])) {
p$1.pushUV$J$J.apply(this, [u1 - 1, v + 1]);
}}if (u2 < maxU) {
if (p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, u2 + 1, v + 1, origValues])) {
p$1.pushUV$J$J.apply(this, [u2 + 1, v + 1]);
}}}var inScanLine=false;
for (var i=u1; i <= u2; i++) {
if (!inScanLine && v > 0  && p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, i, v - 1, origValues]) ) {
p$1.pushUV$J$J.apply(this, [i, v - 1]);
inScanLine=true;
} else if (inScanLine && v > 0  && !p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, i, v - 1, origValues]) ) inScanLine=false;
}
inScanLine=false;
for (var i=u1; i <= u2; i++) {
if (!inScanLine && v < maxV  && p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, i, v + 1, origValues]) ) {
p$1.pushUV$J$J.apply(this, [i, v + 1]);
inScanLine=true;
} else if (inScanLine && v < maxV  && !p$1.matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection.apply(this, [accessor, i, v + 1, origValues]) ) inScanLine=false;
}
}
return true;
});

Clazz.newMeth(C$, 'particleAnalyzerFill$J$J$JA$D$D$net_imagej_DrawingTool$org_scijava_util_RealRect', function (u0, v0, position, level1, level2, maskTool, bounds) {
var ds=this.tool.getDataset$();
if ((this.channelAxis != -1) || (ds.dimension$I(this.channelAxis) != 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["particle analyzer cannot support multiple channels"]);
}var acc=ds.getImgPlus$().randomAccess$();
acc.setPosition$JA(position);
this.uAxis=this.tool.getUAxis$();
this.vAxis=this.tool.getVAxis$();
var maxU=ds.dimension$I(this.uAxis) - 1;
var maxV=ds.dimension$I(this.vAxis) - 1;
var numChan=ds.dimension$I(this.channelAxis);
p$1.setValues$net_imagej_DrawingTool$J$D.apply(this, [maskTool, numChan, 0]);
maskTool.fill$();
p$1.setValues$net_imagej_DrawingTool$J$D.apply(this, [maskTool, numChan, 255]);
p$1.clearUV.apply(this, []);
p$1.pushUV$J$J.apply(this, [u0, v0]);
while (!this.uStack.isEmpty$()){
var u=p$1.popU.apply(this, []);
var v=p$1.popV.apply(this, []);
if (!p$1.inParticle$net_imglib2_RandomAccess$J$J$D$D.apply(this, [acc, u, v, level1, level2])) continue;
var u1=u;
var u2=u;
while (p$1.inParticle$net_imglib2_RandomAccess$J$J$D$D.apply(this, [acc, u1, v, level1, level2]) && u1 >= 0 )u1--;

u1++;
while (p$1.inParticle$net_imglib2_RandomAccess$J$J$D$D.apply(this, [acc, u2, v, level1, level2]) && u2 <= maxU )u2++;

u2--;
maskTool.drawLine$J$J$J$J(((u1 - bounds.x)|0), ((v - bounds.y)|0), ((u2 - bounds.x)|0), ((v - bounds.y)|0));
this.tool.drawLine$J$J$J$J(u1, v, u2, v);
var inScanLine=false;
if (u1 > 0) u1--;
if (u2 < maxU) u2++;
for (var i=u1; i <= u2; i++) {
if (!inScanLine && v > 0  && p$1.inParticle$net_imglib2_RandomAccess$J$J$D$D.apply(this, [acc, i, v - 1, level1, level2]) ) {
p$1.pushUV$J$J.apply(this, [i, v - 1]);
inScanLine=true;
} else if (inScanLine && v > 0  && !p$1.inParticle$net_imglib2_RandomAccess$J$J$D$D.apply(this, [acc, i, v - 1, level1, level2]) ) inScanLine=false;
}
inScanLine=false;
for (var i=u1; i <= u2; i++) {
if (!inScanLine && v < maxV  && p$1.inParticle$net_imglib2_RandomAccess$J$J$D$D.apply(this, [acc, i, v + 1, level1, level2]) ) {
p$1.pushUV$J$J.apply(this, [i, v + 1]);
inScanLine=true;
} else if (inScanLine && v < maxV  && !p$1.inParticle$net_imglib2_RandomAccess$J$J$D$D.apply(this, [acc, i, v + 1, level1, level2]) ) inScanLine=false;
}
}
});

Clazz.newMeth(C$, 'inParticle$net_imglib2_RandomAccess$J$J$D$D', function (accessor, u, v, level1, level2) {
accessor.setPosition$J$I(u, this.uAxis);
accessor.setPosition$J$I(v, this.vAxis);
var val=accessor.get$().getRealDouble$();
return val >= level1  && val <= level2  ;
}, p$1);

Clazz.newMeth(C$, 'setValues$net_imagej_DrawingTool$J$D', function (tool, numChan, value) {
var values=Clazz.new_(1,{E:"Double"},$I$(4,1));
for (var i=0; i < numChan; i++) values.add$TE(new Double(value));

var channels=Clazz.new_($I$(5,1).c$$java_util_List,[values]);
tool.setChannels$net_imagej_ChannelCollection(channels);
}, p$1);

Clazz.newMeth(C$, 'matches$net_imglib2_RandomAccess$J$J$net_imagej_ChannelCollection', function (accessor, u, v, channels) {
accessor.setPosition$J$I(u, this.uAxis);
accessor.setPosition$J$I(v, this.vAxis);
if (this.channelAxis == -1) {
var val=accessor.get$().getRealDouble$();
return val == channels.getChannelValue$J(0) ;
}var numChan=this.tool.getDataset$().dimension$I(this.channelAxis);
for (var c=0; c < numChan; c++) {
accessor.setPosition$J$I(c, this.channelAxis);
var value=accessor.get$().getRealDouble$();
if (value != channels.getChannelValue$J(c) ) return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'getValues$net_imglib2_RandomAccess$J$J', function (accessor, u, v) {
var channels=Clazz.new_(1,{E:"Double"},$I$(4,1));
accessor.setPosition$J$I(u, this.uAxis);
accessor.setPosition$J$I(v, this.vAxis);
var numChannels=1;
if (this.channelAxis != -1) numChannels=this.tool.getDataset$().dimension$I(this.channelAxis);
for (var c=0; c < numChannels; c++) {
if (this.channelAxis != -1) accessor.setPosition$J$I(c, this.channelAxis);
var val=accessor.get$().getRealDouble$();
channels.add$TE(new Double(val));
}
return Clazz.new_($I$(5,1).c$$java_util_List,[channels]);
}, p$1);

Clazz.newMeth(C$, 'pushUV$J$J', function (u, v) {
this.uStack.push$J(u);
this.vStack.push$J(v);
}, p$1);

Clazz.newMeth(C$, 'popU', function () {
return this.uStack.pop$();
}, p$1);

Clazz.newMeth(C$, 'popV', function () {
return this.vStack.pop$();
}, p$1);

Clazz.newMeth(C$, 'clearUV', function () {
this.uStack.clear$();
this.vStack.clear$();
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.FloodFiller, "StackOfLongs", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['top'],'O',['stack','long[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.top=-1;
this.stack=Clazz.array(Long.TYPE, [400]);
}, 1);

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.top < 0;
});

Clazz.newMeth(C$, 'clear$', function () {
this.top=-1;
});

Clazz.newMeth(C$, 'push$J', function (value) {
if (this.top == this.stack.length - 1) this.stack=$I$(1).copyOf$JA$I(this.stack, this.stack.length * 2);
this.top++;
this.stack[this.top]=value;
});

Clazz.newMeth(C$, 'pop$', function () {
if (this.top < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["can\'t pop empty stack"]);
var value=this.stack[this.top];
this.top--;
return value;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
