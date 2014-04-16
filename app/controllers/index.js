function openLoRes() {
    var loRes = Alloy.createController('slideshowLores/main').getView();
    loRes.open(loRes.aIn);
}

function openHiRes() {
    var hiRes = Alloy.createController('slideshowHires/main').getView();
    hiRes.open(hiRes.aIn);
}

$.index.open();
