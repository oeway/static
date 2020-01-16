(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'io.scif.media.imageio.plugins.tiff.TIFFTag','java.util.StringTokenizer','io.scif.media.imageioimpl.plugins.tiff.TIFFFieldNode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFField", null, null, 'Comparable');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeNames=Clazz.array(String, -1, [null, "Byte", "Ascii", "Short", "Long", "Rational", "SByte", "Undefined", "SShort", "SLong", "SRational", "Float", "Double", "IFDPointer"]);
C$.isIntegral=Clazz.array(Boolean.TYPE, -1, [false, true, false, true, true, false, true, true, true, true, false, false, false, false]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['tagNumber','type','count'],'O',['tag','io.scif.media.imageio.plugins.tiff.TIFFTag','data','java.lang.Object']]
,['O',['typeNames','String[]','isIntegral','boolean[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S', function (node, attrName) {
var attrs=node.getAttributes$();
return attrs.getNamedItem$S(attrName).getNodeValue$();
}, 1);

Clazz.newMeth(C$, 'initData$org_w3c_dom_Node$IA$IA$OA', function (node, otype, ocount, odata) {
var type;
var count;
var data=null;
var typeName=node.getNodeName$();
typeName=typeName.substring$I(4);
typeName=typeName.substring$I$I(0, typeName.length$() - 1);
type=C$.getTypeByName$S(typeName);
if (type == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["typeName = " + typeName]);
}var child=node.getFirstChild$();
count=0;
while (child != null ){
var childTypeName=child.getNodeName$().substring$I(4);
if (!typeName.equals$O(childTypeName)) {
}++count;
child=child.getNextSibling$();
}
if (count > 0) {
data=C$.createArrayForType$I$I(type, count);
child=node.getFirstChild$();
var idx=0;
while (child != null ){
var value=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
var numerator;
var denominator;
var slashPos;
switch (type) {
case 2:
(data)[idx]=value;
break;
case 1:
case 6:
(data)[idx]=((Integer.parseInt$S(value)|0)|0);
break;
case 3:
(data)[idx]=String.fromCharCode(Integer.parseInt$S(value));
break;
case 8:
(data)[idx]=(Integer.parseInt$S(value)|0);
break;
case 9:
(data)[idx]=Integer.parseInt$S(value);
break;
case 4:
case 13:
(data)[idx]=Long.parseLong$S(value);
break;
case 11:
(data)[idx]=Float.parseFloat$S(value);
break;
case 12:
(data)[idx]=Double.parseDouble$S(value);
break;
case 10:
slashPos=value.indexOf$S("/");
numerator=value.substring$I$I(0, slashPos);
denominator=value.substring$I(slashPos + 1);
(data)[idx]=Clazz.array(Integer.TYPE, [2]);
(data)[idx][0]=Integer.parseInt$S(numerator);
(data)[idx][1]=Integer.parseInt$S(denominator);
break;
case 5:
slashPos=value.indexOf$S("/");
numerator=value.substring$I$I(0, slashPos);
denominator=value.substring$I(slashPos + 1);
(data)[idx]=Clazz.array(Long.TYPE, [2]);
(data)[idx][0]=Long.parseLong$S(numerator);
(data)[idx][1]=Long.parseLong$S(denominator);
break;
default:
}
idx++;
child=child.getNextSibling$();
}
}otype[0]=type;
ocount[0]=count;
odata[0]=data;
}, 1);

Clazz.newMeth(C$, 'createFromMetadataNode$io_scif_media_imageio_plugins_tiff_TIFFTagSet$org_w3c_dom_Node', function (tagSet, node) {
if (node == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["node == null!"]);
}var name=node.getNodeName$();
if (!name.equals$O("TIFFField")) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["!name.equals(\"TIFFField\")"]);
}var tagNumber=Integer.parseInt$S(C$.getAttribute$org_w3c_dom_Node$S(node, "number"));
var tag;
if (tagSet != null ) {
tag=tagSet.getTag$I(tagNumber);
} else {
tag=Clazz.new_($I$(1,1).c$$S$I$I$io_scif_media_imageio_plugins_tiff_TIFFTagSet,["unknown", tagNumber, 0, null]);
}var type=7;
var count=0;
var data=null;
var child=node.getFirstChild$();
if (child != null ) {
var typeName=child.getNodeName$();
if (typeName.equals$O("TIFFUndefined")) {
var values=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
var st=Clazz.new_($I$(2,1).c$$S$S,[values, ","]);
count=st.countTokens$();
var bdata=Clazz.array(Byte.TYPE, [count]);
for (var i=0; i < count; i++) {
bdata[i]=((Integer.parseInt$S(st.nextToken$())|0)|0);
}
type=7;
data=bdata;
} else {
var otype=Clazz.array(Integer.TYPE, [1]);
var ocount=Clazz.array(Integer.TYPE, [1]);
var odata=Clazz.array(java.lang.Object, [1]);
C$.initData$org_w3c_dom_Node$IA$IA$OA(node.getFirstChild$(), otype, ocount, odata);
type=otype[0];
count=ocount[0];
data=odata[0];
}} else {
var t=13;
while (t >= 1 && !tag.isDataTypeOK$I(t) ){
t--;
}
type=t;
}return Clazz.new_(C$.c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[tag, type, count, data]);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O', function (tag, type, count, data) {
;C$.$init$.apply(this);
if (tag == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tag == null!"]);
} else if (type < 1 || type > 13 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown data type " + type]);
} else if (count < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["count < 0!"]);
}this.tag=tag;
this.tagNumber=tag.getNumber$();
this.type=type;
this.count=count;
this.data=data;
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I', function (tag, type, count) {
C$.c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O.apply(this, [tag, type, count, C$.createArrayForType$I$I(type, count)]);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I', function (tag, value) {
;C$.$init$.apply(this);
if (tag == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tag == null!"]);
}if (value < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["value < 0!"]);
}this.tag=tag;
this.tagNumber=tag.getNumber$();
this.count=1;
if (value < 65536) {
this.type=3;
var cdata=Clazz.array(Character.TYPE, [1]);
cdata[0]=String.fromCharCode(value);
this.data=cdata;
} else {
this.type=4;
var ldata=Clazz.array(Long.TYPE, [1]);
ldata[0]=value;
this.data=ldata;
}}, 1);

Clazz.newMeth(C$, 'getTag$', function () {
return this.tag;
});

Clazz.newMeth(C$, 'getTagNumber$', function () {
return this.tagNumber;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getTypeName$I', function (dataType) {
if (dataType < 1 || dataType > 13 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown data type " + dataType]);
}return C$.typeNames[dataType];
}, 1);

Clazz.newMeth(C$, 'getTypeByName$S', function (typeName) {
for (var i=1; i <= 13; i++) {
if (typeName.equals$O(C$.typeNames[i])) {
return i;
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'createArrayForType$I$I', function (dataType, count) {
if (count < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["count < 0!"]);
}switch (dataType) {
case 1:
case 6:
case 7:
return Clazz.array(Byte.TYPE, [count]);
case 2:
return Clazz.array(String, [count]);
case 3:
return Clazz.array(Character.TYPE, [count]);
case 4:
case 13:
return Clazz.array(Long.TYPE, [count]);
case 5:
return Clazz.array(Long.TYPE, [count, 2]);
case 8:
return Clazz.array(Short.TYPE, [count]);
case 9:
return Clazz.array(Integer.TYPE, [count]);
case 10:
return Clazz.array(Integer.TYPE, [count, 2]);
case 11:
return Clazz.array(Float.TYPE, [count]);
case 12:
return Clazz.array(Double.TYPE, [count]);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown data type " + dataType]);
}
}, 1);

Clazz.newMeth(C$, 'getAsNativeNode$', function () {
return Clazz.new_($I$(3,1).c$$io_scif_media_imageio_plugins_tiff_TIFFField,[this]);
});

Clazz.newMeth(C$, 'isIntegral$', function () {
return C$.isIntegral[this.type];
});

Clazz.newMeth(C$, 'getCount$', function () {
return this.count;
});

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getAsBytes$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getAsChars$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getAsShorts$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getAsInts$', function () {
if (Clazz.instanceOf(this.data, Clazz.array(Integer.TYPE, -1))) {
return this.data;
} else if (Clazz.instanceOf(this.data, Clazz.array(Character.TYPE, -1))) {
var cdata=this.data;
var idata=Clazz.array(Integer.TYPE, [cdata.length]);
for (var i=0; i < cdata.length; i++) {
idata[i]=((cdata[i]).$c() & 65535);
}
return idata;
} else if (Clazz.instanceOf(this.data, Clazz.array(Short.TYPE, -1))) {
var sdata=this.data;
var idata=Clazz.array(Integer.TYPE, [sdata.length]);
for (var i=0; i < sdata.length; i++) {
idata[i]=sdata[i];
}
return idata;
} else {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["Data not char[], short[], or int[]!"]);
}});

Clazz.newMeth(C$, 'getAsLongs$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getAsFloats$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getAsDoubles$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getAsSRationals$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getAsRationals$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getAsInt$I', function (index) {
switch (this.type) {
case 1:
case 7:
return (this.data)[index] & 255;
case 6:
return (this.data)[index];
case 3:
return ((this.data)[index]).$c() & 65535;
case 8:
return (this.data)[index];
case 9:
return (this.data)[index];
case 4:
case 13:
return ((this.data)[index]|0);
case 11:
return ((this.data)[index]|0);
case 12:
return ((this.data)[index]|0);
case 10:
var ivalue=this.getAsSRational$I(index);
return ((ivalue[0] / ivalue[1])|0);
case 5:
var lvalue=this.getAsRational$I(index);
return ((lvalue[0] / lvalue[1])|0);
case 2:
var s=(this.data)[index];
return (Double.parseDouble$S(s)|0);
default:
throw Clazz.new_(Clazz.load('ClassCastException'));
}
});

Clazz.newMeth(C$, 'getAsLong$I', function (index) {
switch (this.type) {
case 1:
case 7:
return (this.data)[index] & 255;
case 6:
return (this.data)[index];
case 3:
return ((this.data)[index]).$c() & 65535;
case 8:
return (this.data)[index];
case 9:
return (this.data)[index];
case 4:
case 13:
return (this.data)[index];
case 10:
var ivalue=this.getAsSRational$I(index);
return ((ivalue[0] / ivalue[1])|0);
case 5:
var lvalue=this.getAsRational$I(index);
return ((lvalue[0] / lvalue[1])|0);
case 2:
var s=(this.data)[index];
return (Double.parseDouble$S(s)|0);
default:
throw Clazz.new_(Clazz.load('ClassCastException'));
}
});

Clazz.newMeth(C$, 'getAsFloat$I', function (index) {
switch (this.type) {
case 1:
case 7:
return (this.data)[index] & 255;
case 6:
return (this.data)[index];
case 3:
return ((this.data)[index]).$c() & 65535;
case 8:
return (this.data)[index];
case 9:
return (this.data)[index];
case 4:
case 13:
return (this.data)[index];
case 11:
return (this.data)[index];
case 12:
return (this.data)[index];
case 10:
var ivalue=this.getAsSRational$I(index);
return (ivalue[0] / ivalue[1]);
case 5:
var lvalue=this.getAsRational$I(index);
return (lvalue[0] / lvalue[1]);
case 2:
var s=(this.data)[index];
return Double.parseDouble$S(s);
default:
throw Clazz.new_(Clazz.load('ClassCastException'));
}
});

Clazz.newMeth(C$, 'getAsDouble$I', function (index) {
switch (this.type) {
case 1:
case 7:
return (this.data)[index] & 255;
case 6:
return (this.data)[index];
case 3:
return ((this.data)[index]).$c() & 65535;
case 8:
return (this.data)[index];
case 9:
return (this.data)[index];
case 4:
case 13:
return (this.data)[index];
case 11:
return (this.data)[index];
case 12:
return (this.data)[index];
case 10:
var ivalue=this.getAsSRational$I(index);
return ivalue[0] / ivalue[1];
case 5:
var lvalue=this.getAsRational$I(index);
return lvalue[0] / lvalue[1];
case 2:
var s=(this.data)[index];
return Double.parseDouble$S(s);
default:
throw Clazz.new_(Clazz.load('ClassCastException'));
}
});

Clazz.newMeth(C$, 'getAsString$I', function (index) {
return (this.data)[index];
});

Clazz.newMeth(C$, 'getAsSRational$I', function (index) {
return (this.data)[index];
});

Clazz.newMeth(C$, 'getAsRational$I', function (index) {
return (this.data)[index];
});

Clazz.newMeth(C$, 'getValueAsString$I', function (index) {
switch (this.type) {
case 2:
return (this.data)[index];
case 1:
case 7:
return Integer.toString$I((this.data)[index] & 255);
case 6:
return Integer.toString$I((this.data)[index]);
case 3:
return Integer.toString$I(((this.data)[index]).$c() & 65535);
case 8:
return Integer.toString$I((this.data)[index]);
case 9:
return Integer.toString$I((this.data)[index]);
case 4:
case 13:
return Long.toString$J((this.data)[index]);
case 11:
return Float.toString$F((this.data)[index]);
case 12:
return Double.toString$D((this.data)[index]);
case 10:
var ivalue=this.getAsSRational$I(index);
var srationalString;
if (ivalue[1] != 0 && ivalue[0] % ivalue[1] == 0 ) {
srationalString=Integer.toString$I((ivalue[0]/ivalue[1]|0)) + "/1";
} else {
srationalString=Integer.toString$I(ivalue[0]) + "/" + Integer.toString$I(ivalue[1]) ;
}return srationalString;
case 5:
var lvalue=this.getAsRational$I(index);
var rationalString;
if (lvalue[1] != 0 && lvalue[0] % lvalue[1] == 0 ) {
rationalString=Long.toString$J((lvalue[0]/lvalue[1]|0)) + "/1";
} else {
rationalString=Long.toString$J(lvalue[0]) + "/" + Long.toString$J(lvalue[1]) ;
}return rationalString;
default:
throw Clazz.new_(Clazz.load('ClassCastException'));
}
});

Clazz.newMeth(C$, ['compareTo$O','compareTo$','compareTo$TT'], function (o) {
if (o == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}var oTagNumber=(o).getTagNumber$();
if (this.tagNumber < oTagNumber) {
return -1;
} else if (this.tagNumber > oTagNumber) {
return 1;
} else {
return 0;
}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
