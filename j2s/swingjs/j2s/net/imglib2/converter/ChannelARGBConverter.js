(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[[0,'java.util.ArrayList',['net.imglib2.converter.ChannelARGBConverter','.Channel']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChannelARGBConverter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.converter.Converter');
C$.$classes$=[['Channel',25]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
C$.converterListRGBA=Clazz.new_(1,{E:"net.imglib2.converter.Converter"},$I$(1,1));
C$.converterListRGBA.add$TE(Clazz.new_(C$.c$$net_imglib2_converter_ChannelARGBConverter_Channel,[$I$(2).R]));
C$.converterListRGBA.add$TE(Clazz.new_(C$.c$$net_imglib2_converter_ChannelARGBConverter_Channel,[$I$(2).G]));
C$.converterListRGBA.add$TE(Clazz.new_(C$.c$$net_imglib2_converter_ChannelARGBConverter_Channel,[$I$(2).B]));
C$.converterListRGBA.add$TE(Clazz.new_(C$.c$$net_imglib2_converter_ChannelARGBConverter_Channel,[$I$(2).A]));
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['shift']]
,['O',['converterListRGBA','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$net_imglib2_converter_ChannelARGBConverter_Channel', function (channel) {
;C$.$init$.apply(this);
this.shift=channel.shift;
}, 1);

Clazz.newMeth(C$, ['convert$net_imglib2_type_numeric_integer_UnsignedByteType$net_imglib2_type_numeric_ARGBType','convert$','convert$TA$TB'], function (input, output) {
output.set$I(input.get$() << this.shift);
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.ChannelARGBConverter, "Channel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I, "A", 0, [24]);
Clazz.newEnumConst($vals, C$.c$$I, "R", 1, [16]);
Clazz.newEnumConst($vals, C$.c$$I, "G", 2, [8]);
Clazz.newEnumConst($vals, C$.c$$I, "B", 3, [0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['shift']]]

Clazz.newMeth(C$, 'c$$I', function (shift) {
;C$.$init$.apply(this);
this.shift=shift;
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
