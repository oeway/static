(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "J2KMetadataFormatResources", null, 'java.util.ListResourceBundle');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.contents=Clazz.array(java.lang.Object, -2, [Clazz.array(java.lang.Object, -1, ["JPEG2000SignatureBox", "The JPEG 2000 signature box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000FileTypeBox", "The JPEG 2000 file type box."]), Clazz.array(java.lang.Object, -1, ["OtherBoxes", "All the boxes other than the signature or file type box."]), Clazz.array(java.lang.Object, -1, ["HeaderCStream", "The super box conatins the header and code stream box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000IntellectualPropertyRightsBox", "The JPEG 2000 intellectual property rights box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000XMLBox", "The JPEG 2000 XML box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDBox", "The JPEG 2000 UUID box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDInfoBox", "The JPEG 2000 UUID information box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000HeaderSuperBox", "The JPEG 2000 header super box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000CodeStreamBox", "The JPEG 2000 code stream box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000HeaderBox", "The JPEG 2000 header box."]), Clazz.array(java.lang.Object, -1, ["OptionalBoxes", "The optional boxes in the header super box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000BitsPerComponentBox", "The JPEG2000 bits per component box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000ColorSpecificationBox", "The JPEG 2000 color specification box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000PaletteBox", "The JPEG 2000 palette box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000ComponentMappingBox", "The JPEG 2000 component mapping box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000ChannelDefinitionBox", "The JPEG 2000 channel definition box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000ResolutionBox", "The JPEG 2000 resolution box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000CaptureResolutionBox", "The JPEG 2000 capture resolution box"]), Clazz.array(java.lang.Object, -1, ["JPEG2000DefaultDisplayResolutionBox", "The JPEG 2000 default display resolution box"]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDListBox", "The JPEG 2000 UUID list box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000DataEntryURLBox", "The JPEG 2000 data entry URL box."]), Clazz.array(java.lang.Object, -1, ["Brand", "The brand of JPEG 2000 file. For JP2 file, it is \"jp2 \""]), Clazz.array(java.lang.Object, -1, ["MinorVersion", "The minor version of JPEG 2000 file. For JP2 file, it is 0"]), Clazz.array(java.lang.Object, -1, ["CompatibilityList", "The compatibility list. For non-JP2 file, at least one is \"jp2 \""]), Clazz.array(java.lang.Object, -1, ["Width", "The width of the image."]), Clazz.array(java.lang.Object, -1, ["Height", "The height of the image."]), Clazz.array(java.lang.Object, -1, ["NumComponents", "The number of image components in this image file."]), Clazz.array(java.lang.Object, -1, ["BitDepth", "Bit depths for all the image components or for each of the component if it is a array."]), Clazz.array(java.lang.Object, -1, ["CompressionType", "The compression type.  Always be 7 for JP2 file."]), Clazz.array(java.lang.Object, -1, ["UnknownColorspace", "Whether the color space is known or not."]), Clazz.array(java.lang.Object, -1, ["IntellectualProperty", "Whether intellectual property in included in this image."]), Clazz.array(java.lang.Object, -1, ["Method", "The method to define the color space. 1 by ECS; 2 by profile."]), Clazz.array(java.lang.Object, -1, ["Precedence", "Precedence. Be 0 for JP2 file."]), Clazz.array(java.lang.Object, -1, ["ApproximationAccuracy", "Approximation accuracy.  Be 0 for JP2 file"]), Clazz.array(java.lang.Object, -1, ["EnumeratedColorSpace", "Enumerated color space. 16: sRGB. 17: Gray"]), Clazz.array(java.lang.Object, -1, ["ICCProfile", "The ICC profile used to define the color space"]), Clazz.array(java.lang.Object, -1, ["NumberEntries", "The number of palette entries."]), Clazz.array(java.lang.Object, -1, ["NumberColors", "The number of color components."]), Clazz.array(java.lang.Object, -1, ["BitDepth", "The bit depths for the output components after LUT."]), Clazz.array(java.lang.Object, -1, ["LUT", "The LUT for the palette."]), Clazz.array(java.lang.Object, -1, ["LUTRow", " A row of the LUT."]), Clazz.array(java.lang.Object, -1, ["Component", "A component in the component mapping box."]), Clazz.array(java.lang.Object, -1, ["ComponentType", "The type of one component: itself or lut column."]), Clazz.array(java.lang.Object, -1, ["ComponentAssociation", "The LUT column used to define this component."]), Clazz.array(java.lang.Object, -1, ["NumberOfDefinition", "The number of definitions in channel definition box."]), Clazz.array(java.lang.Object, -1, ["Definitions", "Defines one channel."]), Clazz.array(java.lang.Object, -1, ["ChannelNumber", "The channel number."]), Clazz.array(java.lang.Object, -1, ["ChannelType", "The channel type: color, alpha, premultiplied alpha."]), Clazz.array(java.lang.Object, -1, ["ChannelAssociation", "The association of this channel to the color space."]), Clazz.array(java.lang.Object, -1, ["VerticalResolutionNumerator", "The vertical resolution numerator."]), Clazz.array(java.lang.Object, -1, ["VerticalResolutionDenominator", "The vertical resolution denominator."]), Clazz.array(java.lang.Object, -1, ["HorizontalResolutionNumerator", "The horizontal resolution numerator."]), Clazz.array(java.lang.Object, -1, ["HorizontalResolutionDenominator", "The horizontal resolution denominator."]), Clazz.array(java.lang.Object, -1, ["VerticalResolutionExponent", "The vertical resolution exponent."]), Clazz.array(java.lang.Object, -1, ["HorizontalResolutionExponent", "The horizontal resolution exponent."]), Clazz.array(java.lang.Object, -1, ["CodeStream", "The data of the code stream."]), Clazz.array(java.lang.Object, -1, ["Content", "The intellectual property rights or XML."]), Clazz.array(java.lang.Object, -1, ["UUID", "The UUID."]), Clazz.array(java.lang.Object, -1, ["Data", "The data of the UUID."]), Clazz.array(java.lang.Object, -1, ["NumberUUID", "The number of UUID in the UUID list box."]), Clazz.array(java.lang.Object, -1, ["Version", "The version. Always be 0 for JP2 file."]), Clazz.array(java.lang.Object, -1, ["Flags", "The flags.  Always be 0 for JP2 file."]), Clazz.array(java.lang.Object, -1, ["URL", "The URL"]), Clazz.array(java.lang.Object, -1, ["JPEG2000SignatureBox/Length", "The length of the signature box. Always be 12."]), Clazz.array(java.lang.Object, -1, ["JPEG2000SignatureBox/Type", "The type of the signature box. Always be \"jP  \""]), Clazz.array(java.lang.Object, -1, ["JPEG2000SignatureBox/Signature", "The content of the signature box. Always be 0D0A870A."]), Clazz.array(java.lang.Object, -1, ["JPEG2000FileTypeBox/Length", "The length of the file type box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000FileTypeBox/Type", "The type of the file type box. Always be \"ftpy\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000FileTypeBox/ExtraLength", "The extra length of the file type box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000HeaderSuperBox/Length", "The length of the header super box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000HeaderSuperBox/Type", "The type of the header super box. Always be \"jp2h\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000HeaderSuperBox/ExtraLength", "The extra length of the header super box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000HeaderBox/Length", "The length of the header box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000HeaderBox/Type", "The type of the header box. Always be \"ihdr\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000HeaderBox/ExtraLength", "The extra length of the header box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000BitsPerComponentBox/Length", "The length of the bits per component box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000BitsPerComponentBox/Type", "The type of the bits per component box. Always be \"bpcc\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000BitsPerComponentBox/ExtraLength", "The extra length of the bits per component box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000ColorSpecificationBox/Length", "The length of the bits per component box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000ColorSpecificationBox/Type", "The type of the bits per component box. Always be \"colr\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000ColorSpecificationBox/ExtraLength", "The extra length of the bits per component box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000PaletteBox/Length", "The length of the palette box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000PaletteBox/Type", "The type of the palette box. Always be \"pclr\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000PaletteBox/ExtraLength", "The extra length of the palette box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000ComponentMappingBox/Length", "The length of the component mapping box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000ComponentMappingBox/Type", "The type of the component mapping box. Always be \"cmap\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000ComponentMappingBox/ExtraLength", "The extra length of the component mapping box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000ChannelDefinitionBox/Length", "The length of the channel definition box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000ChannelDefinitionBox/Type", "The type of the channel definition box. Always be \"cdef\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000ChannelDefinitionBox/ExtraLength", "The extra length of the channel definition box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000ResolutionBox/Length", "The length of the resolution box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000ResolutionBox/Type", "The type of the resolution box. Always be \"res \""]), Clazz.array(java.lang.Object, -1, ["JPEG2000ResolutionBox/ExtraLength", "The extra length of the resolution box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000CaptureResolutionBox/Length", "The length of the capture resolution box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000CaptureResolutionBox/Type", "The type of the capture resolution box. Always be \"resc\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000CaptureResolutionBox/ExtraLength", "The extra length of the capture resolution box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000DefaultDisplayResolutionBox/Length", "The length of the default display resolution box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000DefaultDisplayResolutionBox/Type", "The type of the default display resolution box. Always be \"resd\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000DefaultDisplayResolutionBox/ExtraLength", "The extra length of the default display resolution box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000CodeStreamBox/Length", "The length of the code stream box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000CodeStreamBox/Type", "The type of the code stream box. Always be \"jp2c\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000CodeStreamBox/ExtraLength", "The extra length of the code stream box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000IntellectualPropertyRightsBox/Length", "The length of the intellectual property rights box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000IntellectualPropertyRightsBox/Type", "The type of the intellectual property rights box. Always be \"jp2i\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000IntellectualPropertyRightsBox/ExtraLength", "The extra length of the intellectual property rights box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000XMLBox/Length", "The length of the XML box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000XMLBox/Type", "The type of the XML box. Always be \"xml \""]), Clazz.array(java.lang.Object, -1, ["JPEG2000XMLBox/ExtraLength", "The extra length of the XML box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDBox/Length", "The length of the UUID box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDBox/Type", "The type of the UUID box. Always be \"uuid\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDBox/ExtraLength", "The extra length of the UUID box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDInfoBox/Length", "The length of the UUID information box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDInfoBox/Type", "The type of the UUID information box. Always be \"uinf\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDInfoBox/ExtraLength", "The extra length of the UUID information box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDListBox/Length", "The length of the UUID list box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDListBox/Type", "The type of the UUID list box. Always be \"ulst\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000UUIDListBox/ExtraLength", "The extra length of the UUID list box.  Optional.  Set when Length = 1"]), Clazz.array(java.lang.Object, -1, ["JPEG2000DataEntryURLBox/Length", "The length of the data entry URL box."]), Clazz.array(java.lang.Object, -1, ["JPEG2000DataEntryURLBox/Type", "The type of the data entry URL box. Always be \"ulst\""]), Clazz.array(java.lang.Object, -1, ["JPEG2000DataEntryURLBox/ExtraLength", "The extra length of the data entry URL box.  Optional.  Set when Length = 1"])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['contents','Object[][]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getContents$', function () {
return C$.contents;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
