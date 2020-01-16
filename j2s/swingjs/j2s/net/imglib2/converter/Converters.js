(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[[0,'net.imglib2.converter.TypeIdentity','net.imglib2.converter.read.ConvertedRandomAccessible','net.imglib2.converter.readwrite.WriteConvertedRandomAccessible','net.imglib2.converter.read.ConvertedRandomAccessibleInterval','net.imglib2.converter.readwrite.WriteConvertedRandomAccessibleInterval','net.imglib2.converter.read.ConvertedIterableInterval','net.imglib2.converter.readwrite.WriteConvertedIterableInterval','net.imglib2.converter.readwrite.WriteConvertedIterableRandomAccessibleInterval','net.imglib2.converter.read.ConvertedRealRandomAccessibleRealInterval','net.imglib2.converter.read.ConvertedRealRandomAccessible','net.imglib2.converter.readwrite.ARGBChannelSamplerConverter','net.imglib2.view.Views','java.util.ArrayList','net.imglib2.converter.readwrite.CompositeARGBSamplerConverter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Converters");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$net_imglib2_RandomAccessible$net_imglib2_converter_Converter$TB', function (source, converter, b) {
if (Clazz.getClass($I$(1)).isInstance$O(converter)) return source;
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(2,1).c$$net_imglib2_RandomAccessible$net_imglib2_converter_Converter$TB,[source, converter, b]);
}, 1);

Clazz.newMeth(C$, 'convert$net_imglib2_RandomAccessible$net_imglib2_converter_readwrite_SamplerConverter', function (source, converter) {
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(3,1).c$$net_imglib2_RandomAccessible$net_imglib2_converter_readwrite_SamplerConverter,[source, converter]);
}, 1);

Clazz.newMeth(C$, 'convert$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_Converter$TB', function (source, converter, b) {
if (Clazz.getClass($I$(1)).isInstance$O(converter)) return source;
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(4,1).c$$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_Converter$TB,[source, converter, b]);
}, 1);

Clazz.newMeth(C$, 'convert$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_readwrite_SamplerConverter', function (source, converter) {
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(5,1).c$$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_readwrite_SamplerConverter,[source, converter]);
}, 1);

Clazz.newMeth(C$, 'convert$net_imglib2_IterableInterval$net_imglib2_converter_Converter$TB', function (source, converter, b) {
if (Clazz.getClass($I$(1)).isInstance$O(converter)) return source;
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(6,1).c$$net_imglib2_IterableInterval$net_imglib2_converter_Converter$TB,[source, converter, b]);
}, 1);

Clazz.newMeth(C$, 'convert$net_imglib2_IterableInterval$net_imglib2_converter_readwrite_SamplerConverter', function (source, converter) {
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(7,1).c$$net_imglib2_IterableInterval$net_imglib2_converter_readwrite_SamplerConverter,[source, converter]);
}, 1);

Clazz.newMeth(C$, 'convertRandomAccessibleIterableInterval$TS$net_imglib2_converter_readwrite_SamplerConverter', function (source, converter) {
return Clazz.new_(1,{A:"Object",B:"Object",S:"Object"},$I$(8,1).c$$TS$net_imglib2_converter_readwrite_SamplerConverter,[source, converter]);
}, 1);

Clazz.newMeth(C$, 'convert$net_imglib2_RealRandomAccessibleRealInterval$net_imglib2_converter_Converter$TB', function (source, converter, b) {
if (Clazz.getClass($I$(1)).isInstance$O(converter)) return source;
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(9,1).c$$net_imglib2_RealRandomAccessibleRealInterval$net_imglib2_converter_Converter$TB,[source, converter, b]);
}, 1);

Clazz.newMeth(C$, 'convert$net_imglib2_RealRandomAccessible$net_imglib2_converter_Converter$TB', function (source, converter, b) {
if (Clazz.getClass($I$(1)).isInstance$O(converter)) return source;
return Clazz.new_(1,{A:"Object",B:"Object"},$I$(10,1).c$$net_imglib2_RealRandomAccessible$net_imglib2_converter_Converter$TB,[source, converter, b]);
}, 1);

Clazz.newMeth(C$, 'argbChannel$net_imglib2_RandomAccessibleInterval$I', function (source, channel) {
return C$.convert$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_readwrite_SamplerConverter(source, Clazz.new_($I$(11,1).c$$I,[channel]));
}, 1);

Clazz.newMeth(C$, 'argbChannel$net_imglib2_RandomAccessible$I', function (source, channel) {
return C$.convert$net_imglib2_RandomAccessible$net_imglib2_converter_readwrite_SamplerConverter(source, Clazz.new_($I$(11,1).c$$I,[channel]));
}, 1);

Clazz.newMeth(C$, 'argbChannels$net_imglib2_RandomAccessibleInterval', function (source) {
return $I$(12).stack$net_imglib2_RandomAccessibleIntervalA([C$.argbChannel$net_imglib2_RandomAccessibleInterval$I(source, 0), C$.argbChannel$net_imglib2_RandomAccessibleInterval$I(source, 1), C$.argbChannel$net_imglib2_RandomAccessibleInterval$I(source, 2), C$.argbChannel$net_imglib2_RandomAccessibleInterval$I(source, 3)]);
}, 1);

Clazz.newMeth(C$, 'argbChannels$net_imglib2_RandomAccessibleInterval$IA', function (source, channels) {
var hyperSlices=Clazz.new_(1,{E:"net.imglib2.RandomAccessibleInterval"},$I$(13,1));
for (var channel, $channel = 0, $$channel = channels; $channel<$$channel.length&&((channel=($$channel[$channel])),1);$channel++) hyperSlices.add$TE(C$.argbChannel$net_imglib2_RandomAccessibleInterval$I(source, channel));

return $I$(12).stack$java_util_List(hyperSlices);
}, 1);

Clazz.newMeth(C$, 'mergeARGB$net_imglib2_RandomAccessible$net_imglib2_converter_ColorChannelOrder', function (source, channelOrder) {
return C$.convert$net_imglib2_RandomAccessible$net_imglib2_converter_readwrite_SamplerConverter($I$(12).collapse$net_imglib2_RandomAccessible(source), Clazz.new_($I$(14,1).c$$net_imglib2_converter_ColorChannelOrder,[channelOrder]));
}, 1);

Clazz.newMeth(C$, 'mergeARGB$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_ColorChannelOrder', function (source, channelOrder) {
var channelAxis=source.numDimensions$() - 1;
if (source.min$I(channelAxis) > 0 || source.max$I(channelAxis) < channelOrder.channelCount$() - 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return C$.convert$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_readwrite_SamplerConverter($I$(12).collapse$net_imglib2_RandomAccessibleInterval(source), Clazz.new_($I$(14,1).c$$net_imglib2_converter_ColorChannelOrder,[channelOrder]));
}, 1);

Clazz.newMeth(C$, 'composeReal$java_util_List$net_imglib2_converter_Converter$TB', function (components, composer, targetType) {
return C$.convert$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_Converter$TB($I$(12).collapseReal$net_imglib2_RandomAccessibleInterval($I$(12).stack$java_util_List(components)), composer, targetType);
}, 1);

Clazz.newMeth(C$, 'composeReal$java_util_List$net_imglib2_converter_Converter$java_util_function_Supplier', function (components, composer, targetTypeSupplier) {
return C$.composeReal$java_util_List$net_imglib2_converter_Converter$TB(components, composer, targetTypeSupplier.get$());
}, 1);

Clazz.newMeth(C$, 'composeNumeric$java_util_List$net_imglib2_converter_Converter$TB', function (components, composer, targetType) {
return C$.convert$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_Converter$TB($I$(12).collapseNumeric$net_imglib2_RandomAccessibleInterval($I$(12).stack$java_util_List(components)), composer, targetType);
}, 1);

Clazz.newMeth(C$, 'composeNumeric$java_util_List$net_imglib2_converter_Converter$java_util_function_Supplier', function (components, composer, targetTypeSupplier) {
return C$.composeNumeric$java_util_List$net_imglib2_converter_Converter$TB(components, composer, targetTypeSupplier.get$());
}, 1);

Clazz.newMeth(C$, 'compose$java_util_List$net_imglib2_converter_Converter$TB', function (components, composer, targetType) {
return C$.convert$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_Converter$TB($I$(12).collapse$net_imglib2_RandomAccessibleInterval($I$(12).stack$java_util_List(components)), composer, targetType);
}, 1);

Clazz.newMeth(C$, 'compose$java_util_List$net_imglib2_converter_Converter$java_util_function_Supplier', function (components, composer, targetTypeSupplier) {
return C$.compose$java_util_List$net_imglib2_converter_Converter$TB(components, composer, targetTypeSupplier.get$());
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
