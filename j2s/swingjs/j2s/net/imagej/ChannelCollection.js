(function(){var P$=Clazz.newPackage("net.imagej"),I$=[[0,'java.util.LinkedList','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChannelCollection");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['areInteger'],'O',['channelInfos','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_List.apply(this, [Clazz.new_(1,{E:"Double"},$I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (values) {
;C$.$init$.apply(this);
this.channelInfos=Clazz.new_(1,{E:"Double"},$I$(1,1));
this.channelInfos.addAll$java_util_Collection(values);
if (this.channelInfos.size$() == 0) this.channelInfos.add$TE(new Double(0.0));
this.areInteger=true;
for (var value, $value = this.channelInfos.iterator$(); $value.hasNext$()&&((value=($value.next$())),1);) {
this.areInteger&=((value).valueOf() === Math.floor((value).valueOf()) );
}
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_util_ColorRGB', function (color) {
C$.c$$java_util_List.apply(this, [$I$(2).asList$TTA(Clazz.array(Double, -1, [new Double(color.getRed$()), new Double(color.getGreen$()), new Double(color.getBlue$())]))]);
}, 1);

Clazz.newMeth(C$, 'getChannelCount$', function () {
return this.channelInfos.size$();
});

Clazz.newMeth(C$, 'getChannelValue$J', function (chan) {
if (chan > 2147483647) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["too many channels: " + chan]);
if (chan >= this.channelInfos.size$()) return 0;
return (this.channelInfos.get$I((chan|0))).valueOf();
});

Clazz.newMeth(C$, 'areInteger$', function () {
return this.areInteger;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
