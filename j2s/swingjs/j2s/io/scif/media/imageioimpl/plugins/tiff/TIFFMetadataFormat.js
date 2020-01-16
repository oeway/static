(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'java.util.HashMap','java.util.Locale','java.util.ResourceBundle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFMetadataFormat", null, null, 'javax.imageio.metadata.IIOMetadataFormat');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.elementInfoMap=Clazz.new_($I$(1,1));
this.attrInfoMap=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['S',['resourceBaseName','rootName'],'O',['elementInfoMap','java.util.Map','+attrInfoMap']]]

Clazz.newMeth(C$, 'getRootName$', function () {
return this.rootName;
});

Clazz.newMeth(C$, 'getResource$S$java_util_Locale', function (key, locale) {
if (locale == null ) {
locale=$I$(2).getDefault$();
}try {
var bundle=$I$(3).getBundle$S$java_util_Locale(this.resourceBaseName, locale);
return bundle.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
return null;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getElementInfo$S', function (elementName) {
if (elementName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["elementName == null!"]);
}var info=this.elementInfoMap.get$O(elementName);
if (info == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such element: " + elementName]);
}return info;
}, p$1);

Clazz.newMeth(C$, 'getAttrInfo$S$S', function (elementName, attrName) {
if (elementName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["elementName == null!"]);
}if (attrName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["attrName == null!"]);
}var key=elementName + "/" + attrName ;
var info=this.attrInfoMap.get$O(key);
if (info == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such attribute: " + key]);
}return info;
}, p$1);

Clazz.newMeth(C$, 'getElementMinChildren$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
return info.minChildren;
});

Clazz.newMeth(C$, 'getElementMaxChildren$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
return info.maxChildren;
});

Clazz.newMeth(C$, 'getElementDescription$S$java_util_Locale', function (elementName, locale) {
if (!this.elementInfoMap.containsKey$O(elementName)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such element: " + elementName]);
}return p$1.getResource$S$java_util_Locale.apply(this, [elementName, locale]);
});

Clazz.newMeth(C$, 'getChildPolicy$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
return info.childPolicy;
});

Clazz.newMeth(C$, 'getChildNames$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
return info.childNames;
});

Clazz.newMeth(C$, 'getAttributeNames$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
return info.attributeNames;
});

Clazz.newMeth(C$, 'getAttributeValueType$S$S', function (elementName, attrName) {
var info=p$1.getAttrInfo$S$S.apply(this, [elementName, attrName]);
return info.valueType;
});

Clazz.newMeth(C$, 'getAttributeDataType$S$S', function (elementName, attrName) {
var info=p$1.getAttrInfo$S$S.apply(this, [elementName, attrName]);
return info.dataType;
});

Clazz.newMeth(C$, 'isAttributeRequired$S$S', function (elementName, attrName) {
var info=p$1.getAttrInfo$S$S.apply(this, [elementName, attrName]);
return info.isRequired;
});

Clazz.newMeth(C$, 'getAttributeDefaultValue$S$S', function (elementName, attrName) {
var info=p$1.getAttrInfo$S$S.apply(this, [elementName, attrName]);
return info.defaultValue;
});

Clazz.newMeth(C$, 'getAttributeEnumerations$S$S', function (elementName, attrName) {
var info=p$1.getAttrInfo$S$S.apply(this, [elementName, attrName]);
return info.enumerations;
});

Clazz.newMeth(C$, 'getAttributeMinValue$S$S', function (elementName, attrName) {
var info=p$1.getAttrInfo$S$S.apply(this, [elementName, attrName]);
return info.minValue;
});

Clazz.newMeth(C$, 'getAttributeMaxValue$S$S', function (elementName, attrName) {
var info=p$1.getAttrInfo$S$S.apply(this, [elementName, attrName]);
return info.maxValue;
});

Clazz.newMeth(C$, 'getAttributeListMinLength$S$S', function (elementName, attrName) {
var info=p$1.getAttrInfo$S$S.apply(this, [elementName, attrName]);
return info.listMinLength;
});

Clazz.newMeth(C$, 'getAttributeListMaxLength$S$S', function (elementName, attrName) {
var info=p$1.getAttrInfo$S$S.apply(this, [elementName, attrName]);
return info.listMaxLength;
});

Clazz.newMeth(C$, 'getAttributeDescription$S$S$java_util_Locale', function (elementName, attrName, locale) {
var key=elementName + "/" + attrName ;
if (!this.attrInfoMap.containsKey$O(key)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such attribute: " + key]);
}return p$1.getResource$S$java_util_Locale.apply(this, [key, locale]);
});

Clazz.newMeth(C$, 'getObjectValueType$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
return info.objectValueType;
});

Clazz.newMeth(C$, 'getObjectClass$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
if (info.objectValueType == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Element cannot contain an object value: " + elementName]);
}return info.objectClass;
});

Clazz.newMeth(C$, 'getObjectDefaultValue$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
if (info.objectValueType == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Element cannot contain an object value: " + elementName]);
}return info.objectDefaultValue;
});

Clazz.newMeth(C$, 'getObjectEnumerations$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
if (info.objectValueType == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Element cannot contain an object value: " + elementName]);
}return info.objectEnumerations;
});

Clazz.newMeth(C$, 'getObjectMinValue$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
if (info.objectValueType == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Element cannot contain an object value: " + elementName]);
}return info.objectMinValue;
});

Clazz.newMeth(C$, 'getObjectMaxValue$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
if (info.objectValueType == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Element cannot contain an object value: " + elementName]);
}return info.objectMaxValue;
});

Clazz.newMeth(C$, 'getObjectArrayMinLength$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
if (info.objectValueType == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Element cannot contain an object value: " + elementName]);
}return info.objectArrayMinLength;
});

Clazz.newMeth(C$, 'getObjectArrayMaxLength$S', function (elementName) {
var info=p$1.getElementInfo$S.apply(this, [elementName]);
if (info.objectValueType == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Element cannot contain an object value: " + elementName]);
}return info.objectArrayMaxLength;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
