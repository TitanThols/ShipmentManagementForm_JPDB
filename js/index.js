var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var shipmentDBName = "Delivery";
var shipmentRelationName = "Shipment-Rel";
var connToken = "90935275|-31949235941424822|90958568";

var recNo = "";

$(document).ready(function () {
    resetForm();
    $("#shipmentNo").on("blur", checkShipmentNo);
    
    $("#shipmentNo").on("keypress", function (e) {
        if (e.which === 13) { 
            e.preventDefault(); 
            checkShipmentNo();
        }
    });
});

function resetForm() {
    recNo = "";
    $("#shipmentNo").val("").prop("disabled", false);
    $("#desc").val("").prop("disabled", true);
    $("#source").val("").prop("disabled", true);
    $("#destination").val("").prop("disabled", true);
    $("#shippingDate").val("").prop("disabled", true);
    $("#expectedDeliveryDate").val("").prop("disabled", true);
    $("#saveBtn").prop("disabled", true);
    $("#updateBtn").prop("disabled", true);
    $("#resetBtn").prop("disabled", true);
    $("#shipmentNo").focus();
}

function checkShipmentNo() {
    var shipmentNo = $("#shipmentNo").val();
    if (shipmentNo=== "") {
        alert("Shipment No is Required");
        $("#shipmentNo").focus();
        return;
    }

    var jsonStr = JSON.stringify({ shipmentNo: shipmentNo });
    var getReq = createGET_BY_KEYRequest(connToken, shipmentDBName, shipmentRelationName, jsonStr);

    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommand(getReq, jpdbIRL);
    jQuery.ajaxSetup({ async: true });

    if (resultObj.status === 200) {
        var data = JSON.parse(resultObj.data).record;
        recNo = JSON.parse(resultObj.data).rec_no;

        $("#desc").val(data.desc).prop("disabled", false);
        $("#source").val(data.source).prop("disabled", false);
        $("#destination").val(data.destination).prop("disabled", false);
        $("#shippingDate").val(data.shippingDate).prop("disabled", false);
        $("#expectedDeliveryDate").val(data.expectedDeliveryDate).prop("disabled", false);
        $("#shipmentNo").prop("disabled", true);
        $("#saveBtn").prop("disabled", true);
        $("#updateBtn").prop("disabled", false);
        $("#resetBtn").prop("disabled", false);
        $("#desc").focus();
    } else {
        $("#desc").val("").prop("disabled", false);
        $("#source").val("").prop("disabled", false);
        $("#destination").val("").prop("disabled", false);
        $("#shippingDate").val("").prop("disabled", false);
        $("#expectedDeliveryDate").val("").prop("disabled", false);
        $("#saveBtn").prop("disabled", false);
        $("#updateBtn").prop("disabled", true);
        $("#resetBtn").prop("disabled", false);
        $("#desc").focus();
    }
}

function validateData() {
    var shipmentNo = $("#shipmentNo").val();
    if (shipmentNo === "") {
        alert("Shipment No is Required");
        $("#shipmentNo").focus();
        return "";
    }
    var desc = $("#desc").val();
    if (desc === "") {
        alert("Description is Required");
        $("#desc").focus();
        return "";
    }
    var source = $("#source").val();
    if (source === "") {
        alert("Source is Required");
        $("#source").focus();
        return "";
    }
    var destination = $("#destination").val();
    if (destination === "") {
        alert("Destination is Required");
        $("#destination").focus();
        return "";
    }
    var shippingDate = $("#shippingDate").val();
    if (shippingDate === "") {
        alert("Shipping Date is Required");
        $("#shippingDate").focus();
        return "";
    }
    var expectedDeliveryDate = $("#expectedDeliveryDate").val();
    if (expectedDeliveryDate === "") {
        alert("Expected Delivery Date is Required");
        $("#expectedDeliveryDate").focus();
        return "";
    }
    var jsonStrObj = {
        shipmentNo: shipmentNo,
        desc: desc,
        source: source,
        destination: destination,
        shippingDate: shippingDate,
        expectedDeliveryDate: expectedDeliveryDate,
    };
    return JSON.stringify(jsonStrObj);
}

function saveData() {
    var jsonStr = validateData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(connToken, jsonStr, shipmentDBName, shipmentRelationName);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommand(putReqStr, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    if (resultObj.status === 200) {
        alert("Shipment saved successfully!");
    } else {
        alert("Error: " + resultObj.message);
    }
    resetForm();
}

function updateData() {
    var jsonStr = validateData();
    if (jsonStr === "") {
        return;
    }
    var updateReqStr = createUPDATERecordRequest(connToken, jsonStr, shipmentDBName, shipmentRelationName, recNo);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommand(updateReqStr, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    if (resultObj.status === 200) {
        alert("Shipment updated successfully!");
    } else {
        alert("Error: " + resultObj.message);
    }
    resetForm();
}