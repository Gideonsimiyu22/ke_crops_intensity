var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ken_admbnda_adm1_iebc_20191031_1 = new ol.format.GeoJSON();
var features_ken_admbnda_adm1_iebc_20191031_1 = format_ken_admbnda_adm1_iebc_20191031_1.readFeatures(json_ken_admbnda_adm1_iebc_20191031_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_admbnda_adm1_iebc_20191031_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_admbnda_adm1_iebc_20191031_1.addFeatures(features_ken_admbnda_adm1_iebc_20191031_1);
var lyr_ken_admbnda_adm1_iebc_20191031_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_admbnda_adm1_iebc_20191031_1, 
                style: style_ken_admbnda_adm1_iebc_20191031_1,
                popuplayertitle: "ken_admbnda_adm1_iebc_20191031",
                interactive: true,
                title: '<img src="styles/legend/ken_admbnda_adm1_iebc_20191031_1.png" /> ken_admbnda_adm1_iebc_20191031'
            });
var format_ke_crops_size_2 = new ol.format.GeoJSON();
var features_ke_crops_size_2 = format_ke_crops_size_2.readFeatures(json_ke_crops_size_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ke_crops_size_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ke_crops_size_2.addFeatures(features_ke_crops_size_2);
var lyr_ke_crops_size_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ke_crops_size_2, 
                style: style_ke_crops_size_2,
                popuplayertitle: "ke_crops_size",
                interactive: true,
                title: '<img src="styles/legend/ke_crops_size_2.png" /> ke_crops_size'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ken_admbnda_adm1_iebc_20191031_1.setVisible(true);lyr_ke_crops_size_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ken_admbnda_adm1_iebc_20191031_1,lyr_ke_crops_size_2];
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_ke_crops_size_2.set('fieldAliases', {'USERLABEL': 'USERLABEL', 'CODE1': 'CODE1', 'CODE2': 'CODE2', 'CODE3': 'CODE3', 'LCCSCODE': 'LCCSCODE', 'CODE1_DESC': 'CODE1_DESC', 'CODE2_DESC': 'CODE2_DESC', 'CODE3_DESC': 'CODE3_DESC', 'AREA_SQKM_': 'AREA_SQKM_', 'NEW_SIZE2': 'NEW_SIZE2', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_ke_crops_size_2.set('fieldImages', {'USERLABEL': 'TextEdit', 'CODE1': 'TextEdit', 'CODE2': 'TextEdit', 'CODE3': 'TextEdit', 'LCCSCODE': 'TextEdit', 'CODE1_DESC': 'TextEdit', 'CODE2_DESC': 'TextEdit', 'CODE3_DESC': 'TextEdit', 'AREA_SQKM_': 'TextEdit', 'NEW_SIZE2': 'Range', });
lyr_ken_admbnda_adm1_iebc_20191031_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_ke_crops_size_2.set('fieldLabels', {'USERLABEL': 'no label', 'CODE1': 'no label', 'CODE2': 'no label', 'CODE3': 'no label', 'LCCSCODE': 'no label', 'CODE1_DESC': 'inline label - always visible', 'CODE2_DESC': 'inline label - always visible', 'CODE3_DESC': 'no label', 'AREA_SQKM_': 'no label', 'NEW_SIZE2': 'no label', });
lyr_ke_crops_size_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});