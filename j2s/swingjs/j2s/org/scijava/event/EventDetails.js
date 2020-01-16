(function(){var P$=Clazz.newPackage("org.scijava.event"),p$1={},I$=[[0,'java.util.Date','StringBuilder','java.text.SimpleDateFormat','java.util.Locale']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EventDetails");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['eventString'],'O',['timestamp','java.util.Date','eventType','Class']]]

Clazz.newMeth(C$, 'c$$org_scijava_event_SciJavaEvent', function (event) {
;C$.$init$.apply(this);
this.timestamp=Clazz.new_($I$(1,1));
this.eventType=event.getClass$();
this.eventString=event.toString();
}, 1);

Clazz.newMeth(C$, 'getEventType$', function () {
return this.eventType;
});

Clazz.newMeth(C$, 'getTimestamp$', function () {
return this.timestamp;
});

Clazz.newMeth(C$, 'getEventString$', function () {
return this.eventString;
});

Clazz.newMeth(C$, 'toHTML$Z', function (bold) {
var sb=Clazz.new_($I$(2,1));
sb.append$S("<p style=\"font-family: monospaced;\"");
if (bold) sb.append$S("<b>");
sb.append$S("<font color=\"gray\">[");
sb.append$S(p$1.timestampAsString.apply(this, []));
sb.append$S("] </font>");
sb.append$S("<font color=\"green\">");
sb.append$S(this.eventType.getSimpleName$());
sb.append$S("</font>");
sb.append$S("<font color=\"black\">");
sb.append$S(p$1.htmlize$S.apply(this, [this.eventString]));
sb.append$S("</font>");
if (bold) sb.append$S("</b>");
sb.append$S("</p>");
return sb.toString();
});

Clazz.newMeth(C$, 'timestampAsString', function () {
var formatter=Clazz.new_($I$(3,1).c$$S$java_util_Locale,["hh:mm:ss.SS", $I$(4).getDefault$()]);
var dateStr=formatter.format$java_util_Date(this.timestamp);
return dateStr;
}, p$1);

Clazz.newMeth(C$, 'htmlize$S', function (s) {
var tab="&nbsp;&nbsp;&nbsp;&nbsp;";
return s.replaceAll$S$S("\\t", "&nbsp;&nbsp;&nbsp;&nbsp;").replaceAll$S$S("\\n", "<br>");
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
