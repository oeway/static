(function(){var P$=java.util,p$1={},I$=[[0,'java.util.HashMap','StringBuilder','InternalError']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Locale", null, null, ['Cloneable', 'java.io.Serializable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.cache=Clazz.new_(1,{K:"String",V:"java.util.Locale"},$I$(1,1).c$$I,[32]);
C$.ENGLISH=C$.createSingleton$S$S$S("en__", "en", "");
C$.UK=C$.createSingleton$S$S$S("en_GB_", "en", "US");
C$.US=C$.createSingleton$S$S$S("en_US_", "en", "US");
C$.ROOT=C$.createSingleton$S$S$S("__", "", "");
C$.defaultLocale=null;
}

Clazz.newMeth(C$, '$init$', function () {
this.hashCodeValue=0;
}, 1);

C$.$fields$=[['I',['hashCodeValue'],'S',['language','country','variant']]
,['O',['cache','java.util.HashMap','ENGLISH','java.util.Locale','+UK','+US','+ROOT','+defaultLocale']]]

Clazz.newMeth(C$, 'c$$S$S$S', function (language, country, variant) {
;C$.$init$.apply(this);
this.language=language.toLowerCase$().intern$();
this.country=country.toUpperCase$().intern$();
this.variant=variant.toUpperCase$().intern$();
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (language, country) {
C$.c$$S$S$S.apply(this, [language, country, ""]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (language) {
C$.c$$S$S$S.apply(this, [language, "", ""]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Z', function (language, country, flag) {
;C$.$init$.apply(this);
this.language=language;
this.country=country;
this.variant="";
}, 1);

Clazz.newMeth(C$, 'createSingleton$S$S$S', function (key, language, country) {
var locale=Clazz.new_(C$.c$$S$S$Z,[language, country, false]);
C$.cache.put$TK$TV(key, locale);
return locale;
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S$S', function (language, country, variant) {
if (language == null  || country == null   || variant == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var sb=Clazz.new_($I$(2,1));
sb.append$S(language).append$C("_").append$S(country).append$C("_").append$S(variant);
var key=sb.toString();
var locale=C$.cache.get$O(key);
if (locale == null ) {
locale=Clazz.new_(C$.c$$S$S$S,[language, country, variant]);
var l=C$.cache.put$TK$TV(key, locale);
if (l != null ) {
locale=l;
}}return locale;
}, 1);

Clazz.newMeth(C$, 'getDefault$', function () {
if (C$.defaultLocale == null ) {
C$.defaultLocale=Clazz.new_(C$.c$$S$S$S,["en", "US", ""]);
}return C$.defaultLocale;
}, 1);

Clazz.newMeth(C$, 'setDefault$java_util_Locale', function (newLocale) {
if (newLocale == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Can\'t set default locale to NULL"]);
C$.defaultLocale=newLocale;
}, 1);

Clazz.newMeth(C$, 'getLanguage$', function () {
return this.language;
});

Clazz.newMeth(C$, 'getCountry$', function () {
return this.country;
});

Clazz.newMeth(C$, 'getVariant$', function () {
return this.variant;
});

Clazz.newMeth(C$, 'toString', function () {
var l=this.language.length$() != 0;
var c=this.country.length$() != 0;
var v=this.variant.length$() != 0;
var result=Clazz.new_($I$(2,1).c$$S,[this.language]);
if (c || (l && v ) ) {
result.append$C("_").append$S(this.country);
}if (v && (l || c ) ) {
result.append$C("_").append$S(this.variant);
}return result.toString();
});

Clazz.newMeth(C$, 'getDisplayLanguage$', function () {
return this.getDisplayLanguage$java_util_Locale(C$.getDefault$());
});

Clazz.newMeth(C$, 'getDisplayLanguage$java_util_Locale', function (inLocale) {
return p$1.getDisplayString$S$java_util_Locale$I.apply(this, [this.language, inLocale, 0]);
});

Clazz.newMeth(C$, 'getDisplayCountry$', function () {
return this.getDisplayCountry$java_util_Locale(C$.getDefault$());
});

Clazz.newMeth(C$, 'getDisplayCountry$java_util_Locale', function (inLocale) {
return p$1.getDisplayString$S$java_util_Locale$I.apply(this, [this.country, inLocale, 1]);
});

Clazz.newMeth(C$, 'getDisplayString$S$java_util_Locale$I', function (code, inLocale, type) {
if (code.length$() == 0) {
return "";
}if (inLocale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return inLocale.toString();
}, p$1);

Clazz.newMeth(C$, 'getDisplayVariant$', function () {
return this.getDisplayVariant$java_util_Locale(C$.getDefault$());
});

Clazz.newMeth(C$, 'getDisplayVariant$java_util_Locale', function (inLocale) {
if (this.variant.length$() == 0) return "";
return this.variant;
});

Clazz.newMeth(C$, 'getDisplayName$', function () {
return this.getDisplayName$java_util_Locale(C$.getDefault$());
});

Clazz.newMeth(C$, 'getDisplayName$java_util_Locale', function (inLocale) {
return inLocale.toString();
});

Clazz.newMeth(C$, 'clone$', function () {
try {
var that=Clazz.clone(this);
return that;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(3,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'hashCode$', function () {
var hc=this.hashCodeValue;
if (hc == 0) {
hc=(this.language.hashCode$() << 8) ^ this.country.hashCode$() ^ (this.variant.hashCode$() << 4) ;
this.hashCodeValue=hc;
}return hc;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) return true;
if (!(Clazz.instanceOf(obj, "java.util.Locale"))) return false;
var other=obj;
return this.language == other.language && this.country == other.country  && this.variant == other.variant ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
