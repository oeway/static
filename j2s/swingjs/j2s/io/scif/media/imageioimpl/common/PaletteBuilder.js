(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.common"),p$1={},I$=[[0,'javax.imageio.ImageTypeSpecifier','java.awt.image.BufferedImage',['io.scif.media.imageioimpl.common.PaletteBuilder','.ColorNode'],'java.awt.Color','java.awt.image.IndexColorModel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PaletteBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ColorNode',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['requiredSize','numNodes','maxNodes','currLevel','currSize','transparency'],'O',['src','java.awt.image.RenderedImage','srcColorModel','java.awt.image.ColorModel','srcRaster','java.awt.image.Raster','root','io.scif.media.imageioimpl.common.PaletteBuilder.ColorNode','reduceList','io.scif.media.imageioimpl.common.PaletteBuilder.ColorNode[]','+palette','transColor','io.scif.media.imageioimpl.common.PaletteBuilder.ColorNode']]]

Clazz.newMeth(C$, 'createIndexedImage$java_awt_image_RenderedImage', function (src) {
var pb=Clazz.new_(C$.c$$java_awt_image_RenderedImage,[src]);
pb.buildPalette$();
return pb.getIndexedImage$();
}, 1);

Clazz.newMeth(C$, 'createIndexColorModel$java_awt_image_RenderedImage', function (img) {
var pb=Clazz.new_(C$.c$$java_awt_image_RenderedImage,[img]);
pb.buildPalette$();
return pb.getIndexColorModel$();
}, 1);

Clazz.newMeth(C$, 'canCreatePalette$javax_imageio_ImageTypeSpecifier', function (type) {
if (type == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type == null"]);
}return true;
}, 1);

Clazz.newMeth(C$, 'canCreatePalette$java_awt_image_RenderedImage', function (image) {
if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null"]);
}var type=Clazz.new_($I$(1,1).c$$java_awt_image_RenderedImage,[image]);
return C$.canCreatePalette$javax_imageio_ImageTypeSpecifier(type);
}, 1);

Clazz.newMeth(C$, 'getIndexedImage$', function () {
var icm=this.getIndexColorModel$();
var dst=Clazz.new_($I$(2,1).c$$I$I$I$java_awt_image_IndexColorModel,[this.src.getWidth$(), this.src.getHeight$(), 13, icm]);
var wr=dst.getRaster$();
var minX=this.src.getMinX$();
var minY=this.src.getMinY$();
for (var y=0; y < dst.getHeight$(); y++) {
for (var x=0; x < dst.getWidth$(); x++) {
var aColor=p$1.getSrcColor$I$I.apply(this, [x + minX, y + minY]);
wr.setSample$I$I$I$I(x, y, 0, this.findColorIndex$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode$java_awt_Color(this.root, aColor));
}
}
return dst;
});

Clazz.newMeth(C$, 'c$$java_awt_image_RenderedImage', function (src) {
C$.c$$java_awt_image_RenderedImage$I.apply(this, [src, 256]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_RenderedImage$I', function (src, size) {
;C$.$init$.apply(this);
this.src=src;
this.srcColorModel=src.getColorModel$();
this.srcRaster=src.getData$();
this.transparency=this.srcColorModel.getTransparency$();
if (this.transparency != 1) {
this.requiredSize=size - 1;
this.transColor=Clazz.new_($I$(3,1), [this, null]);
this.transColor.isLeaf=true;
} else {
this.requiredSize=size;
}}, 1);

Clazz.newMeth(C$, 'getSrcColor$I$I', function (x, y) {
var argb=this.srcColorModel.getRGB$O(this.srcRaster.getDataElements$I$I$O(x, y, null));
return Clazz.new_($I$(4,1).c$$I$Z,[argb, this.transparency != 1]);
}, p$1);

Clazz.newMeth(C$, 'findColorIndex$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode$java_awt_Color', function (aNode, aColor) {
if (this.transparency != 1 && aColor.getAlpha$() != 255 ) {
return 0;
}if (aNode.isLeaf) {
return aNode.paletteIndex;
} else {
var childIndex=this.getBranchIndex$java_awt_Color$I(aColor, aNode.level);
return this.findColorIndex$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode$java_awt_Color(aNode.children[childIndex], aColor);
}});

Clazz.newMeth(C$, 'buildPalette$', function () {
this.reduceList=Clazz.array($I$(3), [9]);
for (var i=0; i < this.reduceList.length; i++) {
this.reduceList[i]=null;
}
this.numNodes=0;
this.maxNodes=0;
this.root=null;
this.currSize=0;
this.currLevel=8;
var w=this.src.getWidth$();
var h=this.src.getHeight$();
var minX=this.src.getMinX$();
var minY=this.src.getMinY$();
for (var y=0; y < h; y++) {
for (var x=0; x < w; x++) {
var aColor=p$1.getSrcColor$I$I.apply(this, [w - x + minX - 1, h - y + minY - 1]);
if (this.transparency != 1 && aColor.getAlpha$() != 255 ) {
this.transColor=this.insertNode$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode$java_awt_Color$I(this.transColor, aColor, 0);
} else {
this.root=this.insertNode$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode$java_awt_Color$I(this.root, aColor, 0);
}if (this.currSize > this.requiredSize) {
this.reduceTree$();
}}
}
});

Clazz.newMeth(C$, 'insertNode$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode$java_awt_Color$I', function (aNode, aColor, aLevel) {
if (aNode == null ) {
aNode=Clazz.new_($I$(3,1), [this, null]);
this.numNodes++;
if (this.numNodes > this.maxNodes) {
this.maxNodes=this.numNodes;
}aNode.level=aLevel;
aNode.isLeaf=(aLevel > 8);
if (aNode.isLeaf) {
this.currSize++;
}}aNode.colorCount++;
aNode.red+=aColor.getRed$();
aNode.green+=aColor.getGreen$();
aNode.blue+=aColor.getBlue$();
if (!aNode.isLeaf) {
var branchIndex=this.getBranchIndex$java_awt_Color$I(aColor, aLevel);
if (aNode.children[branchIndex] == null ) {
aNode.childCount++;
if (aNode.childCount == 2) {
aNode.nextReducible=this.reduceList[aLevel];
this.reduceList[aLevel]=aNode;
}}aNode.children[branchIndex]=this.insertNode$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode$java_awt_Color$I(aNode.children[branchIndex], aColor, aLevel + 1);
}return aNode;
});

Clazz.newMeth(C$, 'getIndexColorModel$', function () {
var size=this.currSize;
if (this.transparency != 1) {
size++;
}var red=Clazz.array(Byte.TYPE, [size]);
var green=Clazz.array(Byte.TYPE, [size]);
var blue=Clazz.array(Byte.TYPE, [size]);
var index=0;
this.palette=Clazz.array($I$(3), [size]);
if (this.transparency != 1) {
index++;
}var lastIndex=this.findPaletteEntry$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode$I$BA$BA$BA(this.root, index, red, green, blue);
var icm=null;
if (this.transparency != 1) {
icm=Clazz.new_($I$(5,1).c$$I$I$BA$BA$BA$I,[8, size, red, green, blue, 0]);
} else {
icm=Clazz.new_($I$(5,1).c$$I$I$BA$BA$BA,[8, this.currSize, red, green, blue]);
}return icm;
});

Clazz.newMeth(C$, 'findPaletteEntry$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode$I$BA$BA$BA', function (aNode, index, red, green, blue) {
if (aNode.isLeaf) {
red[index]=((((aNode.red/aNode.colorCount|0))|0)|0);
green[index]=((((aNode.green/aNode.colorCount|0))|0)|0);
blue[index]=((((aNode.blue/aNode.colorCount|0))|0)|0);
aNode.paletteIndex=index;
this.palette[index]=aNode;
index++;
} else {
for (var i=0; i < 8; i++) {
if (aNode.children[i] != null ) {
index=this.findPaletteEntry$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode$I$BA$BA$BA(aNode.children[i], index, red, green, blue);
}}
}return index;
});

Clazz.newMeth(C$, 'getBranchIndex$java_awt_Color$I', function (aColor, aLevel) {
if (aLevel > 8 || aLevel < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid octree node depth: " + aLevel]);
}var shift=8 - aLevel;
var red_index=1 & ((255 & aColor.getRed$()) >> shift);
var green_index=1 & ((255 & aColor.getGreen$()) >> shift);
var blue_index=1 & ((255 & aColor.getBlue$()) >> shift);
var index=(red_index << 2) | (green_index << 1) | blue_index ;
return index;
});

Clazz.newMeth(C$, 'reduceTree$', function () {
var level=this.reduceList.length - 1;
while (this.reduceList[level] == null  && level >= 0 ){
level--;
}
var thisNode=this.reduceList[level];
if (thisNode == null ) {
return;
}var pList=thisNode;
var minColorCount=pList.colorCount;
var cnt=1;
while (pList.nextReducible != null ){
if (minColorCount > pList.nextReducible.colorCount) {
thisNode=pList;
minColorCount=pList.colorCount;
}pList=pList.nextReducible;
cnt++;
}
if (thisNode === this.reduceList[level] ) {
this.reduceList[level]=thisNode.nextReducible;
} else {
pList=thisNode.nextReducible;
thisNode.nextReducible=pList.nextReducible;
thisNode=pList;
}if (thisNode.isLeaf) {
return;
}var leafChildCount=thisNode.getLeafChildCount$();
thisNode.isLeaf=true;
this.currSize-=(leafChildCount - 1);
var aDepth=thisNode.level;
for (var i=0; i < 8; i++) {
thisNode.children[i]=this.freeTree$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode(thisNode.children[i]);
}
thisNode.childCount=0;
});

Clazz.newMeth(C$, 'freeTree$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode', function (aNode) {
if (aNode == null ) {
return null;
}for (var i=0; i < 8; i++) {
aNode.children[i]=this.freeTree$io_scif_media_imageioimpl_common_PaletteBuilder_ColorNode(aNode.children[i]);
}
this.numNodes--;
return null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PaletteBuilder, "ColorNode", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isLeaf'],'I',['childCount','colorCount','paletteIndex','level'],'L',['red','blue','green'],'O',['children','io.scif.media.imageioimpl.common.PaletteBuilder.ColorNode[]','nextReducible','io.scif.media.imageioimpl.common.PaletteBuilder.ColorNode']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.isLeaf=false;
this.level=0;
this.childCount=0;
this.children=Clazz.array(C$, [8]);
for (var i=0; i < 8; i++) {
this.children[i]=null;
}
this.colorCount=0;
this.red=this.green=this.blue=0;
this.paletteIndex=0;
}, 1);

Clazz.newMeth(C$, 'getLeafChildCount$', function () {
if (this.isLeaf) {
return 0;
}var cnt=0;
for (var i=0; i < this.children.length; i++) {
if (this.children[i] != null ) {
if (this.children[i].isLeaf) {
cnt++;
} else {
cnt+=this.children[i].getLeafChildCount$();
}}}
return cnt;
});

Clazz.newMeth(C$, 'getRGB$', function () {
var r=((this.red|0)/this.colorCount|0);
var g=((this.green|0)/this.colorCount|0);
var b=((this.blue|0)/this.colorCount|0);
var c=-16777216 | (255 & r) << 16 | (255 & g) << 8 | (255 & b);
return c;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
