(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.fileformat.writer"),p$1={},I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box','io.scif.jj2000.j2k.io.BEBufferedRandomAccessFile']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileFormatWriter", null, null, 'io.scif.jj2000.j2k.fileformat.FileFormatBoxes');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isIndexed=false;
}, 1);

C$.$fields$=[['Z',['bpcVaries','isIndexed'],'I',['height','width','nc','clength','otherLength'],'O',['file','java.io.File','stream','javax.imageio.stream.ImageOutputStream','bpc','int[]','colorModel','java.awt.image.ColorModel','sampleModel','java.awt.image.SampleModel','metadata','io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadata','format','io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadataFormat']]]

Clazz.newMeth(C$, 'c$$java_io_File$javax_imageio_stream_ImageOutputStream$I$I$I$IA$I$java_awt_image_ColorModel$java_awt_image_SampleModel$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata', function (file, stream, height, width, nc, bpc, clength, colorModel, sampleModel, metadata) {
;C$.$init$.apply(this);
this.height=height;
this.width=width;
this.nc=nc;
this.bpc=bpc;
this.file=file;
this.stream=stream;
this.clength=clength;
this.colorModel=colorModel;
this.sampleModel=sampleModel;
this.metadata=metadata;
if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) this.isIndexed=true;
this.bpcVaries=false;
var fixbpc=bpc[0];
for (var i=nc - 1; i > 0; i--) {
if (bpc[i] != fixbpc) this.bpcVaries=true;
}
}, 1);

Clazz.newMeth(C$, 'writeFileFormat$', function () {
p$1.writeMetadata$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata.apply(this, [this.metadata]);
this.writeContiguousCodeStreamBox$();
return 15 + this.otherLength;
});

Clazz.newMeth(C$, 'writeMetadata$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata', function (metadata) {
if (metadata == null ) return;
var root=metadata.getAsTree$S("com_sun_media_imageio_plugins_jpeg2000_image_1.0");
if (root == null ) return;
this.format=metadata.getMetadataFormat$S("com_sun_media_imageio_plugins_jpeg2000_image_1.0");
p$1.writeSuperBox$javax_imageio_metadata_IIOMetadataNode.apply(this, [root]);
}, p$1);

Clazz.newMeth(C$, 'writeSuperBox$javax_imageio_metadata_IIOMetadataNode', function (node) {
var list=node.getChildNodes$();
var name=node.getNodeName$();
if (name.startsWith$S("JPEG2000")) {
this.stream.writeInt$I(p$1.computeLength$javax_imageio_metadata_IIOMetadataNode.apply(this, [node]));
this.stream.writeInt$I($I$(1).getTypeInt$S($I$(1).getTypeByName$S(name)));
this.otherLength+=8;
}for (var i=0; i < list.getLength$(); i++) {
var child=list.item$I(i);
name=child.getNodeName$();
if (name.startsWith$S("JPEG2000") && this.format.isLeaf$S(name) ) p$1.writeBox$javax_imageio_metadata_IIOMetadataNode.apply(this, [child]);
 else p$1.writeSuperBox$javax_imageio_metadata_IIOMetadataNode.apply(this, [child]);
}
}, p$1);

Clazz.newMeth(C$, 'writeBox$javax_imageio_metadata_IIOMetadataNode', function (node) {
var type=$I$(1).getTypeInt$S($I$(1).getAttribute$org_w3c_dom_Node$S(node, "Type"));
var length= new Integer($I$(1).getAttribute$org_w3c_dom_Node$S(node, "Length")).intValue$();
var box=$I$(1).createBox$I$org_w3c_dom_Node(type, node);
this.otherLength+=length;
this.stream.writeInt$I(length);
this.stream.writeInt$I(type);
var data=box.getContent$();
this.stream.write$BA$I$I(data, 0, data.length);
}, p$1);

Clazz.newMeth(C$, 'computeLength$javax_imageio_metadata_IIOMetadataNode', function (root) {
var list=root.getChildNodes$();
var length=0;
for (var i=0; i < list.getLength$(); i++) {
var node=list.item$I(i);
var name=node.getNodeName$();
if (this.format.isLeaf$S(name)) length+= new Integer($I$(1).getAttribute$org_w3c_dom_Node$S(node, "Length")).intValue$();
 else length+=p$1.computeLength$javax_imageio_metadata_IIOMetadataNode.apply(this, [node]);
}
return length + (root.getNodeName$().startsWith$S("JPEG2000") ? 8 : 0);
}, p$1);

Clazz.newMeth(C$, 'writeContiguousCodeStreamBox$', function () {
if (this.metadata != null ) {
this.stream.writeInt$I(this.clength + 8);
this.stream.writeInt$I(1785737827);
}var fi=Clazz.new_($I$(2,1).c$$java_io_File$S,[this.file, "rw+"]);
var remainder=this.clength;
var codestream=Clazz.array(Byte.TYPE, [1024]);
while (remainder > 0){
var len=remainder > 1024 ? 1024 : remainder;
fi.readFully$BA$I$I(codestream, 0, len);
this.stream.write$BA$I$I(codestream, 0, len);
remainder-=len;
}
fi.close$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
