(function(){var P$=Clazz.newPackage("net.imagej.options"),p$1={},I$=[[0,'org.scijava.util.Colors','org.scijava.options.event.OptionsEvent','org.scijava.util.Prefs','org.scijava.util.ColorRGB','java.util.LinkedList','net.imagej.ChannelCollection','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OptionsChannels", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fgValuesString="255,255,255";
this.bgValuesString="0,0,0";
this.lastFgColor=$I$(1).WHITE;
this.lastBgColor=$I$(1).BLACK;
}, 1);

C$.$fields$=[['S',['fgValuesString','bgValuesString'],'O',['lastFgColor','org.scijava.util.ColorRGB','+lastBgColor','fgValues','net.imagej.ChannelCollection','+bgValues']]]

Clazz.newMeth(C$, 'getFgValues$', function () {
return this.fgValues;
});

Clazz.newMeth(C$, 'getBgValues$', function () {
return this.bgValues;
});

Clazz.newMeth(C$, 'setFgValues$net_imagej_ChannelCollection', function (vals) {
this.fgValues=vals;
this.fgValuesString=p$1.encode$net_imagej_ChannelCollection.apply(this, [this.fgValues]);
});

Clazz.newMeth(C$, 'setBgValues$net_imagej_ChannelCollection', function (vals) {
this.bgValues=vals;
this.bgValuesString=p$1.encode$net_imagej_ChannelCollection.apply(this, [this.bgValues]);
});

Clazz.newMeth(C$, 'getLastFgColor$', function () {
return this.lastFgColor;
});

Clazz.newMeth(C$, 'getLastBgColor$', function () {
return this.lastBgColor;
});

Clazz.newMeth(C$, 'setLastFgColor$org_scijava_util_ColorRGB', function (c) {
this.setLastFgColor$org_scijava_util_ColorRGB$Z(c, true);
});

Clazz.newMeth(C$, 'setLastFgColor$org_scijava_util_ColorRGB$Z', function (c, notifyIJ1) {
this.lastFgColor=c;
if (notifyIJ1) this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$org_scijava_options_OptionsPlugin,[this]));
});

Clazz.newMeth(C$, 'setLastBgColor$org_scijava_util_ColorRGB', function (c) {
this.setLastBgColor$org_scijava_util_ColorRGB$Z(c, true);
});

Clazz.newMeth(C$, 'setLastBgColor$org_scijava_util_ColorRGB$Z', function (c, notifyIJ1) {
this.lastBgColor=c;
if (notifyIJ1) this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$org_scijava_options_OptionsPlugin,[this]));
});

Clazz.newMeth(C$, 'load$', function () {
C$.superclazz.prototype.load$.apply(this, []);
this.fgValues=p$1.decode$S.apply(this, [this.fgValuesString]);
this.bgValues=p$1.decode$S.apply(this, [this.bgValuesString]);
var r;
var g;
var b;
r=$I$(3).getInt$Class$S$I(this.getClass$(), "lastFgColor.red", 255);
g=$I$(3).getInt$Class$S$I(this.getClass$(), "lastFgColor.green", 255);
b=$I$(3).getInt$Class$S$I(this.getClass$(), "lastFgColor.blue", 255);
this.lastFgColor=Clazz.new_($I$(4,1).c$$I$I$I,[r, g, b]);
r=$I$(3).getInt$Class$S$I(this.getClass$(), "lastBgColor.red", 0);
g=$I$(3).getInt$Class$S$I(this.getClass$(), "lastBgColor.green", 0);
b=$I$(3).getInt$Class$S$I(this.getClass$(), "lastBgColor.blue", 0);
this.lastBgColor=Clazz.new_($I$(4,1).c$$I$I$I,[r, g, b]);
});

Clazz.newMeth(C$, 'save$', function () {
$I$(3).put$Class$S$I(this.getClass$(), "lastFgColor.red", this.lastFgColor.getRed$());
$I$(3).put$Class$S$I(this.getClass$(), "lastFgColor.green", this.lastFgColor.getGreen$());
$I$(3).put$Class$S$I(this.getClass$(), "lastFgColor.blue", this.lastFgColor.getBlue$());
$I$(3).put$Class$S$I(this.getClass$(), "lastBgColor.red", this.lastBgColor.getRed$());
$I$(3).put$Class$S$I(this.getClass$(), "lastBgColor.green", this.lastBgColor.getGreen$());
$I$(3).put$Class$S$I(this.getClass$(), "lastBgColor.blue", this.lastBgColor.getBlue$());
p$1.cleanStrings.apply(this, []);
C$.superclazz.prototype.save$.apply(this, []);
});

Clazz.newMeth(C$, 'decode$S', function (channelString) {
var collection=Clazz.new_(1,{E:"Double"},$I$(5,1));
var values=channelString.split$S(",");
for (var value, $value = 0, $$value = values; $value<$$value.length&&((value=($$value[$value])),1);$value++) {
var val;
try {
val=Double.parseDouble$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
val=0;
} else {
throw e;
}
}
collection.add$TE(new Double(val));
}
return Clazz.new_($I$(6,1).c$$java_util_List,[collection]);
}, p$1);

Clazz.newMeth(C$, 'encode$net_imagej_ChannelCollection', function (chans) {
var builder=Clazz.new_($I$(7,1));
var count=chans.getChannelCount$();
for (var i=0; i < count; i++) {
var valString;
var value=chans.getChannelValue$J(i);
if (value == Math.floor(value) ) {
valString=String.format$S$OA("%d", [new Long((value|0))]);
} else valString=String.format$S$OA("%f", [new Double(value)]);
if (i != 0) builder.append$S(",");
builder.append$S(valString);
}
return builder.toString();
}, p$1);

Clazz.newMeth(C$, 'cleanStrings', function () {
if (p$1.goodFormat$S.apply(this, [this.fgValuesString])) {
this.fgValuesString=p$1.noWhitespace$S.apply(this, [this.fgValuesString]);
} else this.fgValuesString=p$1.encode$net_imagej_ChannelCollection.apply(this, [this.fgValues]);
if (p$1.goodFormat$S.apply(this, [this.bgValuesString])) {
this.bgValuesString=p$1.noWhitespace$S.apply(this, [this.bgValuesString]);
} else this.bgValuesString=p$1.encode$net_imagej_ChannelCollection.apply(this, [this.bgValues]);
}, p$1);

Clazz.newMeth(C$, 'goodFormat$S', function (valuesString) {
var values=valuesString.split$S(",");
for (var value, $value = 0, $$value = values; $value<$$value.length&&((value=($$value[$value])),1);$value++) {
try {
Double.parseDouble$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return false;
} else {
throw e;
}
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'noWhitespace$S', function (str) {
var builder=Clazz.new_($I$(7,1));
var len=str.length$();
for (var i=0; i < len; i++) {
var ch=str.charAt$I(i);
if (!Character.isWhitespace$C(ch)) builder.append$C(ch);
}
return builder.toString();
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsChannels',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Channels..., weight = 9)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['fgValuesString','String',null,['org.scijava.plugin.Parameter']],['label="Foreground values" ']],
  [['bgValuesString','.',null,['org.scijava.plugin.Parameter']],['label="Background values" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
