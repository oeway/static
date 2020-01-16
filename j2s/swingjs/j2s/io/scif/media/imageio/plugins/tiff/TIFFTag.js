(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFTag");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.sizeOfType=Clazz.array(Integer.TYPE, -1, [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4]);
}

Clazz.newMeth(C$, '$init$', function () {
this.tagSet=null;
this.valueNames=null;
}, 1);

C$.$fields$=[['I',['number','dataTypes'],'S',['name'],'O',['tagSet','io.scif.media.imageio.plugins.tiff.TIFFTagSet','valueNames','java.util.Map']]
,['O',['sizeOfType','int[]']]]

Clazz.newMeth(C$, 'c$$S$I$I$io_scif_media_imageio_plugins_tiff_TIFFTagSet', function (name, number, dataTypes, tagSet) {
;C$.$init$.apply(this);
this.name=name;
this.number=number;
this.dataTypes=dataTypes;
this.tagSet=tagSet;
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I', function (name, number, dataTypes) {
C$.c$$S$I$I$io_scif_media_imageio_plugins_tiff_TIFFTagSet.apply(this, [name, number, dataTypes, null]);
}, 1);

Clazz.newMeth(C$, 'getSizeOfType$I', function (dataType) {
if (dataType < 1 || dataType > 13 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dataType out of range!"]);
}return C$.sizeOfType[dataType];
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'getNumber$', function () {
return this.number;
});

Clazz.newMeth(C$, 'getDataTypes$', function () {
return this.dataTypes;
});

Clazz.newMeth(C$, 'isDataTypeOK$I', function (dataType) {
if (dataType < 1 || dataType > 13 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["datatype not in range!"]);
}return (this.dataTypes & (1 << dataType)) != 0;
});

Clazz.newMeth(C$, 'getTagSet$', function () {
return this.tagSet;
});

Clazz.newMeth(C$, 'isIFDPointer$', function () {
return this.tagSet != null  || ((this.dataTypes & (8192)) != 0) ;
});

Clazz.newMeth(C$, 'hasValueNames$', function () {
return this.valueNames != null ;
});

Clazz.newMeth(C$, 'addValueName$I$S', function (value, name) {
if (this.valueNames == null ) {
this.valueNames=Clazz.new_($I$(1,1));
}this.valueNames.put$TK$TV( new Integer(value), name);
});

Clazz.newMeth(C$, 'getValueName$I', function (value) {
if (this.valueNames == null ) {
return null;
}return this.valueNames.get$O( new Integer(value));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
