var contentView;

var images_dir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images', 'hiRes');
if(images_dir.exists()) {
    
    var one = '/images/hiRes/one.jpg';
    var two = '/images/hiRes/two.jpg';
    var three = '/images/hiRes/three.jpg';
    var four = '/images/hiRes/four.jpg';
    var five = '/images/hiRes/five.jpg';
    var six = '/images/hiRes/six.jpg';
    var seven = '/images/hiRes/seven.jpg';
    var eight = '/images/hiRes/eight.jpg';
    var nine = '/images/hiRes/nine.jpg';
    var ten = '/images/hiRes/ten.jpg';

    var allImagesArr = [one,two,three,four,five,six,seven,eight,nine,ten];
}

var curMedia;

function load() {
    contentView = Alloy.createController('media/slideshow').getView();
    contentView.updateToolbar = function(e) {  
        if (curMedia != slides[e.currentPage].media) {
            curMedia = slides[e.currentPage].media;
        }    
    };
    
    var slides = [];
    
    allImagesArr.forEach(function(doc) {
        slides.push(Alloy.createController('media/slide', doc).getView());
    })
        
    contentView.views = slides;
    // contentView.scrollToView(allImagesArr.index);
    $.content.add(contentView);
}

function close(e) {
    $.main.close({
        opacity: 0,
        duration: 200
    });
}


