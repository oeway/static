(function(){var P$=Clazz.newPackage("io.scif.io.location"),p$1={},I$=[[0,'io.scif.util.FormatTools','io.scif.io.location.TestImgLocation',['io.scif.io.location.TestImgLocation','.Builder'],'java.util.LinkedHashMap','java.net.URI','StringBuilder','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TestImgLocation", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.io.location.AbstractLocation');
C$.$classes$=[['Builder',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.singleValueKeys=Clazz.array(String, -1, ["planarDims", "interleavedDims", "thumbSizeX", "thumbSizeY", "pixelType", "indexed", "falseColor", "little", "metadataComplete", "thumbnail", "orderCertain", "lutLength", "scaleFactor", "images"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['map','java.util.Map','uri','java.net.URI']]
,['O',['singleValueKeys','String[]']]]

Clazz.newMeth(C$, 'builder$', function () {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'defaultTestImg$', function () {
return Clazz.new_($I$(3,1)).build$();
}, 1);

Clazz.newMeth(C$, 'fromMap$java_util_Map', function (map) {
var loc=C$.defaultTestImg$();
var metaData=loc.map;
map.forEach$java_util_function_BiConsumer(((P$.TestImgLocation$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestImgLocation$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (key, value) {
var replaced=this.$finals$.metaData.computeIfPresent$TK$java_util_function_BiFunction(key, (P$.TestImgLocation$lambda1$lambda2$||(P$.TestImgLocation$lambda1$lambda2$=(((P$.TestImgLocation$lambda1$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestImgLocation$lambda1$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (k, v) { return (value);});
})()
), Clazz.new_(1,{T:"? super java.lang.String",U:"? super java.lang.Object",R:"? extends java.lang.Object"},P$.TestImgLocation$lambda1$lambda2.$init$, [this, null]))))));
if (replaced == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["unknown key:" + key]);
}});
})()
), Clazz.new_(1,{T:"? super java.lang.String",U:"? super java.lang.Object"},P$.TestImgLocation$lambda2.$init$, [this, {metaData:metaData}])));
return loc;
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_io_location_TestImgLocation_Builder', function (builder) {
Clazz.super_(C$, this);
this.map=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(4,1));
if (builder.lengths.length != builder.axes.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Configuration  is not valid. Can not have a differing number of axis types: " + builder.axes.length + "; and axis lengths: " + builder.lengths.length + "!" ]);
}this.map.put$TK$TV("name", builder.name);
this.map.put$TK$TV("axes", builder.axes);
this.map.put$TK$TV("lengths", builder.lengths);
this.map.put$TK$TV("scales", builder.scales);
this.map.put$TK$TV("units", builder.units);
this.map.put$TK$TV("planarDims", new Integer(builder.planarDims));
this.map.put$TK$TV("interleavedDims", new Integer(builder.interleavedDims));
this.map.put$TK$TV("thumbSizeX", new Integer(builder.thumbSizeX));
this.map.put$TK$TV("thumbSizeY", new Integer(builder.thumbSizeY));
this.map.put$TK$TV("pixelType", builder.pixelType);
this.map.put$TK$TV("indexed", new Boolean(builder.indexed));
this.map.put$TK$TV("falseColor", new Boolean(builder.falseColor));
this.map.put$TK$TV("little", new Boolean(builder.little));
this.map.put$TK$TV("metadataComplete", new Boolean(builder.metadataComplete));
this.map.put$TK$TV("thumbnail", new Boolean(builder.thumbnail));
this.map.put$TK$TV("orderCertain", new Boolean(builder.orderCertain));
this.map.put$TK$TV("lutLength", new Integer(builder.lutLength));
this.map.put$TK$TV("scaleFactor", new Integer(builder.scaleFactor));
this.map.put$TK$TV("images", new Integer(builder.images));
}, 1);

Clazz.newMeth(C$, 'getMetadataMap$', function () {
return this.map;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var prime=31;
var result=C$.superclazz.prototype.hashCode$.apply(this, []);
result=31 * result + ((this.map == null ) ? 0 : this.map.hashCode$());
return result;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) return true;
if (!C$.superclazz.prototype.equals$O.apply(this, [obj])) return false;
if (this.getClass$() !== obj.getClass$() ) return false;
var other=obj;
if (this.map == null ) {
if (other.map != null ) return false;
} else if (!this.map.equals$O(other.map)) return false;
return true;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.map.get$O("name") + ".scifioTestImg";
});

Clazz.newMeth(C$, 'getURI$', function () {
if (this.uri == null ) {
this.uri=$I$(5).create$S(p$1.getKeyValueStrings.apply(this, []));
}return this.uri;
});

Clazz.newMeth(C$, 'getKeyValueStrings', function () {
var b=Clazz.new_($I$(6,1));
b.append$S("scifioTestImg://");
b.append$O(this.map.get$O("name"));
var regex="\\[|\\]|\\s";
b.append$S("?");
var otherEntries=this.map.entrySet$().stream$().filter$java_util_function_Predicate((P$.TestImgLocation$lambda3$||(P$.TestImgLocation$lambda3$=(((P$.TestImgLocation$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestImgLocation$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (e) { return (!e.getKey$().equals$O("name"));});
})()
), Clazz.new_(1,{T:"? super java.util.Map.Entry"},P$.TestImgLocation$lambda3.$init$, [this, null]))))));
otherEntries.forEach$java_util_function_Consumer(((P$.TestImgLocation$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TestImgLocation$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (e) {
this.$finals$.b.append$S(e.getKey$());
this.$finals$.b.append$S("=");
var val=e.getValue$();
if (Clazz.instanceOf(val, Clazz.array(String, -1))) {
this.$finals$.b.append$S($I$(7).toString$OA(val).replaceAll$S$S("\\[|\\]|\\s", ""));
} else if (Clazz.instanceOf(val, Clazz.array(Integer.TYPE, -1))) {
this.$finals$.b.append$S($I$(7).toString$IA(val).replaceAll$S$S("\\[|\\]|\\s", ""));
} else if (Clazz.instanceOf(val, Clazz.array(Long.TYPE, -1))) {
this.$finals$.b.append$S($I$(7).toString$JA(val).replaceAll$S$S("\\[|\\]|\\s", ""));
} else if (Clazz.instanceOf(val, Clazz.array(Double.TYPE, -1))) {
this.$finals$.b.append$S($I$(7).toString$DA(val).replaceAll$S$S("\\[|\\]|\\s", ""));
} else if (Clazz.instanceOf(val, "java.util.List")) {
this.$finals$.b.append$S(val.toString().replaceAll$S$S("\\[|\\]|\\s", ""));
} else {
this.$finals$.b.append$S(val.toString());
}this.$finals$.b.append$S("&");
});
})()
), Clazz.new_(1,{T:"? super java.util.Map.Entry"},P$.TestImgLocation$lambda4.$init$, [this, {b:b}])));
b.replace$I$I$S(b.length$() - 1, b.length$(), "");
return b.toString();
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
return this.getURI$().toString();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TestImgLocation, "Builder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.name="testImage";
this.axes=Clazz.array(String, -1, ["X", "Y"]);
this.lengths=Clazz.array(Long.TYPE, -1, [512, 512]);
this.scales=Clazz.array(Double.TYPE, -1, [1.0, 1.0]);
this.units=Clazz.array(String, -1, ["um", "um"]);
this.planarDims=-1;
this.interleavedDims=-1;
this.thumbSizeX=0;
this.thumbSizeY=0;
this.pixelType=$I$(1).getPixelTypeString$I(1);
this.indexed=false;
this.falseColor=false;
this.little=true;
this.metadataComplete=true;
this.thumbnail=false;
this.orderCertain=true;
this.lutLength=3;
this.scaleFactor=1;
this.images=1;
}, 1);

C$.$fields$=[['Z',['indexed','falseColor','little','metadataComplete','thumbnail','orderCertain'],'I',['planarDims','interleavedDims','thumbSizeX','thumbSizeY','lutLength','scaleFactor','images'],'S',['name','pixelType'],'O',['axes','String[]','lengths','long[]','scales','double[]','units','String[]']]]

Clazz.newMeth(C$, 'build$', function () {
return Clazz.new_($I$(2,1).c$$io_scif_io_location_TestImgLocation_Builder,[this]);
});

Clazz.newMeth(C$, 'name$S', function (name) {
this.name=name;
return this;
});

Clazz.newMeth(C$, 'axes$SA', function (axes) {
this.axes=axes;
return this;
});

Clazz.newMeth(C$, 'lengths$JA', function (lengths) {
this.lengths=lengths;
return this;
});

Clazz.newMeth(C$, 'scales$DA', function (scales) {
this.scales=scales;
return this;
});

Clazz.newMeth(C$, 'units$SA', function (units) {
this.units=units;
return this;
});

Clazz.newMeth(C$, 'planarDims$I', function (planarDims) {
this.planarDims=planarDims;
return this;
});

Clazz.newMeth(C$, 'interleavedDims$I', function (interleavedDims) {
this.interleavedDims=interleavedDims;
return this;
});

Clazz.newMeth(C$, 'thumbSizeX$I', function (thumbSizeX) {
this.thumbSizeX=thumbSizeX;
return this;
});

Clazz.newMeth(C$, 'thumbSizeY$I', function (thumbSizeY) {
this.thumbSizeY=thumbSizeY;
return this;
});

Clazz.newMeth(C$, 'pixelType$S', function (pixelType) {
this.pixelType=pixelType;
return this;
});

Clazz.newMeth(C$, 'indexed$Z', function (indexed) {
this.indexed=indexed;
return this;
});

Clazz.newMeth(C$, 'falseColor$Z', function (falseColor) {
this.falseColor=falseColor;
return this;
});

Clazz.newMeth(C$, 'little$Z', function (little) {
this.little=little;
return this;
});

Clazz.newMeth(C$, 'metadataComplete$Z', function (metadataComplete) {
this.metadataComplete=metadataComplete;
return this;
});

Clazz.newMeth(C$, 'thumbnail$Z', function (thumbnail) {
this.thumbnail=thumbnail;
return this;
});

Clazz.newMeth(C$, 'orderCertain$Z', function (orderCertain) {
this.orderCertain=orderCertain;
return this;
});

Clazz.newMeth(C$, 'lutLength$I', function (lutLength) {
this.lutLength=lutLength;
return this;
});

Clazz.newMeth(C$, 'scaleFactor$I', function (scaleFactor) {
this.scaleFactor=scaleFactor;
return this;
});

Clazz.newMeth(C$, 'images$I', function (images) {
this.images=images;
return this;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
