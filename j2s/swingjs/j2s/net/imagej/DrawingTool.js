(function(){var P$=Clazz.newPackage("net.imagej"),p$1={},I$=[[0,'net.imagej.ChannelCollection',['net.imagej.render.TextRenderer','.TextJustification'],'net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DrawingTool");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['intensity'],'I',['uAxis','vAxis','channelAxis'],'L',['preferredChannel','lineWidth','u0','v0','maxU','maxV'],'O',['dataset','net.imagej.Dataset','accessor','net.imglib2.RandomAccess','channels','net.imagej.ChannelCollection','textRenderer','net.imagej.render.TextRenderer']]]

Clazz.newMeth(C$, 'c$$net_imagej_Dataset$net_imagej_render_RenderingService', function (ds, service) {
;C$.$init$.apply(this);
this.dataset=ds;
this.accessor=ds.getImgPlus$().randomAccess$();
this.channels=Clazz.new_($I$(1,1));
this.lineWidth=1;
this.intensity=1;
this.textRenderer=service.getTextRenderer$();
this.u0=0;
this.v0=0;
this.preferredChannel=-1;
p$1.initAxisVariables.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'setPreferredChannel$J', function (channelNumber) {
if (channelNumber > 0) {
var invalid=this.channelAxis < 0;
if (!invalid) invalid=channelNumber >= this.dataset.dimension$I(this.channelAxis);
if (invalid) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["preferred channel outside valid range"]);
}this.preferredChannel=channelNumber;
});

Clazz.newMeth(C$, 'getDataset$', function () {
return this.dataset;
});

Clazz.newMeth(C$, 'setUAxis$I', function (axisNum) {
p$1.checkAxisValid$I.apply(this, [axisNum]);
this.uAxis=axisNum;
this.maxU=this.dataset.dimension$I(this.uAxis) - 1;
});

Clazz.newMeth(C$, 'getUAxis$', function () {
return this.uAxis;
});

Clazz.newMeth(C$, 'setVAxis$I', function (axisNum) {
p$1.checkAxisValid$I.apply(this, [axisNum]);
this.vAxis=axisNum;
this.maxV=this.dataset.dimension$I(this.vAxis) - 1;
});

Clazz.newMeth(C$, 'getVAxis$', function () {
return this.vAxis;
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
this.accessor.setPosition$JA(position);
});

Clazz.newMeth(C$, 'getPosition$JA', function (position) {
for (var i=0; i < this.accessor.numDimensions$(); i++) position[i]=this.accessor.getLongPosition$I(i);

});

Clazz.newMeth(C$, 'getChannels$', function () {
return this.channels;
});

Clazz.newMeth(C$, 'setChannels$net_imagej_ChannelCollection', function (chans) {
this.channels=chans;
});

Clazz.newMeth(C$, 'setLineWidth$J', function (lineWidth) {
this.lineWidth=lineWidth;
});

Clazz.newMeth(C$, 'getLineWidth$', function () {
return this.lineWidth;
});

Clazz.newMeth(C$, 'setTextRenderer$net_imagej_render_TextRenderer', function (renderer) {
this.textRenderer=renderer;
});

Clazz.newMeth(C$, 'setFontFamily$net_imagej_render_TextRenderer_FontFamily', function (family) {
this.textRenderer.setFontFamily$net_imagej_render_TextRenderer_FontFamily(family);
});

Clazz.newMeth(C$, 'getFontFamily$', function () {
return this.textRenderer.getFontFamily$();
});

Clazz.newMeth(C$, 'setFontStyle$net_imagej_render_TextRenderer_FontStyle', function (style) {
this.textRenderer.setFontStyle$net_imagej_render_TextRenderer_FontStyle(style);
});

Clazz.newMeth(C$, 'getFontStyle$', function () {
return this.textRenderer.getFontStyle$();
});

Clazz.newMeth(C$, 'setFontSize$I', function (size) {
this.textRenderer.setFontSize$I(size);
});

Clazz.newMeth(C$, 'getFontSize$', function () {
return this.textRenderer.getFontSize$();
});

Clazz.newMeth(C$, 'setTextAntialiasing$Z', function (value) {
this.textRenderer.setAntialiasing$Z(value);
});

Clazz.newMeth(C$, 'getTextAntialiasing$', function () {
return this.textRenderer.getAntialiasing$();
});

Clazz.newMeth(C$, 'drawPixel$J$J', function (u, v) {
if (u < 0) return;
if (v < 0) return;
if (u > this.maxU) return;
if (v > this.maxV) return;
this.accessor.setPosition$J$I(u, this.uAxis);
this.accessor.setPosition$J$I(v, this.vAxis);
if (this.preferredChannel >= 0) {
var value=this.intensity * this.channels.getChannelValue$J(this.preferredChannel);
if (this.channelAxis != -1) this.accessor.setPosition$J$I(this.preferredChannel, this.channelAxis);
this.accessor.get$().setReal$D(value);
} else {
var numChannels=1;
if (this.channelAxis != -1) numChannels=this.dataset.dimension$I(this.channelAxis);
for (var c=0; c < numChannels; c++) {
var value=this.intensity * this.channels.getChannelValue$J(c);
if (this.channelAxis != -1) this.accessor.setPosition$J$I(c, this.channelAxis);
this.accessor.get$().setReal$D(value);
}
}this.dataset.setDirty$Z(true);
});

Clazz.newMeth(C$, 'drawDot$J$J', function (u, v) {
if (this.lineWidth == 1) this.drawPixel$J$J(u, v);
 else if (this.lineWidth == 2) {
this.drawPixel$J$J(u, v);
this.drawPixel$J$J(u, v - 1);
this.drawPixel$J$J(u - 1, v);
this.drawPixel$J$J(u - 1, v - 1);
} else {
this.fillCircle$J$J(u, v);
}});

Clazz.newMeth(C$, 'moveTo$J$J', function (u, v) {
this.u0=u;
this.v0=v;
});

Clazz.newMeth(C$, 'lineTo$J$J', function (u1, v1) {
var du=u1 - this.u0;
var dv=v1 - this.v0;
var absdu=du >= 0 ? du : -du;
var absdv=dv >= 0 ? dv : -dv;
var n=absdv > absdu ? absdv : absdu;
var uinc=du / n;
var vinc=dv / n;
var u=this.u0;
var v=this.v0;
n++;
this.u0=u1;
this.v0=v1;
do {
this.drawDot$J$J(Math.round(u), Math.round(v));
u += uinc;
v += vinc;
} while (--n > 0);
});

Clazz.newMeth(C$, 'drawLine$J$J$J$J', function (u1, v1, u2, v2) {
this.moveTo$J$J(u1, v1);
this.lineTo$J$J(u2, v2);
});

Clazz.newMeth(C$, 'fillCircle$J$J', function (uc, vc) {
var r=this.lineWidth / 2.0;
var umin=((uc - r + 0.5)|0);
var vmin=((vc - r + 0.5)|0);
var umax=umin + this.lineWidth;
var vmax=vmin + this.lineWidth;
var r2=r * r;
r -= 0.5;
var uoffset=umin + r;
var voffset=vmin + r;
var uu;
var vv;
for (var v=vmin; v < vmax; v++) {
for (var u=umin; u < umax; u++) {
uu=u - uoffset;
vv=v - voffset;
if ((uu * uu + vv * vv) <= r2 ) this.drawPixel$J$J(u, v);
}
}
});

Clazz.newMeth(C$, 'drawRect$J$J$J$J', function (uOrg, vOrg, w, h) {
this.drawLine$J$J$J$J(uOrg, vOrg, uOrg, vOrg + h - 1);
this.drawLine$J$J$J$J(uOrg, vOrg, uOrg + w - 1, vOrg);
this.drawLine$J$J$J$J(uOrg + w - 1, vOrg + h - 1, uOrg, vOrg + h - 1);
this.drawLine$J$J$J$J(uOrg + w - 1, vOrg + h - 1, uOrg + w - 1, vOrg);
});

Clazz.newMeth(C$, 'fillRect$J$J$J$J', function (uOrigin, vOrigin, w, h) {
for (var du=0; du < w; du++) {
for (var dv=0; dv < h; dv++) {
this.drawPixel$J$J(uOrigin + du, vOrigin + dv);
}
}
});

Clazz.newMeth(C$, 'fill$', function () {
this.fillRect$J$J$J$J(0, 0, this.maxU + 1, this.maxV + 1);
});

Clazz.newMeth(C$, 'drawText$J$J$S$net_imagej_render_TextRenderer_TextJustification', function (anchorU, anchorV, text, just) {
this.textRenderer.renderText$S(text);
var bufferSizeU=this.textRenderer.getPixelsWidth$();
var bufferSizeV=this.textRenderer.getPixelsHeight$();
var buffer=this.textRenderer.getPixels$();
var minu=2147483647;
var minv=2147483647;
var maxu=-2147483648;
var maxv=-2147483648;
for (var u=0; u < bufferSizeU; u++) {
for (var v=0; v < bufferSizeV; v++) {
var index=v * bufferSizeU + u;
if (buffer[index] != 0) {
if (u < minu) minu=u;
if (u > maxu) maxu=u;
if (v < minv) minv=v;
if (v > maxv) maxv=v;
}}
}
var originU;
var originV;
switch (just) {
case $I$(2).CENTER:
originU=anchorU - ((maxu - minu + 1)/2|0);
originV=anchorV - ((maxv - minv + 1)/2|0);
break;
case $I$(2).RIGHT:
originU=anchorU - (maxu - minu + 1);
originV=anchorV - (maxv - minv + 1);
break;
default:
originU=anchorU;
originV=anchorV;
break;
}
for (var u=minu; u <= maxu; u++) {
for (var v=minv; v <= maxv; v++) {
var index=v * bufferSizeU + u;
if (buffer[index] != 0) {
var pixVal=buffer[index] & 255;
this.intensity=pixVal / 255.0;
this.drawPixel$J$J(originU + u - minu, originV + v - minv);
}}
}
this.intensity=1;
});

Clazz.newMeth(C$, 'initAxisVariables', function () {
this.channelAxis=this.dataset.dimensionIndex$net_imagej_axis_AxisType($I$(3).CHANNEL);
this.uAxis=-1;
this.vAxis=-1;
for (var i=0; i < this.dataset.numDimensions$(); i++) {
if (i == this.channelAxis) continue;
if (this.uAxis == -1) this.uAxis=i;
 else if (this.vAxis == -1) this.vAxis=i;
}
if (this.uAxis == -1 || this.vAxis == -1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["DrawingTool cannot find appropriate default UV axes"]);
}this.maxU=this.dataset.dimension$I(this.uAxis) - 1;
this.maxV=this.dataset.dimension$I(this.vAxis) - 1;
}, p$1);

Clazz.newMeth(C$, 'checkAxisValid$I', function (axisNum) {
if (axisNum == this.channelAxis) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["DrawingTool misconfiguration. The tool fills multiple channels at once. Cannot use a channel plane as working plane."]);
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
