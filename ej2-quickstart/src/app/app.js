define(["require", "exports", "@syncfusion/ej2-grids", "./data"], function (require, exports, ej2_grids_1, data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cusdata = data_1.data.slice(0, 100);
    for (var i = 0; i < cusdata.length; i++) {
        for (var k = 0; k < 103; k++) {
            cusdata[i]["ShipCountry" + k] = "Ship Country - " + cusdata[i]["ShipCountry"] + " - " + cusdata[i]['OrderDate'] + " - " + k;
        }
    }
    var cuscol = [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd' },
        { field: 'ShipCountry0', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry1', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry2', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry3', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry4', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry5', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry6', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry7', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry8', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry9', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry10', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry11', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry12', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry13', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry14', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry15', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry16', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry17', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry18', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry19', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry20', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry21', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry22', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry23', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry24', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry25', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry26', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry27', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry28', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry29', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry30', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry31', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry32', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry33', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry34', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry35', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry36', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry37', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry38', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry39', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry40', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry41', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry42', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry43', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry44', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry45', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry46', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry47', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry48', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry49', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry50', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry52', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry53', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry54', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry55', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry56', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry57', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry58', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry59', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry60', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry62', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry63', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry64', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry65', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry66', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry67', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry68', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry69', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry70', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry71', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry72', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry73', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry74', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry75', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry76', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry77', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry78', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry79', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry80', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry81', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry82', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry83', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry84', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry85', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry86', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry87', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry88', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry89', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry90', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry91', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry92', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry93', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry94', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry95', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry96', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry97', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry98', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry99', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry100', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry101', headerText: 'Ship Country', minWidth: 150 },
        { field: 'ShipCountry102', headerText: 'Ship Country', minWidth: 150 },
    ];
    ej2_grids_1.Grid.Inject(ej2_grids_1.Resize);
    var grid = new ej2_grids_1.Grid({
        dataSource: cusdata,
        columns: cuscol,
        height: '100%',
        width: '100%',
        dataBound: function () {
            var start = Date.now();
            grid.autoFitColumns([]);
            console.log("Columns auto fit in " + (Date.now() - start) + "ms");
        }
    });
    grid.appendTo('#Grid');
    setTimeout(function () {
    }, 2000);
});
