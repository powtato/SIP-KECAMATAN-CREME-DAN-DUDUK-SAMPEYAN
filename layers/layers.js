ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:9518").setExtent([112.371834, -7.285208, 112.646283, -7.100508]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIGraylight_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasWilayah_3 = new ol.format.GeoJSON();
var features_BatasWilayah_3 = format_BatasWilayah_3.readFeatures(json_BatasWilayah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_BatasWilayah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayah_3.addFeatures(features_BatasWilayah_3);
var lyr_BatasWilayah_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasWilayah_3, 
                style: style_BatasWilayah_3,
                interactive: true,
                title: '<img src="styles/legend/BatasWilayah_3.png" /> Batas Wilayah'
            });
var lyr_Sentinel_CermeDuduk_2021_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sentinel_CermeDuduk_2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sentinel_CermeDuduk_2021_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520110.000000, -811732.458090, 12536010.000000, -791896.736509]
                            })
                        });
var lyr_NDBI2021_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDBI 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDBI2021_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520046.773610, -811786.981435, 12536079.399375, -791843.535154]
                            })
                        });
var lyr_NDVI2021_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI2021_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520046.773610, -811786.981435, 12536079.399375, -791843.535154]
                            })
                        });
var lyr_SKLDrainase_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL Drainase",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKLDrainase_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520118.809178, -811723.581510, 12535998.841814, -791885.672966]
                            })
                        });
var lyr_SKLKemudahanDikerjakan_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL Kemudahan Dikerjakan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKLKemudahanDikerjakan_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520118.809178, -811723.581510, 12535998.841814, -791885.672966]
                            })
                        });
var lyr_SKLKerentananErosi_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL Kerentanan Erosi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKLKerentananErosi_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520118.809178, -811723.581510, 12535998.841814, -791885.672966]
                            })
                        });
var lyr_SKLKestabilanLereng_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL Kestabilan Lereng",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKLKestabilanLereng_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520100.512288, -811703.556508, 12535990.292259, -791967.061466]
                            })
                        });
var lyr_SKLKestabilanPondasi_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL Kestabilan Pondasi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKLKestabilanPondasi_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520100.512288, -811703.556508, 12535990.292259, -791967.061466]
                            })
                        });
var lyr_SKLKetersediaanAir_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL Ketersediaan Air",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKLKetersediaanAir_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520118.809178, -811723.581510, 12535998.841814, -791885.672966]
                            })
                        });
var lyr_SKLMorfologi_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL Morfologi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKLMorfologi_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520118.809178, -811723.581510, 12535998.841814, -791885.672966]
                            })
                        });
var lyr_SKLPondasiBencanaAlam_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "SKL Pondasi Bencana Alam",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SKLPondasiBencanaAlam_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520100.512288, -811703.556508, 12535990.292259, -791967.061466]
                            })
                        });
var lyr_AKL_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "AKL",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AKL_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520118.809178, -811723.581510, 12535998.841814, -791885.672966]
                            })
                        });
var lyr_Reclassifiedraster_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reclassified raster",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Reclassifiedraster_16.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520118.809178, -811723.581510, 12535998.841814, -791885.672966]
                            })
                        });
var format_Vectorized_17 = new ol.format.GeoJSON();
var features_Vectorized_17 = format_Vectorized_17.readFeatures(json_Vectorized_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Vectorized_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vectorized_17.addFeatures(features_Vectorized_17);
var lyr_Vectorized_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vectorized_17, 
                style: style_Vectorized_17,
                interactive: true,
                title: '<img src="styles/legend/Vectorized_17.png" /> Vectorized'
            });
var format_Dissolved_18 = new ol.format.GeoJSON();
var features_Dissolved_18 = format_Dissolved_18.readFeatures(json_Dissolved_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_Dissolved_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_18.addFeatures(features_Dissolved_18);
var lyr_Dissolved_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dissolved_18, 
                style: style_Dissolved_18,
                interactive: true,
    title: 'Dissolved<br />\
    <img src="styles/legend/Dissolved_18_0.png" /> 3<br />\
    <img src="styles/legend/Dissolved_18_1.png" /> 4<br />'
        });
var lyr_ReclassifiedNDVI2021_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reclassified NDVI 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ReclassifiedNDVI2021_19.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520046.773610, -811786.981435, 12536079.399375, -791843.535154]
                            })
                        });
var lyr_ReclassifiedNDBI2021_20 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reclassified NDBI 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ReclassifiedNDBI2021_20.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12520046.773610, -811786.981435, 12536079.399375, -791843.535154]
                            })
                        });

lyr_ESRISatellite_0.setVisible(true);lyr_ESRIGraylight_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_BatasWilayah_3.setVisible(true);lyr_Sentinel_CermeDuduk_2021_4.setVisible(true);lyr_NDBI2021_5.setVisible(true);lyr_NDVI2021_6.setVisible(true);lyr_SKLDrainase_7.setVisible(true);lyr_SKLKemudahanDikerjakan_8.setVisible(true);lyr_SKLKerentananErosi_9.setVisible(true);lyr_SKLKestabilanLereng_10.setVisible(true);lyr_SKLKestabilanPondasi_11.setVisible(true);lyr_SKLKetersediaanAir_12.setVisible(true);lyr_SKLMorfologi_13.setVisible(true);lyr_SKLPondasiBencanaAlam_14.setVisible(true);lyr_AKL_15.setVisible(true);lyr_Reclassifiedraster_16.setVisible(true);lyr_Vectorized_17.setVisible(true);lyr_Dissolved_18.setVisible(true);lyr_ReclassifiedNDVI2021_19.setVisible(true);lyr_ReclassifiedNDBI2021_20.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_ESRIGraylight_1,lyr_OpenStreetMap_2,lyr_BatasWilayah_3,lyr_Sentinel_CermeDuduk_2021_4,lyr_NDBI2021_5,lyr_NDVI2021_6,lyr_SKLDrainase_7,lyr_SKLKemudahanDikerjakan_8,lyr_SKLKerentananErosi_9,lyr_SKLKestabilanLereng_10,lyr_SKLKestabilanPondasi_11,lyr_SKLKetersediaanAir_12,lyr_SKLMorfologi_13,lyr_SKLPondasiBencanaAlam_14,lyr_AKL_15,lyr_Reclassifiedraster_16,lyr_Vectorized_17,lyr_Dissolved_18,lyr_ReclassifiedNDVI2021_19,lyr_ReclassifiedNDBI2021_20];
lyr_BatasWilayah_3.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Vectorized_17.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Dissolved_18.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_BatasWilayah_3.set('fieldImages', {'fid': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Vectorized_17.set('fieldImages', {'fid': '', 'DN': '', });
lyr_Dissolved_18.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_BatasWilayah_3.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Vectorized_17.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Dissolved_18.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Dissolved_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});